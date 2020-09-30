module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'module-resolver',
      {
        alias: {
          '@root': './src',
          screens: './src/Screens',
          components: './src/Components',
        },
      },
    ],
  ],
};
