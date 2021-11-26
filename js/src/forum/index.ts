import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import ForumStatisticsWidget from './components/ForumStatisticsWidget';
import ItemList from 'flarum/common/utils/ItemList';

app.initializers.add('fof/forum-statistics-widget', () => {
  extend(IndexPage.prototype, 'sidebarItems', function (items: ItemList) {
    items.add('forumStatisticsWidget', ForumStatisticsWidget.component(), app.forum.attribute('fof-forum-statistics-widget.widget_order'));
  });
});
