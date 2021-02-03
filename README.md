### [Vin Solutions Code Assessment](https://www.codewars.com/kata/5245a9138ca049e9a10007b8) | [Solution](https://github.com/mrshappy0/vin-solutions/blob/master/index.js)


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