module.exports = {
  // babel编译es6语法
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 按需引入之前安装这个插件：npm install babel-plugin-component -D
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },  
    ],
  ],
}
