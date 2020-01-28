// module.exports = {
//   stories: ['../stories/**/*.stories.js'],
//   addons: ['@storybook/addon-actions', '@storybook/addon-links'],
// };


module.exports = {
stories: ['../stories/**/*.stories.js'],
addons: ['@storybook/addon-actions', '@storybook/addon-links'],
webpackFinal: async config => {
  config.module.rules.push({
    test: /\.(ts|js)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.js');
  return config;
},
};
