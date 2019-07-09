const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}

module.exports = withCss(
  withPurgeCss({
    purgeCssEnabled: ({ dev, isServer }) => (!dev && !isServer) // Only enable PurgeCSS for client-side production builds
  })
)