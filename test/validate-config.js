"use strict";

const t = require("tap");

module.exports = async () => {

	const stylelint = require("stylelint");

	t.test("Lint valid file", async t => {

		t.test("should return a report with zero linting errors", async t => {

			const result = await stylelint.lint({
				files: "test/fixture/valid.css",
				configOverrides: {"ignoreFiles": false},
			});
			
			t.equal(result.errored, false, "reports no errors");
			t.equal(result.results[0].deprecations.length, 0, "did not report any deprecations");
			t.equal(result.results[0].ignored, undefined, "did not ignore the file");

			t.done();

		});

		t.done();

	});

	t.test("Lint file with bad code style", async () => {

		t.test("should return a list of linting errors", async t => {

			const result = await stylelint.lint({
				files: "test/fixture/invalid.css",
				configOverrides: {"ignoreFiles": false},
			});
			
			t.equal(result.errored, true, "reports errors");
			t.ok(result.results[0].warnings.length > 0, "reports at least one warning");

			t.done();

		});

		t.done();

	});

};

module.exports();
