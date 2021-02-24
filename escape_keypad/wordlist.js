arrlist = require('./wordArr');

const helperFunc = (chars) => {
  const charSet = new Set(chars);
  return (testString) =>
    Array.prototype.every.call(testString, (c) => charSet.has(c));
};

function numKeypadSolutions(wordlist, keypads) {
  // Write your code here
  let countArr = [];
  keypads.forEach((keys) => {
    let counter = 0;
    const charsToTest = helperFunc(keys);
    wordlist.forEach((word) => {
      word = word.toUpperCase();
      if (
        charsToTest(word) &&
        typeof word === 'string' &&
        word.includes(keys[0])
      ) {
        counter++;
      }
    });
    countArr.push(counter);
  });
  return countArr;
}

const keypad = [
  'DISHSEF',
  'AELWXYZ',
  'AELPXYZ',
  'AELPSXY',
  'SAELPXY',
  'XAELPSY',
];

//checks a list of 395268 words
//40, 37, 45, 98, 54, 10 should be

//keypad = ['AELWXYZ','AELPXYZ','AELPSXY','SAELPXY','XAELPSY',];
//wordlist = [3, 'APPLE', 'PLEAS', 'PLEASE', 5];
//0, 1, 3, 2, 0 should be
console.log(numKeypadSolutions(arrlist, keypad));
