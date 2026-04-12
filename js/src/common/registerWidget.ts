import app from 'flarum/common/app';
import Widgets from 'flarum/extensions/fof-forum-widgets-core/common/extend/Widgets';

import ForumStatisticsWidget from './components/ForumStatisticsWidget';

const attributePrefix = 'fof-forum-statistics-widget.';

export default function () {
  new Widgets()
    .add({
      key: 'forumStatistics',
      component: ForumStatisticsWidget,
      isDisabled: () => {
        const f = app.forum;
        return (
          !f.attribute(attributePrefix + 'discussionsCount') &&
          !f.attribute(attributePrefix + 'postsCount') &&
          !f.attribute(attributePrefix + 'usersCount') &&
          !f.attribute(attributePrefix + 'lastUserId')
        );
      },
      isUnique: true,
      placement: 'end',
      position: 0,
    })
    .extend(app, 'fof-forum-statistics-widget');
}
