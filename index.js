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
