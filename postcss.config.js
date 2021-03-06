module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport" : {
      viewportWidth: 375,//视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 667,//视窗的高度，对应设计稿的高度
      unitPrecision: 5,//指定‘px’转化为视窗单位值的小数位数
      viewportUnit: 'vw',//指定需要转化的视窗单位，建议用vw
      selectorBlackList: ['tab-bar','ignore','tab-bar-item'],//指定不需要转化的类
      minPixelValue: 1,//小于或等于1px不转化为视窗单位
      mediaQuery: false,//允许在媒体查询中转化为px
      exclude: [/TabBar/],
    }
  }
}
