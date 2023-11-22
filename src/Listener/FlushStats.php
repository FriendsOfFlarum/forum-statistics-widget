<?php

/*
 * This file is part of fof/forum-statistics-widget.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\ForumStatisticsWidget\Listener;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\Deleted as UserDeleted;
use Flarum\User\Event\Deleting as UserDeleting;
use Flarum\User\Event\Registered;
use FoF\ForumStatisticsWidget\AddForumStats;
use Illuminate\Contracts\Cache\Repository as Cache;
use Illuminate\Contracts\Events\Dispatcher;

class FlushStats
{
    /**
     * @var Cache
     */
    public $cache;

    public $settings;

    public function __construct(Cache $cache, SettingsRepositoryInterface $settings)
    {
        $this->cache = $cache;
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events): void
    {
        // Flush on both deleting and deleted else a request make in between deleting and deleted will return the old stats.
        $events->listen([UserDeleting::class, UserDeleted::class], [$this, 'flushStats']);

        if ((bool) $this->settings->get('fof-forum-statistics-widget.flush_cache_on_new_registration')) {
            $events->listen(Registered::class, [$this, 'flushStats']);
        }
    }

    public function flushStats($event): void
    {
        $this->cache->forget(AddForumStats::CACHE_KEY);
    }
}
