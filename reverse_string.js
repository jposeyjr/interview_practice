const reverse = (str) => {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};

const reverseSimple = (str) => {
  return str.split('').reverse().join('');
};

const reverseReducer = (str) => {
  let arr = Array.from(str);
  arr.reduce((reversed, char) => {
    return char + reversed;
  }, '');
};

console.log(reverseSimple('Ello Motto Simple'));

console.log(reverse('Ello Motto'));

console.log(reverseReducer('Reducer is pretty different'));
