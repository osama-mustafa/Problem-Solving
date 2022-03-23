function isAnagram(string1, string2) {

    if (string1.length !== string2.length) {
        return false
    }
    
    let lowercasedString1 = string1.toLowerCase();
    let lowercasedString2 = string2.toLowerCase();

    let lookup = {}
    for (const firstValue of lowercasedString1) {
        lookup[firstValue] = (lookup[firstValue] || 0) + 1
    }

    for (const secondValue of lowercasedString2) {
        if (! lookup[secondValue]) {
            return false
        }
        lookup[secondValue] -= 1
    }

    return true
}

console.log(isAnagram('race', 'CARE')) // true
console.log(isAnagram('part', 'trap')) // true
console.log(isAnagram('heart', 'earth')) // true
console.log(isAnagram('knee', 'keen'))  // true