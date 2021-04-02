module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
        'react-native/react-native': true,
    },
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'react-native'],
    rules: {
        'prettier/prettier': 0,
        indent: ['error', 4],
        'no-unused-vars': process.env.NODE_ENV === 'production' ? ['error'] : ['off'],
        'no-debugger': process.env.NODE_ENV === 'production' ? ['error'] : ['off'],
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'object-curly-spacing': ['error', 'never'],
        /* React Rules */
        'react/display-name': ['off'],
        'react/prop-types': ['off'],
        /* React Native Rules */
        'react-native/split-platform-components': 2,
        'react-native/no-single-element-style-arrays': 2,
        // "react-native/no-inline-styles": 2,
        // "react-native/no-unused-styles": 2,
        // "react-native/no-color-literals": 2,
        // "react-native/no-raw-text": 2,
    },
};
