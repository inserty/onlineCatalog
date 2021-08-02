const { createProxyMiddleware } = require('http-proxy-middleware');


var proxyMiddleware = createProxyMiddleware({
    target: process.env.npm_package_proxy,
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api': '/'
    },
  })
 
module.exports = function(app){
  app.use(
    '/api/*',
    proxyMiddleware
  )
}