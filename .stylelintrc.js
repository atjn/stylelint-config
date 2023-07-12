"use strict";

/**
 * @file
 * This is the main configuration file that defines all the rules stylelint will use to validate css.
 */

const os = require("os");

module.exports = {

	"extends": [
		"stylelint-config-recommended",
	],

	"plugins": [
		"stylelint-stylistic",
	],


	// Rules are ordered according to their documentation:
	// - https://stylelint.io/user-guide/rules/list
	// - https://github.com/elirasza/stylelint-stylistic#2-rules

	"rules": {

		// Possible errors

		
		// Limit language features

		"color-function-notation":								"modern",

		"value-no-vendor-prefix":								 true,

		"selector-no-vendor-prefix":							 true,
		"selector-pseudo-element-colon-notation":				"double",

		"media-feature-name-no-vendor-prefix":				 	 true,

		"at-rule-no-vendor-prefix":							 	 true,

		"no-unknown-animations":							 	 true,


		// Stylistic issues

		"font-family-name-quotes":								"always-unless-keyword",

		"function-name-case":									"lower",
		"function-url-quotes":									"always",

		"value-keyword-case":									"lower",

		"selector-attribute-quotes":							"always",
		"selector-type-case":									"lower",

		"comment-whitespace-inside":							"always",

		// Stylistic issues, but for some reason not cool enough to be part of standard stylelint:
		// https://github.com/stylelint/stylelint/issues/6657#issuecomment-1433064480

		"stylistic/color-hex-case":								"upper",

		"stylistic/function-comma-newline-after":				"always-multi-line",		
		"stylistic/function-comma-newline-before":				"never-multi-line",
		"stylistic/function-comma-space-after":					"always",
		"stylistic/function-comma-space-before":				"never",
		"stylistic/function-max-empty-lines":				 	 0,
		"stylistic/function-parentheses-newline-inside":		"always-multi-line",
		"stylistic/function-whitespace-after":					"always",

		"stylistic/string-quotes":								"double",

		"stylistic/unit-case":									"lower",

		"stylistic/value-list-comma-newline-after":				"always-multi-line",		
		"stylistic/value-list-comma-newline-before":			"never-multi-line",
		"stylistic/value-list-comma-space-after":				"always",
		"stylistic/value-list-comma-space-before":				"never",
		"stylistic/value-list-max-empty-lines":					 0,

		"stylistic/property-case":								"lower",

		"stylistic/declaration-bang-space-after":				"never",
		"stylistic/declaration-bang-space-before":				"always",
		"stylistic/declaration-colon-newline-after":			"always-multi-line",
		"stylistic/declaration-colon-space-after":				"always-single-line",
		"stylistic/declaration-colon-space-before":				"never",
		"stylistic/declaration-block-semicolon-newline-before":	"never-multi-line",
		"stylistic/declaration-block-semicolon-space-after":	"always-single-line",
		"stylistic/declaration-block-semicolon-space-before":	"never",
		"stylistic/declaration-block-trailing-semicolon":		"always",

		"stylistic/block-closing-brace-newline-after":			"always",
		"stylistic/block-closing-brace-newline-before":			"always-multi-line",
		"stylistic/block-opening-brace-newline-after":			"always-multi-line",
		"stylistic/block-opening-brace-space-before":			"always",
		
		"stylistic/selector-attribute-operator-space-after":	"never",
		"stylistic/selector-attribute-operator-space-before":	"never",
		"stylistic/selector-combinator-space-after":			"always",
		"stylistic/selector-combinator-space-before":			"always",
		"stylistic/selector-descendant-combinator-no-non-space": true,
		"stylistic/selector-pseudo-class-case":					"lower",
		"stylistic/selector-pseudo-element-case":				"lower",

		"stylistic/selector-list-comma-newline-after":			"always-multi-line",
		"stylistic/selector-list-comma-newline-before":			"never-multi-line",
		"stylistic/selector-list-comma-space-after":			"always-single-line",
		"stylistic/selector-list-comma-space-before":			"never",

		"stylistic/media-feature-colon-space-after":			"always",
		"stylistic/media-feature-colon-space-before":			"never",
		"stylistic/media-feature-name-case":					"lower",
		"stylistic/media-feature-range-operator-space-after":	"always",
		"stylistic/media-feature-range-operator-space-before":	"always",

		"stylistic/media-query-list-comma-newline-after":		"always-multi-line",
		"stylistic/media-query-list-comma-newline-before":		"never-multi-line",
		"stylistic/media-query-list-comma-space-after":			"always-single-line",
		"stylistic/media-query-list-comma-space-before":		"never",

		"stylistic/at-rule-name-case":							"lower",
		"stylistic/at-rule-name-newline-after":					"always-multi-line",
		"stylistic/at-rule-name-space-after":					"always-single-line",
		"stylistic/at-rule-semicolon-newline-after":			"always",
		"stylistic/at-rule-semicolon-space-before":				"never",

		"stylistic/indentation":								"tab",

		//														If the operating system does not use Unix EOLs, Git should auto-convert between EOL types when pushing/pulling code.
		//														If Git is incorrectly configured, the wrong EOLs can end up in the codebase, but will be detected next time linting is run on an OS with Unix EOLs.
		//														This is mainly a problem on Windows and it's a mess.
		"stylistic/linebreaks":									os.EOL === "\n" ? "unix" : undefined,

		"stylistic/max-empty-lines":							 4,
		"stylistic/no-missing-end-of-source-newline":			 true,
		"stylistic/unicode-bom":								"never",

	},

};
