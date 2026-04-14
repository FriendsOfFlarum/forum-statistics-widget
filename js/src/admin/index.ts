import app from 'flarum/admin/app';

import registerWidget from '../common/registerWidget';

export { default as extend } from './extend';

app.initializers.add('fof-forum-statistics-widget', () => {
  registerWidget();
});
