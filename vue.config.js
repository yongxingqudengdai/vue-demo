const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 关闭eslint
  lintOnSave: false,
  transpileDependencies: true,
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',

        // pathRewrite: { '^/api': '' },
      }
    } 
  }
})
