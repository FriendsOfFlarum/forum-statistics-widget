import app from 'flarum/forum/app';

import registerWidget from '../common/registerWidget';

app.initializers.add('fof/forum-statistics-widget', () => {
  registerWidget();
});
