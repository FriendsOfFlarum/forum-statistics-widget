import SettingsModal from 'flarum/components/SettingsModal';

const translationPrefix = 'fof-forum-statistics-widget.admin.settings.';

export default class WidgetSettings extends SettingsModal {
  className() {
    return 'Modal--small';
  }

  title() {
    return app.translator.trans(translationPrefix + 'title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>
          {app.translator.trans(translationPrefix + 'widget_order_label')}
        </label>
        <div className="helpText">
          {app.translator.trans(translationPrefix + 'widget_helper_text')}
        </div>
        <input required className="FormControl" type="number"
               bidi={this.setting('fof-forum-statistics-widget.widget_order')}></input>
      </div>
    ];
  }
}
