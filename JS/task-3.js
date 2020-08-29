"use strict";
function findLongestWord(string = "") {
  let arrey = string.split(" ");
  let longestResult = arrey[0];
  for (const element of arrey) {
    if (longestResult.length < element.length) {
      longestResult = element;
    }
  }
  return longestResult;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
