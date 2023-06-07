const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dcbu6vxdi/image/upload/f_auto,q_auto/v1/portfolio/**',
      },
    ],
  },
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
