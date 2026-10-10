import type Mithril from 'mithril';
import Component, { type ComponentAttrs } from 'flarum/common/Component';

export interface WidgetAttrs extends ComponentAttrs {
  state: any;
}

/**
 * Stand-in for `ext:fof/forum-widgets-core/common/components/Widget`: the same
 * overridable surface, rendering only the widget's own content, so a test sees
 * what the extension contributes without the widgets-core chrome around it.
 */
export default class Widget<T extends WidgetAttrs = WidgetAttrs> extends Component<T> {
  view(): Mithril.Children {
    return <div className={this.className()}>{this.content()}</div>;
  }

  className(): string {
    return '';
  }

  title(): Mithril.Children {
    return '';
  }

  description(): Mithril.Children {
    return '';
  }

  icon(): string {
    return '';
  }

  content(): Mithril.Children {
    return null;
  }
}
