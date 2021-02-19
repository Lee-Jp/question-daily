/*
 * @Description: 
 * @Date: 2021-02-19 18:57:07
 * @LastEditTime: 2021-02-19 19:20:47
 * @FilePath: /question-daily/api/proxy.js
 * @LastEditors: LiJiapeng
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  if (req.url.startsWith('/api')) {
    target = 'https://biztest.chunyutianxia.com'
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/api/': '/'
    }
  })(req, res)
}
