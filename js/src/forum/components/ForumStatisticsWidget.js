import Component from 'flarum/Component';
import username from 'flarum/helpers/username';
import formatNumber from 'flarum/utils/formatNumber';
import Stream from 'flarum/utils/Stream';
import Link from 'flarum/components/Link';

const translationPrefix = 'fof-forum-statistics-widget.forum.navbar.';

export default class ForumStatisticsWidget extends Component {
    view() {
        let discussionsCount = formatNumber(app.forum.attribute('discussionsCount'));
        let postsCount = formatNumber(app.forum.attribute('postsCount'));
        let usersCount = formatNumber(app.forum.attribute('usersCount'));

        let user = {
            displayName: Stream(app.forum.attribute('lastUser')),
            slug: Stream(app.forum.attribute('lastUser')),
        };

        return (
            <div class="ForumStatistics containerNarrow">
                <div class="row">
                    <h2>
                        <i class="fas fa-chart-bar"></i> {app.translator.trans(translationPrefix + 'widget_title')}
                    </h2>
                    <div>
                        <ul id="ForumStatisticsList">
                            <li>{app.translator.trans(translationPrefix + 'discussions_count', { discussionsCount })}</li>
                            <li>{app.translator.trans(translationPrefix + 'posts_count', { postsCount })}</li>
                            <li>{app.translator.trans(translationPrefix + 'users_count', { usersCount })}</li>
                            <li>
                                {app.translator.trans(translationPrefix + 'latest_member')}
                                <Link href={app.route.user(user)}>
                                    <strong> {username(user)}</strong>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
