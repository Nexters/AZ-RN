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
            src: './src',
            '@utils': './src/utils',
            '@svg': './src/res/svg',
            '@hooks': './src/hooks',
            '@locales': './src/locales',
          },
        },
      ],
    ],
  };
};
