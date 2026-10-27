// @ts-check

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tseslint from 'typescript-eslint';

export default defineConfig({
    files: ['**/*.{jsx,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    plugins: {
        react: reactPlugin,
        "react-hooks": reactHooksPlugin
    },
    rules: {
        'react/react-in-jsx-scope': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
});