/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', //行末换行符: auto表示保持当前的换行符
        singleQuote: true, //是否使用单引号替代双引号: 使用
        bracketSpacing: true, //是否在对象字面量中括号之间使用空格: 使用
        trailingComma: 'none', //在多行逗号分隔的句法结构中尽可能打印尾部逗号: 从不
        vueIndentScriptAndStyle: true //是否在vue script和style标签中缩进: 使用
      }
    ]
  }
};
