const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'project_1',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Features': './components/Reusable/Features', // Exposing Features from project-1
        },
        remotes: {
          project_2: 'project_2@http://localhost:3000/_next/static/chunks/remoteEntry.js', // Remoting project-2 entry point
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          'react-dom': { singleton: true, eager: true, requiredVersion: false },
        },
      })
    );

    return config;
  },
};
