module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    '@react-native',
    'plugin:react/recommended'
    // 'plugin:@typescript-eslint/recommended',
    // 'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: [
    // 'react',
    // '@typescript-eslint',
    // 'prettier',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    // ESLint/Prettier
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],

    // 'prettier/prettier': 'error',

    // TypeScript
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    // React
    'react/react-in-jsx-scope': 'off', // Not necessary in React 18+
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',

    // Import helpers
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@shared/',
          ['/^@components/', '/^@context/', '/^@types/'],
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true, groupBySpecifier: true }
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
