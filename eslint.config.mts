import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser }, 
  rules: {
      // desliga a regra que reclama de construtor vazio
      "no-useless-constructor": "off"
    },},
  tseslint.configs.recommended,
]);
