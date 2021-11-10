/*
 * @Description: 
 * @Date: 2021-02-19 18:57:07
 * @LastEditTime: 2021-11-10 17:33:09
 * @FilePath: /question-daily/api/proxy.js
 * @LastEditors: LiJiapeng
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  if (req.url.startsWith('/cy/api')) {
    target = 'https://biztest.chunyutianxia.com'
  }

  if (req.url.startsWith('/cy/devops')) {
    target = 'https://devops.chunyutianxia.com'
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/cy/': '/'
    }
  })(req, res)
}
