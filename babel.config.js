module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./js'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.jsx',
        ],
        alias: {
          '@diabeticu': './js',
        },
      },
    ],
  ],
};
