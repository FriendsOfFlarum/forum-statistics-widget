import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import username from 'flarum/common/helpers/username';
import formatNumber from 'flarum/common/utils/formatNumber';
import Link from 'flarum/common/components/Link';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

const translationPrefix = 'fof-forum-statistics-widget.forum.navbar.';
const attributePrefix = 'fof-forum-statistics-widget.';

export default class ForumStatisticsWidget extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        this.loading = true;
        const lastUserId = app.forum.attribute(attributePrefix + 'lastUserId');
        app.store.find('users', lastUserId).then((user) => {
            this.user = user;
            this.loading = false;
            m.redraw();
        });
    }

    view() {
        if (this.loading) {
            return <LoadingIndicator />;
        }

        let discussionsCount = formatNumber(app.forum.attribute(attributePrefix + 'discussionsCount'));
        let postsCount = formatNumber(app.forum.attribute(attributePrefix + 'postsCount'));
        let usersCount = formatNumber(app.forum.attribute(attributePrefix + 'usersCount'));

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
                                <Link href={app.route.user(this.user)}>
                                    <strong> {username(this.user)}</strong>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
