module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '~': './src',
            '@utils': './src/utils',
            '@svg': './src/images/svg',
            '@png': './src/images/png',
            '@hooks': './src/hooks',
            '@styles': './src/styles',
            '@constants': './src/constants',
            '@locales': './src/locales',
          },
        },
      ],
    ],
  };
};
