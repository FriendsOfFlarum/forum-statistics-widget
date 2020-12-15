import app from 'flarum/app';

const translationPrefix = 'fof-forum-statistics-widget.admin.settings.';

app.initializers.add('fof-forum-statistics-widget', () => {
    app.extensionData.for('fof-forum-statistics-widget')
      .registerSetting({
        label: app.translator.trans(translationPrefix + 'widget_ignore_private_discussions_label'),
        setting: 'fof-forum-statistics-widget.ignore_private_discussions',
        type: 'boolean',
      })
      .registerSetting({
        label: app.translator.trans(translationPrefix + 'widget_order_label'),
        setting: 'fof-forum-statistics-widget.label1',
        type: 'hidden',
      })
      .registerSetting({
        label: app.translator.trans(translationPrefix + 'widget_helper_text'),
        setting: 'fof-forum-statistics-widget.widget_order',
        type: 'number',
      })
});
