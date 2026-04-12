# FoF Forum Statistics Widget

![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square) [![Latest Stable Version](https://img.shields.io/packagist/v/fof/forum-statistics-widget.svg?style=flat-square)](https://packagist.org/packages/fof/forum-statistics-widget) [![Total Downloads](https://img.shields.io/packagist/dt/fof/forum-statistics-widget.svg?style=flat-square)](https://packagist.org/packages/fof/forum-statistics-widget)

A [Flarum](http://flarum.org) extension. Add a forum statistics widget to your Flarum forum, displaying discussion, post, and member counts alongside the latest registered member.

> [!NOTE]
> This extension now requires [Forum Widgets Core](https://github.com/FriendsOfFlarum/forum-widgets-core). Widget placement is managed through the Forum Widgets Core admin UI — the previous **Widget Order** setting has been removed.

## Installation

This will also install [Forum Widgets Core](https://github.com/FriendsOfFlarum/forum-widgets-core) as it relies on it.

Install with composer:

```sh
composer require fof/forum-statistics-widget:"*"
```

## Updating

```sh
composer update fof/forum-statistics-widget:"*" --with-dependencies
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/fof/forum-statistics-widget)
- [GitHub](https://github.com/FriendsOfFlarum/forum-statistics-widget)
- [Discuss](https://discuss.flarum.org/d/22380)
