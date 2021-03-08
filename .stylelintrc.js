"use strict";

module.exports = {

	"extends": "stylelint-config-recommended",

	"ignoreFiles": [
		"test/fixture/**",
	],


	//Rules are ordered according to their documentation: https://stylelint.io/user-guide/rules/list

	"rules": {

		//Possible errors

		
		//Limit language features

		"color-function-notation":						"modern",

		"value-no-vendor-prefix":						 true,

		"selector-no-vendor-prefix":					 true,
		"selector-pseudo-element-colon-notation":		"double",

		"media-feature-name-no-vendor-prefix":			 true,

		"at-rule-no-vendor-prefix":						 true,

		"no-unknown-animations":						 true,


		//Stylistic issues

		"color-hex-case":								"upper",

		"font-family-name-quotes":						"always-unless-keyword",

		"function-comma-newline-after":					"always-multi-line",		
		"function-comma-newline-before":				"never-multi-line",
		"function-comma-space-after":					"always",
		"function-comma-space-before":					"never",
		"function-max-empty-lines":						 0,
		"function-name-case":							"lower",
		"function-parentheses-newline-inside":			"always-multi-line",
		"function-url-quotes":							"always",
		"function-whitespace-after":					"always",

		"string-quotes":								"double",

		"unit-case":									"lower",

		"value-keyword-case":							"lower",

		"value-list-comma-newline-after":				"always-multi-line",		
		"value-list-comma-newline-before":				"never-multi-line",
		"value-list-comma-space-after":					"always",
		"value-list-comma-space-before":				"never",
		"value-list-max-empty-lines":					 0,

		"property-case":								"lower",

		"declaration-bang-space-after":					"never",
		"declaration-bang-space-before":				"always",
		"declaration-colon-newline-after":				"always-multi-line",
		"declaration-colon-space-after":				"always-single-line",
		"declaration-colon-space-before":				"never",
		"declaration-block-semicolon-newline-before":	"never-multi-line",
		"declaration-block-semicolon-space-after":		"always-single-line",
		"declaration-block-semicolon-space-before":		"never",
		"declaration-block-trailing-semicolon":			"always",

		"block-closing-brace-newline-after":			"always",
		"block-closing-brace-newline-before":			"always-multi-line",
		"block-opening-brace-newline-after":			"always-multi-line",
		"block-opening-brace-space-before":				"always",
		
		"selector-attribute-operator-space-after":		"never",
		"selector-attribute-operator-space-before":		"never",
		"selector-attribute-quotes":					"always",
		"selector-combinator-space-after":				"always",
		"selector-combinator-space-before":				"always",
		"selector-descendant-combinator-no-non-space":	 true,
		"selector-pseudo-class-case":					"lower",
		"selector-pseudo-element-case":					"lower",
		"selector-type-case":							"lower",

		"selector-list-comma-newline-after":			"always-multi-line",
		"selector-list-comma-newline-before":			"never-multi-line",
		"selector-list-comma-space-after":				"always-single-line",
		"selector-list-comma-space-before":				"never",

		"media-feature-colon-space-after":				"always",
		"media-feature-colon-space-before":				"never",
		"media-feature-name-case":						"lower",
		"media-feature-range-operator-space-after":		"always",
		"media-feature-range-operator-space-before":	"always",

		"media-query-list-comma-newline-after":			"always-multi-line",
		"media-query-list-comma-newline-before":		"never-multi-line",
		"media-query-list-comma-space-after":			"always-single-line",
		"media-query-list-comma-space-before":			"never",

		"at-rule-name-case":							"lower",
		"at-rule-name-newline-after":					"always-multi-line",
		"at-rule-name-space-after":						"always-single-line",
		"at-rule-semicolon-newline-after":				"always",
		"at-rule-semicolon-space-before":				"never",

		"comment-whitespace-inside":					"always",

		"indentation":									"tab",
		"linebreaks":									"unix",
		"max-empty-lines":								 4,
		"no-missing-end-of-source-newline":				 true,
		"unicode-bom":									"never",

	},

};
