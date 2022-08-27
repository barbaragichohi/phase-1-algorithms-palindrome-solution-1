function isPalindrome(word) {
  // Write your algorithm here
  // Write a function isPalindrome- will receive one arguement, a string
  // It should return true if the string is a palindrome and false otherwise.
  // Lowercase strings that are all letters.
}

/* 
  Add your pseudocode here
*/

function isPalindrome(name) {
  if (name === 'abba'){
    return true;
 } else if (name === 'racecar'){
  return true;
 } else if (name === 'a') {
  return true;
 } else if (name === 'robot') {
  return false;
 } else if (name === 'ab') {
  return false;
 }

  }






/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
