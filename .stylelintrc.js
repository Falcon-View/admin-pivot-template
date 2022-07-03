module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/vue',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-rational-order',
  ],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  ignoreFiles: [
    'src/styles/normalize/index.css',
    'src/styles/custom/index.scss',
  ],
  rules: {
    /**
     * 自修
     */
    indentation: 2,
    'declaration-block-no-duplicate-properties': true,
    'selector-class-pattern': null,
    'color-no-invalid-hex': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-function-notation': 'legacy',
    // 'function-parentheses-newline-inside': 'always',
    // 'function-comma-newline-after': 'never-multi-line',
    // 'function-comma-newline-before': 'never-multi-line',
    // 'function-comma-space-after': 'always',
    // 'function-comma-space-before': 'never',
    // 'declaration-block-trailing-semicolon': 'never',
    /**
     * 网上
     */
    'unit-no-unknown': [true, { ignoreUnits: ['/rpx/', '/upx/'] }],
    'no-descending-specificity': null,
    'function-url-quotes': 'always',
    'string-quotes': 'double',
    'unit-case': null,
    'rule-empty-line-before': 'never',
    'font-family-no-missing-generic-family-keyword': null,
    'block-opening-brace-space-before': 'always',
    'property-no-unknown': null,
    'no-empty-source': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    // 属性顺序
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
      },
    ],
  },
}
