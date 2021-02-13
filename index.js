// Run sample tests with npm test -- "someTest" or just use npm run mocha
// Run npm run docs to run markdown magic. This auto-generates a code snippet within the readme doc.

let stringManipulation = (string = "", check= "Vowels") => {
  // Seperate at non-letter char. i-flag for case-insensitive. Also keeps items matched by regex.
  // Filter removes empty (false-y) strings returned when seperating two non-letter characters.
  let strArr = string.split(/([^a-z])/i).filter((i) => i);

  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    let wordLength = word.length;

    // If word is too short, do nothing. e.g. 'it' => 'it' or "?" => "?"
    if (wordLength > 2) {
      let firstChar = word[0];
      let midChars = new Set(word.slice(1, wordLength - 1).toLowerCase()).size;
      let endChar = word[wordLength - 1];

      // Replace mid-section with number of unqiue characters.
      strArr[i] = firstChar + midChars + endChar;
    }
  }
  return strArr.join("");
};
console.log("--------------------------------------------------------------");
console.log("Some Test Logs:");
console.log("This is the waYyyy =>", stringManipulation("This is the waYyyy"));
console.log("Mississippi =>", stringManipulation("Mississippi"));
console.log(
  "Some Lorem Ipsum =>",
  stringManipulation(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  )
);
console.log("--------------------------------------------------------------");

module.exports = {
  stringManipulation,
};
