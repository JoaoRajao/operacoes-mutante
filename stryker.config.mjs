/** @type {import('@stryker-mutator/api/core').StrykerOptions} */
export default {
  mutate: ['src/**/*.js'],
  testRunner: 'jest',
  jest: { enableFindRelatedTests: true },
  reporters: ['clear-text', 'html', 'json'],
  coverageAnalysis: 'perTest',
  concurrency: 4,
};
