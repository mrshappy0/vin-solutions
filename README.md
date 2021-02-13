# :cowboy_hat_face: Vin Solutions Code Assessment [Solution](https://github.com/mrshappy0/vin-solutions/blob/master/index.js) :cowboy_hat_face:

_In the programming language of your choice, write a program that parses a sentence and replaces each
word with the following: first letter, number of distinct characters between first and last character, and
last letter. For example, Smooth would become S3h. Words are separated by spaces or non-alphabetic
characters and these separators should be maintained in their original form and location in the answer._

_A few of the things we will be looking at is accuracy, efficiency, solution completeness. Please include this
problem description in the comment at the top of your solution. The problem is designed to take
approximately 1-2 hours and will be used as a conversation point in the verbal assessment part of the on-
site interview. Please complete the coding assessment and have your solution uploaded as soon as
possible._

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./index.js) -->
<!-- The below code snippet is automatically added from ./index.js -->
```js
// Run sample tests with npm test -- "someTest" or just use npm run mocha
// Run npm run docs to run markdown magic. This auto-generates a code snippet within the readme doc.

let stringManipulation = (string = "") => {
  // Seperate at non-letter char. i-flag for case-insensitive.
  // Filter removes empty (false-y) strings returned when seperating two non-letter characters.
  let strArr = string.split(/([^a-z])/i).filter((i) => i);

  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    let wordLength = word.length;

    // If word is too short, do nothing. e.g. 'it' => 'it' or "?" => "?"
    if (wordLength > 2) {
      let firstChar = word[0];
	  // new Set("someString").size 
      let midChars = new Set(word.slice(1, wordLength - 1)).size;
      let endChar = word[wordLength - 1];

	  // Replace mid-section with number of unqiue characters.
      strArr[i] = firstChar + midChars + endChar;
    }
  }
  return strArr.join("");
};

console.log("This is the waYyyy =>",stringManipulation("This is the waYyyy"));

module.exports = {
  stringManipulation,
};
```
<!-- AUTO-GENERATED-CONTENT:END *-->
