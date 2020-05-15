module.exports = {
  setupFiles: ['<rootDir>/components/jest.setup.js'],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(svg)$': '<rootDir>/__mocks__/svg.js'
  },
  "transform": {
    "^.+\\.js$": "babel-jest",
  },
  testEnvironment: 'node',
};
