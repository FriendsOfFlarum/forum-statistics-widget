import app from 'flarum/app';
import WidgetSettings from './components/WidgetSettings';

app.initializers.add('fof-forum-statistics-widget', app => {
  app.extensionSettings['fof-forum-statistics-widget'] = () => {
    app.modal.show(new WidgetSettings());
  }
});
