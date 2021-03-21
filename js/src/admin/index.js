import app from 'flarum/common/app';

const translationPrefix = 'fof-forum-statistics-widget.admin.settings.';

app.initializers.add('fof-forum-statistics-widget', () => {
    app.extensionData
        .for('fof-forum-statistics-widget')
        .registerSetting({
            label: app.translator.trans(translationPrefix + 'widget_ignore_private_discussions_label'),
            setting: 'fof-forum-statistics-widget.ignore_private_discussions',
            type: 'switch',
        })
        .registerSetting({
            label: app.translator.trans(translationPrefix + 'widget_order_label'),
            setting: 'fof-forum-statistics-widget.widget_order',
            type: 'number',
            help: app.translator.trans(translationPrefix + 'widget_helper_text'),
        })
        .registerPermission(
            {
                icon: 'fas fa-chart-bar',
                label: 'View forum statistics widget discussions count',
                permission: 'fof-forum-statistics-widget.viewWidget.discussionsCount',
                allowGuest: true,
            },
            'view'
        )
        .registerPermission(
            {
                icon: 'fas fa-chart-bar',
                label: 'View forum statistics widget posts count',
                permission: 'fof-forum-statistics-widget.viewWidget.postsCount',
                allowGuest: true,
            },
            'view'
        )
        .registerPermission(
            {
                icon: 'fas fa-chart-bar',
                label: 'View forum statistics widget posts count',
                permission: 'fof-forum-statistics-widget.viewWidget.usersCount',
                allowGuest: true,
            },
            'view'
        )
        .registerPermission(
            {
                icon: 'fas fa-chart-bar',
                label: 'View forum statistics widget latest member',
                permission: 'fof-forum-statistics-widget.viewWidget.latestMember',
                allowGuest: true,
            },
            'view'
        );
});
