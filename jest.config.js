module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  modulePathIgnorePatterns: ['cases'],
  modulePaths: ['../diabeticu'],
};
