// const reverse = (str) => {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// };

// const reverse = (str) => {
//   return str.split('').reverse().join('');
// };

const reverse = (str) => {
  return str.split('').reduce((reversed, char) => char + reversed, '');
};

module.exports = reverse;
