// rotate left Array
function rotateArray(arr, d) {
    var n = arr.length;
    // Normalize d: ensures d is not larger than the array length
    // and handles negative rotations if they were allowed (by converting them)
    d = d % n;
    if (d === 0) {
        return arr; // No rotation needed
    }
    var elementsToMove = arr.slice(0, d);
    var remainingElements = arr.slice(d);
    return remainingElements.concat(elementsToMove);
}
// const originalArray = [1, 2, 3, 4, 5];
// const d = 2;
// const rotatedArray = rotateArray(originalArray, d);
// console.log(rotatedArray);
function rotateArrayRight(arr, d) {
    var n = arr.length;
    var actualRotataion = d % n; // rotation should not be less than 0
    // no rotation
    if (actualRotataion === 0) {
        return arr;
    }
    var splitIndex = n - actualRotataion;
    var elementsToMove = arr.slice(splitIndex);
    var remainingElements = arr.slice(0, splitIndex);
    return elementsToMove.concat(remainingElements);
}
// const rightRotateArray = rotateArrayRight([1, 2, 3, 4, 5], 2);
// console.log(rightRotateArray);
// reverse String
function reverseString(str) {
    var charArray = str.split('');
    var revArray = charArray.reverse();
    var revString = revArray.join('');
    return revString;
}
function reverseStringMethodOne(str) {
    var charArray = str.split('');
    var revString = '';
    for (var _i = 0, charArray_1 = charArray; _i < charArray_1.length; _i++) {
        var ch = charArray_1[_i];
        revString = ch + revString;
    }
    console.log(revString);
}
reverseString('Bangalore');
// const revStr: string = reverseString('Bangalore');
// console.log(revStr);
function reverseSentence(str) {
    var words = str.split(' ');
    var revSent = words.reverse();
    var revSentence = revSent.join(' ');
    return revSentence;
}
// const revSentence: string = reverseSentence('I am in delhi');
// console.log(revSentence);
function majorityOfElement() {
    var a = [3, 2, 3, 3, 4];
    var n = a.length;
    var elementCounts = new Map();
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var element = a_1[_i];
        var currentCount = elementCounts.get(element) || 0;
        elementCounts.set(element, currentCount + 1);
    }
    var maxCount = 0;
    var majorityElement;
    // Iterate over the Map entries [key, value]
    elementCounts.forEach(function (count, key) {
        if (count > maxCount) {
            maxCount = count;
            majorityElement = key;
        }
    });
    console.log("Majority of the element is ".concat(majorityElement));
}
// majorityOfElement();
//count Alpha Digit Spl
// interface CharacterCounts {
//   alpha:number;
//   digit:number;
//   spl:number;
// }
function countAlphaDigitSpl() {
    var str = "An@and@a123wipro";
    var alpha = 0;
    var digit = 0;
    var spl = 0;
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (/[a-zA-z]/.test(ch)) {
            alpha++;
        }
        else if (/[0-9]/.test(ch)) {
            digit++;
        }
        else {
            spl++;
        }
    }
    // return {alpha,digit,spl};
    console.log("Character count ".concat(alpha));
    console.log("Digit count ".concat(digit));
    console.log("Special charcater count ".concat(spl));
}
// const counts: CharacterCounts = countAlphaDigitSpl();
// console.log(`Character count ${counts.alpha}`);
// console.log(`Digit count ${counts.digit}`);
// console.log(`Special charcater count ${counts.spl}`);
countAlphaDigitSpl();
function countStringChar(str) {
    str = str.toLowerCase();
    var map = new Map();
    var chs = str.split('');
    for (var _i = 0, chs_1 = chs; _i < chs_1.length; _i++) {
        var c = chs_1[_i];
        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
        }
        else {
            map.set(c, 1);
        }
    }
    map.forEach(function (key, count) {
        console.log(key, count);
    });
}
countStringChar('Bangalore');
