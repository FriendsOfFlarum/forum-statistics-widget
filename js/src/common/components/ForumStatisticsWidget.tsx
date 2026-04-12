import app from 'flarum/common/app';
import type Mithril from 'mithril';
import username from 'flarum/common/helpers/username';
import formatNumber from 'flarum/common/utils/formatNumber';
import Link from 'flarum/common/components/Link';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import ItemList from 'flarum/common/utils/ItemList';
import Widget, { WidgetAttrs } from 'flarum/extensions/fof-forum-widgets-core/common/components/Widget';
import extractText from 'flarum/common/utils/extractText';
import type User from 'flarum/common/models/User';

const translationPrefix = 'fof-forum-statistics-widget.forum.navbar.';
const attributePrefix = 'fof-forum-statistics-widget.';

export default class ForumStatisticsWidget extends Widget<WidgetAttrs> {
  oninit(vnode: Mithril.Vnode): void {
    super.oninit(vnode);

    this.attrs.state.user ??= null;
    this.attrs.state.isLoading ??= false;
    this.attrs.state.hasLoaded ??= false;
  }

  oncreate(vnode: Mithril.VnodeDOM): void {
    super.oncreate(vnode);

    if (!this.attrs.state.hasLoaded) {
      this.load();
    }
  }

  className(): string {
    return 'FoF-ForumStatisticsWidget';
  }

  icon(): string {
    return 'fas fa-chart-bar';
  }

  title(): string {
    return extractText(app.translator.trans(translationPrefix + 'widget_title'));
  }

  description(): string {
    return '';
  }

  content(): Mithril.Children {
    if (this.attrs.state.isLoading) {
      return <LoadingIndicator />;
    }

    const items = this.items().toArray();

    if (items.length === 0) return null;

    return <ul className="ForumStatisticsList">{items}</ul>;
  }

  items(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();

    const discussionsCount = app.forum.attribute<number>(attributePrefix + 'discussionsCount');
    const postsCount = app.forum.attribute<number>(attributePrefix + 'postsCount');
    const usersCount = app.forum.attribute<number>(attributePrefix + 'usersCount');
    const lastUserId = app.forum.attribute<string>(attributePrefix + 'lastUserId');

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

    const user = this.attrs.state.user as User | null;

    if (lastUserId && user) {
      items.add(
        'latest_member',
        <li>
          {app.translator.trans(translationPrefix + 'latest_member')}{' '}
          <Link href={app.route.user(user)}>
            <strong>{username(user)}</strong>
          </Link>
        </li>
      );
    }

    return items;
  }

  load(): void {
    const lastUserId = app.forum.attribute<string>(attributePrefix + 'lastUserId');

    if (!lastUserId) {
      this.attrs.state.hasLoaded = true;
      return;
    }

    this.attrs.state.isLoading = true;

    app.store.find<User>('users', lastUserId).then((user) => {
      this.attrs.state.user = user;
      this.attrs.state.isLoading = false;
      this.attrs.state.hasLoaded = true;
      m.redraw();
    });
  }
}
