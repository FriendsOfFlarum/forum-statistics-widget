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

use Flarum\User\Event\Deleted as UserDeleted;
use Flarum\User\Event\Deleting as UserDeleting;
use FoF\ForumStatisticsWidget\AddForumStats;
use Illuminate\Contracts\Cache\Repository as Cache;
use Illuminate\Contracts\Events\Dispatcher;

class FlushStats
{
    /**
     * @var Cache
     */
    public $cache;

    public function __construct(Cache $cache)
    {
        $this->cache = $cache;
    }

    public function subscribe(Dispatcher $events): void
    {
        // Flush on both deleting and deleted else a request make in between deleting and deleted will return the old stats.
        $events->listen([UserDeleting::class, UserDeleted::class], [$this, 'flushStats']);
    }

    public function flushStats($event): void
    {
        $this->cache->forget(AddForumStats::CACHE_KEY);
    }
}
