// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("convertsCodedMessage", () => {
  const secretCodeWord1 = "Lackadaisical";
  // Expected output: "L4ck4d41s1c4l"
  const secretCodeWord2 = "Gobbledygook";
  // Expected output: "G0bbl3dyg00k"
  const secretCodeWord3 = "Eccentric";
  // Expected output: "3cc3ntr1c"
  it("takes in a string and returns a coded message, converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    expect(convertsCodedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(convertsCodedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(convertsCodedMessage(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

// RED: variable not defined

// b) Create the function that makes the test pass.

// create a function that takes in a string and returns a coded message
//
// define characters which will be swapped out and determine ALL will be replaced, not just the first value when iteration occurs (/[]/g)
// use built in method .replace()
// create an object with key value pairs

const convertsCodedMessage = (string) => {
  return string.replace(
    /[aeioAEIO]/g,
    (value) => ({ a: 4, A: 4, e: 3, E: 3, i: 1, I: 1, o: 0, O: 0 }[value])
  );
};

// GREEN

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordsThatInclude", () => {
  const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"];
  const letterA = "a";
  // Expected output: ["Apple", "Banana", "Orange"]
  const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"];
  const letterE = "e";
  // Expected output: ["Cherry", "Blueberry", "Peach"]
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter ", () => {
    expect(wordsThatInclude(arrayOfWords1, letterA)).toEqual([
      "Apple",
      "Banana",
      "Orange",
    ]);
    expect(wordsThatInclude(arrayOfWords2, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

// RED: variable not defined

// b) Create the function that makes the test pass.

// create a function that takes in an array of words and a single letter, returns all the words that contain that letter
// iterate over array to identify words containing the letter
// return word(s) containing the letter in array
// use built-in method .toLowerCase() to include both cases of the letter taken in by the function

const wordsThatInclude = (array, letter) => {
  wordsInclArr = array.filter((value) => {
    return value.toLowerCase().includes(letter);
  });
  return wordsInclArr;
};

// GREEN

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouseOrNot", () => {
  const hand1 = [5, 5, 5, 3, 3];
  // Expected output: true
  const hand2 = [5, 5, 3, 3, 4];
  // Expected output: false
  const hand3 = [5, 5, 5, 5, 4];
  // Expected output: false
  it("takes in an array of 5 numbers and determines whether or not the array is a FULL HOUSE", () => {
    expect(fullHouseOrNot(hand1)).toEqual(true);
    expect(fullHouseOrNot(hand2)).toEqual(false);
    expect(fullHouseOrNot(hand3)).toEqual(false);
  });
});

// RED: variable not defined

// b) Create the function that makes the test pass.

// create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”
// determine if there are 3 of the same value and 2 of the same value (comparison)
// return a boolean value depending if conditions are met for a "full house"

const fullHouseOrNot = (array) => {
  let newArr = array.sort();
  if (
    (newArr[0] === newArr[1] &&
      newArr[1] === newArr[2] &&
      newArr[3] === newArr[4]) ||
    (newArr[0] === newArr[1] &&
      newArr[2] === newArr[3] &&
      newArr[3] === newArr[4])
  ) {
    return true;
  } else {
    return false;
  }
};
