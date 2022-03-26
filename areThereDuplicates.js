
/***
    Implement a function called areThereDuplicates,
    which accepts a variable number of argumants and checks whether
    there are any duplicates among the arguments passed in.

    ====================
    Time Complexity: O(n)
    Space Complexity: O(n)
    ======================
***/


function areThereDuplicates(...args) {

    let lookup = {}
    for (let value of args) {
        lookup[value] = (lookup[value] || 0) + 1
        if (lookup[value] > 1) {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3))            // false
console.log(areThereDuplicates(1, 2, 2))            // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
