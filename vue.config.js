const path = require('path');

module.exports = {
  publicPath: '/',
  outputDir: 'burningSnow',
  // 暂时关闭lint
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/var.scss";`
      }
    }
  }
}
