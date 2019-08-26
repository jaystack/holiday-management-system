module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'arrow-parens': [2, "as-needed"],
    'consistent-return': 0,
    'max-len': [2, { "code": 175 }],
    'no-console': [1],
    'react/no-array-index-key': 0,
    'react/prop-types': [2, { ignore: ['classes', 'children'] }],
    'react/jsx-max-props-per-line': [2, { "maximum": 2 }],
    'comma-dangle': [2, 'only-multiline'],
  },
};
