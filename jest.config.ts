export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg',
    '^@/(.*)$': '/src/$1',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Coverage settings
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',

    // Exclude files
    '!src/main.tsx',
    '!src/**/*.{d,types}.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
