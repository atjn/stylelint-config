"use strict";

/**
 * @file
 * This runs a few basic tests to make sure the configuration file is valid and produces correct results.
 */

const tap = require("tap");

module.exports = async () => {

	const stylelint = require("stylelint");

	tap.test("Lint valid file", async () => {

		tap.test("should return a report with zero linting errors", async () => {

			const result = await stylelint.lint({files: "test/fixture/valid.css"});
			
			tap.equal(result.errored, false, "reports no errors");
			tap.equal(result.results[0].deprecations.length, 0, "did not report any deprecations");
			tap.equal(result.results[0].ignored, undefined, "did not ignore the file");

			tap.end();

		});

		tap.end();

	});

	tap.test("Lint file with bad code style", async () => {

		tap.test("should return a list of linting errors", async () => {

			const result = await stylelint.lint({files: "test/fixture/invalid.css"});
			
			tap.equal(result.errored, true, "reports errors");
			tap.ok(result.results[0].warnings.length > 0, "reports at least one warning");

			tap.end();

		});

		tap.end();

	});

};

module.exports();
