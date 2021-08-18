import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import username from 'flarum/common/helpers/username';
import formatNumber from 'flarum/common/utils/formatNumber';
import Link from 'flarum/common/components/Link';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import ItemList from 'flarum/common/utils/ItemList';

const translationPrefix = 'fof-forum-statistics-widget.forum.navbar.';
const attributePrefix = 'fof-forum-statistics-widget.';

export default class ForumStatisticsWidget extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        const lastUserId = app.forum.attribute(attributePrefix + 'lastUserId');

        if (lastUserId) {
            this.loading = true;

            app.store.find('users', lastUserId).then((user) => {
                this.user = user;
                this.loading = false;
                m.redraw();
            });
        }
    }

    view() {
        if (this.loading) {
            return <LoadingIndicator />;
        }

        const items = this.items().toArray();

        if (items.length === 0) return;

        return (
            <div class="ForumStatistics containerNarrow">
                <div class="row">
                    <h2>
                        <i class="fas fa-chart-bar"></i> {app.translator.trans(translationPrefix + 'widget_title')}
                    </h2>
                    <div>
                        <ul id="ForumStatisticsList">{items}</ul>
                    </div>
                </div>
            </div>
        );
    }

    items() {
        const items = new ItemList();

        let discussionsCount = app.forum.attribute(attributePrefix + 'discussionsCount');
        let postsCount = app.forum.attribute(attributePrefix + 'postsCount');
        let usersCount = app.forum.attribute(attributePrefix + 'usersCount');
        const lastUserId = app.forum.attribute(attributePrefix + 'lastUserId');

        if (discussionsCount) {
            items.add(
                'discussions_count',
                <li>
                    {app.translator.trans(translationPrefix + 'discussions_count', {
                        discussionsCount: formatNumber(discussionsCount),
                    })}
                </li>
            );
        }

        if (postsCount) {
            items.add(
                'posts_count',
                <li>
                    {app.translator.trans(translationPrefix + 'posts_count', {
                        postsCount: formatNumber(postsCount),
                    })}
                </li>
            );
        }

        if (usersCount) {
            items.add(
                'users_count',
                <li>
                    {app.translator.trans(translationPrefix + 'users_count', {
                        usersCount: formatNumber(usersCount),
                    })}
                </li>
            );
        }

        if (lastUserId) {
            items.add(
                'latest_member',
                <li>
                    {app.translator.trans(translationPrefix + 'latest_member')}{' '}
                    <Link href={app.route.user(this.user)}>
                        <strong>{username(this.user)}</strong>
                    </Link>
                </li>
            );
        }

        return items;
    }
}
