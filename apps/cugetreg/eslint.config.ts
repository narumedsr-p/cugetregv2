import { defineConfig } from 'eslint/config';

import baseSvelte from '@cugetreg/configs/linter/svelte';

export default defineConfig(...baseSvelte, {
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['eslint.config.ts', 'vitest.shims.d.ts'],
      },
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
