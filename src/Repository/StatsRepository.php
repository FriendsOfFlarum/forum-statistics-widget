<?php

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