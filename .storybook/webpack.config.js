const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]]
        }
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  // Setting aliases
  const __srcdir = '../src/';
  config.resolve.alias['@base'] = path.join(__dirname, __srcdir, 'base');
  config.resolve.alias['@layout'] = path.join(__dirname, __srcdir, 'layout');
  config.resolve.alias['@feedback'] = path.join(__dirname, __srcdir, 'feedback');
  config.resolve.alias['@navigation'] = path.join(__dirname, __srcdir, 'navigation');
  config.resolve.alias['@data-renderers'] = path.join(__dirname, __srcdir, 'data-renderers');
  config.resolve.alias['@data-controls'] = path.join(__dirname, __srcdir, 'data-controls');
  config.resolve.alias['@style'] = path.join(__dirname, __srcdir, 'style');
  return config;
};
