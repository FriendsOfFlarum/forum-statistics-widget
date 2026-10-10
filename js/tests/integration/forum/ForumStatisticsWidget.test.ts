import { jest } from '@jest/globals';
import bootstrapForum from '@flarum/jest-config/src/bootstrap/forum';
import flatten from 'flat';
import jsYaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import mq from 'mithril-query';
import app from 'flarum/forum/app';
import ForumStatisticsWidget from '../../../src/common/components/ForumStatisticsWidget';

beforeAll(() => bootstrapForum());

describe('ForumStatisticsWidget', () => {
  beforeAll(() => {
    app.boot();

    const locale = jsYaml.load(fs.readFileSync(path.resolve(process.cwd(), '../resources/locale/en.yml'), 'utf8')) as object;
    app.translator.addTranslations(flatten(locale));
  });

  afterEach(() => jest.restoreAllMocks());

  /** Lets the rejected request and the handlers chained on it settle. */
  const settle = () => new Promise((resolve) => setTimeout(resolve, 0));

  describe('when the latest member cannot be fetched', () => {
    beforeEach(() => {
      app.forum.pushData({
        attributes: {
          'fof-forum-statistics-widget.discussionsCount': 12,
          'fof-forum-statistics-widget.postsCount': 345,
          'fof-forum-statistics-widget.usersCount': 6,
          'fof-forum-statistics-widget.lastUserId': 99,
        },
      } as any);

      jest.spyOn(app, 'request').mockRejectedValue(new Error('Network error'));
    });

    it('stops loading and shows the statistics it already has', async () => {
      const widget = mq(ForumStatisticsWidget as any, { state: {} });

      await settle();
      widget.redraw();

      expect(widget.find('.LoadingIndicator')).toHaveLength(0);
      expect(widget.rootEl.textContent).toBe('Discussions: 12Posts: 345Members: 6');
    });
  });
});
