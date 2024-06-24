/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier/skip-formatting'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, //单引号
        semi: false, //无分号
        printWidth: 120, //每行最大字符
        endOfLine: 'auto' //换行符号无限制
      }
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'] //组件多单词，忽略index
      }
    ],
    'vue/no-setup-props-destructure': ['off'], //关闭props解构的校验
    'no-undef': 'error' //添加未定义变量错误提示
  }
}
