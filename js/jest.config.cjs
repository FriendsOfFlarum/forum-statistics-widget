const base = require('@flarum/jest-config')();

/**
 * `@flarum/jest-config` maps `flarum/*` to core's source, but not `ext:` imports,
 * which webpack turns into lookups in the export registry of another extension's
 * bundle. That bundle is not available under Jest, so forum-widgets-core is
 * replaced by the small stand-ins in `tests/stubs`.
 */
module.exports = {
  ...base,
  moduleNameMapper: {
    ...base.moduleNameMapper,
    '^ext:fof/forum-widgets-core/(.*)$': '<rootDir>/tests/stubs/forum-widgets-core/$1',
  },
};
