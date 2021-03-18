import Component from 'flarum/common/Component';
import username from 'flarum/common/helpers/username';
import formatNumber from 'flarum/common/utils/formatNumber';
import Stream from 'flarum/common/utils/Stream';
import Link from 'flarum/common/components/Link';

const translationPrefix = 'fof-forum-statistics-widget.forum.navbar.';
const attributePrefix = 'fof-forum-statistics-widget.';

export default class ForumStatisticsWidget extends Component {
    view() {
        let discussionsCount = formatNumber(app.forum.attribute(attributePrefix + 'discussionsCount'));
        let postsCount = formatNumber(app.forum.attribute(attributePrefix + 'postsCount'));
        let usersCount = formatNumber(app.forum.attribute(attributePrefix + 'usersCount'));

        let user = {
            displayName: Stream(app.forum.attribute(attributePrefix + 'lastUser')),
            slug: Stream(app.forum.attribute(attributePrefix + 'lastUser')),
        };

        return (
            <div class="ForumStatistics containerNarrow">
                <div class="row">
                    <h2>
                        <i class="fas fa-chart-bar"></i> {app.translator.trans(translationPrefix + 'widget_title')}
                    </h2>
                    <div>
                        <ul id="ForumStatisticsList">
                            <li>
                                {app.translator.trans(translationPrefix + 'discussions_count', {
                                    discussionsCount,
                                })}
                            </li>
                            <li>
                                {app.translator.trans(translationPrefix + 'posts_count', {
                                    postsCount,
                                })}
                            </li>
                            <li>
                                {app.translator.trans(translationPrefix + 'users_count', {
                                    usersCount,
                                })}
                            </li>
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
