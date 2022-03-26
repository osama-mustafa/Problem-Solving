
/***
    Implement a function called sameFrequency. Given two positive integers,
    find out if the two numbers have the same frequency of digits

    =====================
    Time Complexity: O(n)
    =====================
***/


function sameFrequency(int1, int2) {

    // Convert integers to strings
    let str1 = int1.toString();
    let str2 = int2.toString();

    // Check if integrs are in different length
    if (str1.length !== str2.length) return false

    let result = {};
    for (let firstValue of str1) {
        result[firstValue] = (result[firstValue] || 0) + 1
    }

    for (let secondValue of str2) {
        if (! result[secondValue]) {
            return false
        }
        result[secondValue] -= 1
    }

    return true
}

console.log(sameFrequency(182, 281));           // true
console.log(sameFrequency(34, 14));             // false
console.log(sameFrequency(3589578, 5879385));   // true
console.log(sameFrequency(22, 222));            // false