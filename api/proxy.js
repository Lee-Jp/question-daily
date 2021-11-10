/*
 * @Description: 
 * @Date: 2021-02-19 18:57:07
 * @LastEditTime: 2021-11-10 17:28:44
 * @FilePath: /question-daily/api/proxy.js
 * @LastEditors: LiJiapeng
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  // 这里使用 backend 主要用于区分 vercel serverless 的 api 路径
  if (req.url.startsWith('/api')) {
    target = 'https://biztest.chunyutianxia.com/'
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  })(req, res)
}
