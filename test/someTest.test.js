const assert = require("chai").assert;
const { stringManipulation } = require("../index");

let firstString = "Hello VinSolutions!@";
let secondString = "This! Is A Test!";
let emptyString = "";
console.log("Processing tests:", firstString, secondString);

describe("***********Initial tests***********", function () {
	it(`1st test with string: ${firstString}`, function () {
		assert.strictEqual(stringManipulation(firstString), "H3o V10s!@");
	});
	it(`2nd Test with string ${secondString}`, function () {
		assert.strictEqual(stringManipulation(secondString), "T2s! Is A T2t!");
	});
});
describe("***********Edge Cases***********", function () {
	it(`Empty String Test': ${emptyString}`, function () {
		assert.strictEqual(stringManipulation(emptyString), "");
	});
	// it(`2nd Test with string ${secondString}`, function () {
	// 	assert.strictEqual(stringManipulation(secondString), "T2s! Is A T2t!");
	// });
});
