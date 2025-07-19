// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended", // ✅ Add this line
  ],
  ignorePatterns: ["dist", "*.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: "18.2" },
    tailwindcss: {
      config: "./tailwind.config.js", // optional, if Tailwind config isn't in root
    },
  },
  plugins: ["tailwindcss"], // ✅ Add this line
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "warn",
    "no-console": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/export": "off",
  },
};
