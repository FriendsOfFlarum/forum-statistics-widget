<?php

/*
 * This file is part of fof/forum-statistics-widget.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\ForumStatisticsWidget;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Post\CommentPost;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use FoF\ForumStatisticsWidget\Repository\StatsRepository;
use Illuminate\Contracts\Cache\Repository as Cache;
use Illuminate\Support\Arr;

class AddForumStats
{
    public const CACHE_KEY = 'fof-forum-statistics-widget.stats';

    /**
     * @var Cache
     */
    protected $cache;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    protected $stats;

    public function __construct(Cache $cache, SettingsRepositoryInterface $settings, StatsRepository $stats)
    {
        $this->cache = $cache;
        $this->settings = $settings;
        $this->stats = $stats;
    }

    public function __invoke(ForumSerializer $serializer, $model, $attributes): array
    {
        $ttl = (int) $this->settings->get('fof-forum-statistics-widget.cache_duration');

        $stats = $this->cache->remember(self::CACHE_KEY, $ttl, function (): array {
            return $this->buildStats();
        }) ?: [];

        if (empty($stats)) {
            return $attributes;
        }

        $actor = $serializer->getActor();

        if ($actor->can('fof-forum-statistics-widget.viewWidget.discussionsCount')) {
            $attributes['fof-forum-statistics-widget.discussionsCount'] = Arr::get($stats, 'discussion_count');
        }

        if ($actor->can('fof-forum-statistics-widget.viewWidget.postsCount')) {
            $attributes['fof-forum-statistics-widget.postsCount'] = Arr::get($stats, 'comment_post_count');
        }

        if ($actor->can('fof-forum-statistics-widget.viewWidget.usersCount')) {
            $attributes['fof-forum-statistics-widget.usersCount'] = Arr::get($stats, 'user_count');
        }

        if ($actor->can('fof-forum-statistics-widget.viewWidget.latestMember')) {
            $attributes['fof-forum-statistics-widget.lastUserId'] = Arr::get($stats, 'last_user');
        }

        return $attributes;
    }

    protected function buildStats(): array
    {
        $ignorePrivate = (bool) $this->settings->get('fof-forum-statistics-widget.ignore_private_discussions');

        return [
            'discussion_count'   => $ignorePrivate ? Discussion::query()->where('is_private', false)->count() : Discussion::query()->count(),
            'user_count'         => User::query()->count(),
            'comment_post_count' => CommentPost::query()->count(),
            'last_user'          => $this->stats->getLatestUserId(),
        ];
    }
}
