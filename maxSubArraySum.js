
/***
    Implement a function to return the sum of consecutive elements in array,
    the function accepts two parameters (array, num), num refers to the number of adjacent
    elements in the array
***/

function maxSubArraySum(arr, num) {

    // Check if num is greater than array length
    let arrLength = arr.length;
    if (num > arrLength) return null 

    let tempSum = 0;
    let maxSum  = 0;

    // Loop throughout the first elements based on num
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for (let i = num; i < arrLength; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum  = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
