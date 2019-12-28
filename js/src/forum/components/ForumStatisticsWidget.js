import Component from 'flarum/Component';
import username from 'flarum/helpers/username';
import formatNumber from 'flarum/utils/formatNumber';

const translationPrefix = 'fof-forum-statistics-widget.forum.navbar.';

export default class ForumStatisticsWidget extends Component {
  init() {
    super.init();
  }

  view() {
    let discussionsCount = formatNumber(app.forum.attribute('discussionsCount'));
    let postsCount = formatNumber(app.forum.attribute('postsCount'));
    let usersCount = formatNumber(app.forum.attribute('usersCount'));

    let user = {
      displayName: m.prop(app.forum.attribute('lastUser')),
      username: m.prop(app.forum.attribute('lastUser')),
    };

    return (
      <div class="ForumStatistics containerNarrow">
        <div class="row">
          <h2><i class="fas fa-chart-bar"></i> {app.translator.trans(translationPrefix + 'widget_title')}</h2>
          <div>
            <ul class="ForumStatisticsList">
              <li>{app.translator.trans(translationPrefix + 'discussions_count', {discussionsCount})}</li>
              <li>{app.translator.trans(translationPrefix + 'posts_count', {postsCount})}</li>
              <li>{app.translator.trans(translationPrefix + 'users_count', {usersCount})}</li>
              <li>{app.translator.trans(translationPrefix + 'latest_member')}
                <a href={app.route.user(user)} config={m.route}><strong> {username(user)}</strong></a>
              </li>
            </ul>
          </div>
        </div>
      </div>);
  }
}
