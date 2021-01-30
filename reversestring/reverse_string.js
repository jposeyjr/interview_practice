// const reverse = (str) => {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// };

const reverse = (str) => {
  return str.split('').reverse().join('');
};

// const reverse = (str) => {
//   let arr = Array.from(str);
//   arr.reduce((reversed, char) => {
//     return char + reversed;
//   }, '');
// };

module.exports = reverse;
