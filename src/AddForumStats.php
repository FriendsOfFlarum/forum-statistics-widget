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

use Flarum\Api\Context;
use Flarum\Api\Schema;
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

    public function __construct(protected Cache $cache, protected SettingsRepositoryInterface $settings, protected StatsRepository $stats)
    {
    }

    public function __invoke(): array
    {
        return [
            Schema\Integer::make('fof-forum-statistics-widget.discussionsCount')
                ->visible(fn ($model, Context $context) => $context->getActor()->can('fof-forum-statistics-widget.viewWidget.discussionsCount'))
                ->get(fn () => Arr::get($this->getStats(), 'discussion_count')),

            Schema\Integer::make('fof-forum-statistics-widget.postsCount')
                ->visible(fn ($model, Context $context) => $context->getActor()->can('fof-forum-statistics-widget.viewWidget.postsCount'))
                ->get(fn () => Arr::get($this->getStats(), 'comment_post_count')),

            Schema\Integer::make('fof-forum-statistics-widget.usersCount')
                ->visible(fn ($model, Context $context) => $context->getActor()->can('fof-forum-statistics-widget.viewWidget.usersCount'))
                ->get(fn () => Arr::get($this->getStats(), 'user_count')),

            Schema\Integer::make('fof-forum-statistics-widget.lastUserId')
                ->visible(fn ($model, Context $context) => $context->getActor()->can('fof-forum-statistics-widget.viewWidget.latestMember'))
                ->get(fn () => Arr::get($this->getStats(), 'last_user')),
        ];
    }

    protected function getStats(): array
    {
        $ttl = (int) $this->settings->get('fof-forum-statistics-widget.cache_duration');

        return $this->cache->remember(self::CACHE_KEY, $ttl, function (): array {
            return $this->buildStats();
        }) ?: [];
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
