module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxRuntime: 'automatic' }]
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@components': './src/components',
            '@features': './src/features',
            '@database': './src/database',
          },
        },
      ],
      'react-native-reanimated/plugin', // <--- MUST BE LAST
    ],
  };
};