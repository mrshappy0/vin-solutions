const assert = require("chai").assert;
const { stringManipulation } = require("../index");
const esprima = require("esprima");
const util = require("util");

let f = () => {
  let firstString =
    "Hello Vin$olutions!@$% Here is my tesssSt string. Fi1led with typos to ensure all goes well!";
  let secondString = "This! Is A Test!";
  let thirdString = "This is the waYyyy!";
  let mississippi = "Mississippi";
  let emptyString = "";
  let whiteSpace = "     ";
  console.log("Processing tests:");

  describe("***********Initial tests***********", () => {
    it(`1st test with string: ${firstString}`, () => {
      assert.strictEqual(
        stringManipulation(firstString),
        "H2o V1n$o6s!@$% H2e is my t3t s4g. Fi1l1d w2h t3s to e4e a1l g2s w2l!"
      );
    });
    it(`2nd Test with string ${secondString}`, () => {
      assert.strictEqual(stringManipulation(secondString), "T2s! Is A T2t!");
    });
    it(`3rd Test with string ${thirdString}`, () => {
      assert.strictEqual(stringManipulation(thirdString), "T2s is t1e w3y!");
    });
    it(`4th Test with string ${mississippi}`, () => {
      assert.strictEqual(stringManipulation(mississippi), "M3i");
    });
  });
  describe("***********Edge Cases***********", () => {
    it(`Empty String Test': ${emptyString}`, () => {
      assert.strictEqual(stringManipulation(emptyString), "");
    });
    it(`White Space': ${whiteSpace}`, () => {
      assert.strictEqual(stringManipulation(whiteSpace), "     ");
    });
  });
};

f();
let s = (f + "").slice(6);

let result = esprima.parseScript(s);
let map = result.body[0].body.map((item) => {
  if (item.type === "VariableDeclaration") {
    return item.declarations[0].id.name;
  }
});
console.log(map.slice(0, map.length - 3));
