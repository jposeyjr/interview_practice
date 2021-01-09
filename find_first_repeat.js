/*
Find the first element in the array that reoccurs and return it.
If no element reoccurs then return undefined. 
*/

//function that takes in an array as input
const findFirstReoccurring = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    //don't fall into the trap of using 1 on the inner nested loop
    //the nested loop restarts so if you use 1 it will end up ending early
    //instead take i's index and add one
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i]; //inline return to keep it clean and simple
    } //nested for loop
  } //for loop
  //if it finds nothing return 0, false, undefined, whatever they ask
  return undefined;
}; //end of function Big-O of O(n^2)

console.log(findFirstReoccurring([2, 1, 5, 3, 2, 0])); //should return 2
console.log(findFirstReoccurring([1, 2, 3, 4, 5])); // should return undefined

//this approach works but it is very slow if we had a very large array so we will do it
//a better way that is going to much faster and have a time of

//in javascript the below is called objects, in most languages these are hashmaps
//this is faster as we get to not only loop through the array but also we can
//check to see if it is in the object i.e hashMap
const findFirstWithHash = (input) => {
  let hashMap = {};
  //if string use split('') or let arr = Array.from(input)
  for (let i = 0; i < input.length; i++) {
    //if it is already in the map then we found the reoccur number and will return it
    //because of weird javascript we need the undefined here or to change the else to true
    if (hashMap[input[i]] !== undefined) {
      return input[i];
      //if not then we will add it to the map
    } else {
      hashMap[input[i]] = i;
    }
    console.log(hashMap); //so you can see what it is doing;
  } //end of for loop
  return undefined;
}; //end of hash func Big-O of O(n)

console.log('\nHashmap Func starts');
console.log('\n', findFirstWithHash([3, 4, 2, 3, 7, 6, 5, 2])); //should return 3
console.log('\n', findFirstWithHash([3, 4, 2, 0, 7, 6, 5, 2])); //should return 2
console.log('\n', findFirstWithHash([3, 4, 2])); //should return undefined
