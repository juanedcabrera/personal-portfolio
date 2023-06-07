const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    // Add a rule to handle .node files
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });

    // Add a rule to handle .md files with markdown-loader and html-loader
    config.module.rules.push({
      test: /\.md$/,
      use: [
        'html-loader',
        {
          loader: 'markdown-loader',
          options: {},
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
