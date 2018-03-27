module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:flowtype/recommended'],
  plugins: ['import', 'jest', 'flowtype'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'no-unused-vars': [2, { ignoreRestSiblings: true }],
    'no-restricted-syntax': [2, 'WithStatement'],
    'no-prototype-builtins': 0,
    'no-case-declarations': 0,
    'no-confusing-arrow': 0,
    'global-require': 0,
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'consistent-return': 0,
    indent: [2, 2, { SwitchCase: 1, ObjectExpression: 'first' }],
    'max-len': 0,
    'new-cap': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'object-curly-spacing': 0,
    'spaced-comment': 0,
    'import/no-extraneous-dependencies': 0,
    'import/imports-first': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-dynamic-require': 0,
    'import/extensions': 0,
    'import/order': [
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
      2,
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always'
      }
    ],
    'react/no-array-index-key': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-space-before-closing': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/no-unescaped-entities': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-tag-spacing': 0,
    'react/require-extension': 0,
    'react/sort-comp': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-no-bind': 0,
    'react/forbid-prop-types': 0,
    'react/no-danger': 0,
    'react/prop-types': 0,
    'react/no-find-dom-node': 0,
    'react/require-default-props': 0,
    'react/no-typos': 1,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': [1, { allowTernary: true }],

    // jest
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,

    // flow
    'flowtype/sort-keys': 2,
    'flowtype/space-after-type-colon': [2, 'always', { allowLineBreak: true }]
  }
};
