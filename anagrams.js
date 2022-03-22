
function isAnagram(string1, string2) {

    if (string1.length !== string2.length) {
        return false
    }

    let sortedString1 = string1.split('').sort().join('').toLowerCase();
    let sortedString2 = string2.split('').sort().join('').toLowerCase();

    return sortedString1 === sortedString2
}

console.log(isAnagram('race', 'CARE')) // true
console.log(isAnagram('part', 'trap')) // true
console.log(isAnagram('heart', 'earth')) // true
console.log(isAnagram('knee', 'keen'))  // true