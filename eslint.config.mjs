export default [
    {
      ignores: ['node_modules/**'],
    },
    {
      files: ['**/*.js'],
      rules: {
        indent: ['error', 2],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-trailing-spaces': ['error'],
        'eol-last': ['error', 'always'],
      },
    },
  ];
  