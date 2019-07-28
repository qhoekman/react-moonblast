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
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: false }]]
        }
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx', '.jsx');

  return config;
};
