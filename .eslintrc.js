module.exports = {
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    env: {
        es6: true,
        browser: true,
    },
    plugins: ['svelte3', 'html'],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
    rules: {
        'comma-dangle': ['warn', 'always-multiline'],
    },
    settings: {
        'svelte3/ignore-styles': attributes =>
            attributes.lang && attributes.lang.includes('scss'),
    },
    // extends: ['plugin:prettier/recommended'],
}
