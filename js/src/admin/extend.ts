import app from 'flarum/admin/app';
import Extend from 'flarum/common/extenders';

const translationPrefix = 'fof-forum-statistics-widget.admin.';

export default [
  new Extend.Admin()
    .setting(() => ({
      label: app.translator.trans(translationPrefix + 'settings.widget_ignore_private_discussions_label'),
      setting: 'fof-forum-statistics-widget.ignore_private_discussions',
      type: 'switch',
    }))
    .setting(() => ({
      setting: 'fof-forum-statistics-widget.classic_look',
      type: 'switch',
      label: app.translator.trans(translationPrefix + 'settings.classic_look_label'),
      help: app.translator.trans(translationPrefix + 'settings.classic_look_help'),
    }))
    .setting(() => ({
      setting: 'fof-forum-statistics-widget.cache_duration',
      type: 'number',
      min: 0,
      label: app.translator.trans(translationPrefix + 'settings.cache_duration_label'),
      help: app.translator.trans(translationPrefix + 'settings.cache_duration_help'),
    }))
    .setting(() => ({
      setting: 'fof-forum-statistics-widget.flush_cache_on_new_registration',
      type: 'boolean',
      label: app.translator.trans(translationPrefix + 'settings.flush_cache_on_new_registration_label'),
      help: app.translator.trans(translationPrefix + 'settings.flush_cache_on_new_registration_help'),
    }))
    .permission(
      () => ({
        icon: 'fas fa-chart-bar',
        label: app.translator.trans(translationPrefix + 'permissions.view_discussions_count_label'),
        permission: 'fof-forum-statistics-widget.viewWidget.discussionsCount',
        allowGuest: true,
      }),
      'view'
    )
    .permission(
      () => ({
        icon: 'fas fa-chart-bar',
        label: app.translator.trans(translationPrefix + 'permissions.view_posts_count_label'),
        permission: 'fof-forum-statistics-widget.viewWidget.postsCount',
        allowGuest: true,
      }),
      'view'
    )
    .permission(
      () => ({
        icon: 'fas fa-chart-bar',
        label: app.translator.trans(translationPrefix + 'permissions.view_users_count_label'),
        permission: 'fof-forum-statistics-widget.viewWidget.usersCount',
        allowGuest: true,
      }),
      'view'
    )
    .permission(
      () => ({
        icon: 'fas fa-chart-bar',
        label: app.translator.trans(translationPrefix + 'permissions.view_lastest_member_label'),
        permission: 'fof-forum-statistics-widget.viewWidget.latestMember',
        allowGuest: true,
      }),
      'view'
    ),
];
