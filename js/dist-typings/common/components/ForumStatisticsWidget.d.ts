import type Mithril from 'mithril';
import ItemList from 'flarum/common/utils/ItemList';
import Widget, { WidgetAttrs } from 'flarum/extensions/fof-forum-widgets-core/common/components/Widget';
export default class ForumStatisticsWidget extends Widget<WidgetAttrs> {
    oninit(vnode: Mithril.Vnode): void;
    oncreate(vnode: Mithril.VnodeDOM): void;
    isClassicLook(): boolean;
    className(): string;
    icon(): string;
    title(): string;
    description(): string;
    content(): Mithril.Children;
    items(): ItemList<Mithril.Children>;
    load(): void;
}
