const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  javascript: {
    overrides: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
})
