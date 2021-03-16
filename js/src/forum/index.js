import { extend } from 'flarum/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import ForumStatisticsWidget from './components/ForumStatisticsWidget';

app.initializers.add('fof/forum-statistics-widget', () => {
    extend(IndexPage.prototype, 'sidebarItems', function (items) {
        items.add('forumStatisticsWidget', ForumStatisticsWidget.component(), app.forum.attribute('fof-forum-statistics-widget.widget_order'));
    });
});
