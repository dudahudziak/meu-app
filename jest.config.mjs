import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

export default createJestConfig({
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
  testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.tsx'],  collectCoverageFrom: [
    'app/page.tsx',
    'components/**/*.tsx',
    'hooks/**/*.ts',
    'lib/**/*.ts',
  ],
});
