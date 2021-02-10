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

console.log(stringManipulation("This is the waYyyy"));

module.exports = {
  stringManipulation,
};
