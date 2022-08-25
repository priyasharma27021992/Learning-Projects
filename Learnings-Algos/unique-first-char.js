//given a string s, find the first non-repeating character

const findFirstNonRepeatingChar = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) >= 0 && s.indexOf(s[i], i + 1) === -1) {
      return i;
    }
  }
  return -1;
};

console.log(findFirstNonRepeatingChar("leetcode"));
