module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@root': './src',
          '@screens': './src/screens',
          '@components': './src/components',
        },
      },
    ],
  ],
}
