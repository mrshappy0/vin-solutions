# :cowboy_hat_face: Vin Solutions Code Assessment [Solution](https://github.com/mrshappy0/vin-solutions/blob/master/index.js) :cowboy_hat_face:

_In the programming language of your choice, write a program that parses a sentence and replaces each
word with the following: first letter, number of distinct characters between first and last character, and
last letter.  For example, Smooth would become S3h.  Words are separated by spaces or non-alphabetic
characters and these separators should be maintained in their original form and location in the answer._


_A few of the things we will be looking at is accuracy, efficiency, solution completeness. Please include this
problem description in the comment at the top of your solution.  The problem is designed to take
approximately 1-2 hours and will be used as a conversation point in the verbal assessment part of the on-
site interview.  Please complete the coding assessment and have your solution uploaded as soon as
possible._

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./index.js) -->
<!-- The below code snippet is automatically added from ./index.js -->
```js
// Run sample tests with npm test -- "someTest" or just use npm run mocha

let stringManipulation = (string = "") => {
	// Skip regex loop if empty. Default is set to empty
	if (string === "") return "";

	// This regex pattern matches anything that is not a non-letter.
	//It then replaces it with the length of the match and continues searching through the string
	let regexPattern = /(\B[^!@#$%^&*()':;,./|\d\s]+\B)/g;
	return string.replace(regexPattern, (match, index) => match.length);
};

module.exports = {
	stringManipulation,
};
```
<!-- AUTO-GENERATED-CONTENT:END *-->