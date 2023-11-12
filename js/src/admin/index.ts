import app from 'flarum/admin/app';

const translationPrefix = 'fof-forum-statistics-widget.admin.';

app.initializers.add('fof-forum-statistics-widget', () => {
  app.extensionData
    .for('fof-forum-statistics-widget')
    .registerSetting({
      label: app.translator.trans(translationPrefix + 'settings.widget_ignore_private_discussions_label'),
      setting: 'fof-forum-statistics-widget.ignore_private_discussions',
      type: 'switch',
    })
    .registerSetting({
      label: app.translator.trans(translationPrefix + 'settings.widget_order_label'),
      setting: 'fof-forum-statistics-widget.widget_order',
      type: 'number',
      help: app.translator.trans(translationPrefix + 'settings.widget_helper_text'),
    })
    .registerSetting({
      setting: 'fof-forum-statistics-widget.cache_duration',
      type: 'number',
      min: 0,
      label: app.translator.trans('fof-forum-statistics-widget.admin.settings.cache_duration_label'),
      help: app.translator.trans('fof-forum-statistics-widget.admin.settings.cache_duration_help'),
    })
    .registerPermission(
      {
        icon: 'fas fa-chart-bar',
        label: app.translator.trans(translationPrefix + 'permissions.view_discussions_count_label'),
        permission: 'fof-forum-statistics-widget.viewWidget.discussionsCount',
        allowGuest: true,
      },
      'view'
    )
    .registerPermission(
      {
        icon: 'fas fa-chart-bar',
        label: app.translator.trans(translationPrefix + 'permissions.view_posts_count_label'),
        permission: 'fof-forum-statistics-widget.viewWidget.postsCount',
        allowGuest: true,
      },
      'view'
    )
    .registerPermission(
      {
        icon: 'fas fa-chart-bar',
        label: app.translator.trans(translationPrefix + 'permissions.view_users_count_label'),
        permission: 'fof-forum-statistics-widget.viewWidget.usersCount',
        allowGuest: true,
      },
      'view'
    )
    .registerPermission(
      {
        icon: 'fas fa-chart-bar',
        label: app.translator.trans(translationPrefix + 'permissions.view_lastest_member_label'),
        permission: 'fof-forum-statistics-widget.viewWidget.latestMember',
        allowGuest: true,
      },
      'view'
    );
});
