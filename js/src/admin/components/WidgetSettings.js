import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';

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
                {Switch.component(
                    {
                        state: this.setting('fof-forum-statistics-widget.ignore_private_discussions')() == 1,
                        onchange: this.setting('fof-forum-statistics-widget.ignore_private_discussions'),
                    },
                    app.translator.trans(translationPrefix + 'widget_ignore_private_discussions_label')
                )}
            </div>,
            <div className="Form-group">
                <label>{app.translator.trans(translationPrefix + 'widget_order_label')}</label>
                <div className="helpText">{app.translator.trans(translationPrefix + 'widget_helper_text')}</div>
                <input required className="FormControl" type="number" bidi={this.setting('fof-forum-statistics-widget.widget_order')}></input>
            </div>,
        ];
    }
}
