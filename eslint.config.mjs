import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';
// source: https://eslint.org/blog/2024/05/eslint-compatibility-utilities/#fixing-an-imported-configuration
import {fixupConfigRules} from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const patchedConfig = fixupConfigRules([
  ...compat.extends('next/core-web-vitals', 'plugin:storybook/recommended'),
]);

const config = [...patchedConfig, {ignores: ['.next/*']}];

export default config;
