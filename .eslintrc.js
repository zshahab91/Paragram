// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  plugins: ['prettier', 'react-hooks'],
  extends: [
    '@rushstack/eslint-config',
    '@rushstack/eslint-config/react',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  settings: {
    react: { version: '16.13.1' },
  },
  rules: {
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/typedef': 'off',
    '@rushstack/no-null': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-no-bind': 'off',
    '@typescript-eslint/naming-convention': 'error',
    '@typescript-eslint/no-floating-promises': ['off', { ignoreVoid: true, ignoreIIFE: false }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
    'no-unused-expressions': 'off',
    'no-nested-ternary': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/prefer-stateless-function': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-default': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-access-state-in-setstate': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }],
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn'],
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__typename'],
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        VariableDeclarator: {
          array: false,
          object: true,
        },
        // eslint-disable-next-line @typescript-eslint/naming-convention
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', 'tsx', 'ts'] }],
  },
};
