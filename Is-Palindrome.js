
/***
    Implement a function to check is the string is palindrome or not,
    the palindrome is a text read from the left as read from the right
    like "madam", "abba", "kayak"

    =====================
    Time Complexity: O(n)
    =====================
***/


function isPalindrome(str) {

    let reversedString = '';
    let strLength      = str.length;
    for (i = strLength - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    if (str === reversedString) {
        return true;
    }
    return false;
}

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('abbba')); // true
console.log(isPalindrome('kayak')); // true
console.log(isPalindrome('aabb')); // false
