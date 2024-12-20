const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'project_2',
        filename: 'static/chunks/remoteEntry.js', 
        exposes: {
          './HomePage': './src/components/HomePage', 
        },
        remotes: {
          project_1: 'project_1@http://localhost:3000/_next/static/chunks/remoteEntry.js', // Remote project-1 from project-2
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
