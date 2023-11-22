<?php

/*
 * This file is part of fof/forum-statistics-widget.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\ForumStatisticsWidget\Repository;

use Flarum\User\User;

class StatsRepository
{
    public function getLatestUser(): ?User
    {
        return User::query()->orderBy('joined_at', 'DESC')->limit(1)->first();
    }

    public function getLatestUserId(): ?int
    {
        return $this->getLatestUser() ? $this->getLatestUser()->id : null;
    }
}
