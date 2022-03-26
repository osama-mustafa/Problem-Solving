
/***
    Implement a function called countUniqueValues,
    which accepts a sorted array, and counts the unique values in the array.
    There can be negative numbers in the array, but it will always be sorted.
***/


function countUniqueValues(arr) {
    
    // First check if array is not empty
    const arrLength = arr.length;
    if (arrLength == 0) return 0;

    // Make two pointers i & j
    let i = 0;
    for (let j = 1; j < arrLength; j++) {
        if (arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1,1,1,3,3,4,4,5,6])) // 5
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4
console.log(countUniqueValues([1, 1, 1, 1, 1, 3])) // 2