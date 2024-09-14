import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
        'import': importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'], // Встроенные модули и внешние пакеты
                    ['internal'], // Внутренние модули проекта
                    ['parent', 'sibling', 'index'], // Родительские, соседние и index файлы
                    'type', // Типы TypeScript
                ],
                pathGroups: [
                    {
                        pattern: '@/**', // Настройка для импортов через алиасы
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'always', // Разделяет группы пустыми строками
                alphabetize: {
                    order: 'asc', // Сортировка импортов в алфавитном порядке
                    caseInsensitive: true,
                },
            },
        ],
    },
  },
)
