
/***
    problem link from HackerRank
    https://www.hackerrank.com/challenges/camelcase/problem

***/

function camelcase(s) {
    
    let numberOfWordsInString = 1;
    for (const letter of s) {
        if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
            numberOfWordsInString +=1; 
        }
    }
    return numberOfWordsInString;
}

console.log(camelcase('saveChangesInTheEditor')) // 5
console.log(camelcase('oneTwoThree')) // 3
console.log(camelcase('osama')) // 1
