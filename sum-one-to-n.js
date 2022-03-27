
/***
    Implement a function to compute sum of digits
    in all numbers from 1 to n

    =====================
    Time Complexity: O(1)
    =====================
***/


function sum(n) {

    return (n * (n + 1))/2;
}

console.log(sum(3)) // 6
console.log(sum(10)) // 55
console.log(sum(100)) // 5050
