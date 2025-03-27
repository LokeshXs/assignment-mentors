import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "no-script-url":"off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment":"off",
      "react-hooks/exhaustive-deps":"off",
      "@next/next/no-img-element":"off",
      "import/no-anonymous-default-export":"off",
      "@typescript-eslint/no-explicit-any":"off"


    },
  }),
];

export default eslintConfig;
