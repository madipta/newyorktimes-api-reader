const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/api',
    '<rootDir>/libs/data-curl',
    '<rootDir>/libs/dtos',
    '<rootDir>/libs/rm',
    '<rootDir>/libs/redis-cache',
  ],
};
