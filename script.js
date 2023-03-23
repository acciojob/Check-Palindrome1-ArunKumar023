// complete the given function

function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Check if the reversed string is the same as the original string
  return str === str.split('').reverse().join('');
}

module.exports = palindrome;

