const webpackConfig = {} // 原来的 webpack.base.js 配置
const vuxLoader = require('vux-loader')
module.exports = vuxLoader.merge(webpackConfig, {
  options: {},
  plugins: [{
    name: 'vux-ui'
  }]
})
module.exports = {
  devServer: {
    // 自动打开浏览器
    open: true,
    port: 8888
  }
}
