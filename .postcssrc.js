module.exports = {
  plugins: {
    // 兼容浏览器，添加前缀，查看 https://caniuse.com/
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'last 10 versions',
      ],
      grid: true,
    },
    'postcss-pxtorem': {
      /**
       * rootValue(Number | Function):
       * 表示根元素字体大小或根据input参数返回根元素字体大小
       * rootValue({ file }) {return file.indexOf('vant') !== -1 ? 37.5 : 75}
       */
      rootValue: 192,
      // rootValue({ file }) {
      //   console.log(file, 10000000)
      //   return file.indexOf('element-plus') !== -1 ? 192 : 75
      // },
      /**
       * unitPrecision(数字):
       * 允许 REM 单位增长到的十进制数字，小数点后位数
       */
      unitPrecision: 4,
      /**
       * propList(数组)：
       * 可以从 px 更改为 rem 的属性
       * 1. 使用通配符 * 启用所有属性，如：['*']
       * 2. 属性单词的开头或结尾使用 *，如：['*position*']将匹配 background-position-y
       * 3. ! 用于不匹配属性，如：['*', '!border']，border 值不改动
       */
      propList: ['*', '!border'],
      /**
       * selectorBlackList(数组):
       * 保留使用 px 的选择器
       * 1. [] 中值为字符串，检查选择器中是否包含字符串，如：['body'] 将匹配 .body-class
       * 2. [] 中为正则表达式，检查选择器是否与 regexp 匹配，如：[/^body$/]将匹配body但不匹配.body
       */
      selectorBlackList: [],
      /**
       * mediaQuery(布尔值):
       * 是否允许在媒体查询中转换
       */
      mediaQuery: false,
      /**
       * minPixelValue(Number):
       * 设置允许替换的最小像素值
       */
      minPixelValue: 10,
      /**
       * replace(布尔值):
       * 替换包含 rems 的规则，而不是添加回退
       */
      replace: true,
      /**
       * exclude(字符串、正则表达式、函数):
       * 要忽略并保留为 px 的文件路径
       * 1. 如果 value 是字符串，它会检查文件路径是否包含字符串，'exclude' 将匹配 \project\postcss-pxtorem\exclude\path
       * 2. 如果 value 是 regexp，它会检查文件路径是否与 regexp 匹配，/exclude/i 将匹配 \project\postcss-pxtorem\exclude\path
       * 3. 如果 value 是 function，可以使用 exclude 函数返回 true 并且文件将被忽略，function (file) { return file.indexOf('exclude') !== -1; }
       */
      // exclude:
    },
  },
}
