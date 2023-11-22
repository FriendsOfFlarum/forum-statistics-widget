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
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Settings())
        ->default('fof-forum-statistics-widget.ignore_private_discussions', false)
        ->default('fof-forum-statistics-widget.cache_duration', 600)
        ->default('fof-forum-statistics-widget.flush_cache_on_new_registration', false)
        ->serializeToForum(
            'fof-forum-statistics-widget.widget_order',
            'fof-forum-statistics-widget.widget_order',
            'intval',
            0
        ),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(AddForumStats::class),

    (new Extend\Event())
        ->subscribe(Listener\FlushStats::class),
];
