module.exports = {
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'prettier --write--parser json',
  ],
  'package.json': ['prettier --write'],
  '*.md': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '*.vue': ['prettier --write', 'eslint --fix', 'stylelint --fix'],
  '*.{scss,less,styl,css}': ['prettier --write', 'stylelint --fix'],
}
