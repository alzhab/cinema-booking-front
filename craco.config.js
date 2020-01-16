const path = require('path');

module.exports = {
  webpack: {
    alias: {
      'UI': path.resolve(__dirname, 'src/UI'),
      'HOC': path.resolve(__dirname, 'src/HOC'),
      'layouts': path.resolve(__dirname, 'src/layouts'),
      'images': path.resolve(__dirname, 'src/assets/images/'),
      'instances': path.resolve(__dirname, 'src/instances'),
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1'
      }
    }
  }
};