function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  console.log(findLongestWord("this is a javascript file"));