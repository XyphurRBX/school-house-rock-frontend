module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		parser: "@babel/eslint-parser",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"vue/multi-word-component-names": "off",
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				endOfLine: "auto",
			},
		],
		indent: ["error", "tab"],
	},
	overrides: [
		{
			files: [
				"**/__tests__/*.{j,t}s?(x)",
				"**/tests/unit/**/*.spec.{j,t}s?(x)",
			],
			env: {
				jest: true,
			},
		},
	],
};
