const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'project_1',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Features': './components/Reusable/Features.js', 
        },
        remotes: {
          project_2: 'project_2@http://localhost:3001/_next/static/chunks/remoteEntry.js', 
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          'react-dom': { singleton: true, eager: true, requiredVersion: false },
          tailwindcss: { singleton: true, eager: true, requiredVersion: false },
          'postcss-loader': { singleton: true, eager: true, requiredVersion: false },
        },
        
        
      })
    );

    return config;
  },
};
