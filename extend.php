<?php

/*
 * This file is part of fof/forum-statistics-widget.
 *
 * Copyright (c) 2021 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\ForumStatisticsWidget;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Extend;
use Flarum\Post\Post;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Settings())
        ->serializeToForum(
            'fof-forum-statistics-widget.ignore_private_discussions',
            'fof-forum-statistics-widget.ignore_private_discussions',
            'boolval'
        ),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('fof-forum-statistics-widget.widget_order', function ($serializer, $model) {
            $settings = resolve(SettingsRepositoryInterface::class);

            return (int) $settings->get('fof-forum-statistics-widget.widget_order', 0);
        })
        ->attribute('fof-forum-statistics-widget.discussionsCount', function ($serializer, $model, $attributes) {
            return $attributes['fof-forum-statistics-widget.ignore_private_discussions'] ?
                Discussion::where('is_private', 0)->count() : Discussion::count();
        })
        ->attribute('fof-forum-statistics-widget.postsCount', function ($serializer, $model) {
            return Post::where('type', 'comment')->count();
        })
        ->attribute('fof-forum-statistics-widget.usersCount', function ($serializer, $model) {
            return User::count();
        })
        ->attribute('fof-forum-statistics-widget.lastUser', function ($serializer, $model) {
            $lastUser = User::orderBy('joined_at', 'DESC')->limit(1)->first();

            return $lastUser != null ? $lastUser->display_name : null;
        }),
];
