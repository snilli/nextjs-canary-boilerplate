const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  future: {
    webpack5: true,
  },
  webpack: function(config, options) {
    console.log(options.webpack.version) // 5.28.0
    config.experiments = {}
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
