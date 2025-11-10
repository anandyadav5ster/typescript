// rotate left Array
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// countAlphaDigitSpl();
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
// countStringChar('Bangalore');
// count first non repeat number
function countNonRepeatNum(arr) {
    var count = new Map();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        count.set(num, (count.get(num) || 0) + 1);
    }
    for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
        var num = arr_2[_a];
        if (count.get(num) === 1) {
            return num;
        }
    }
    return null;
}
var numList = [4, 5, 1, 2, 0, 4];
// console.log(countNonRepeatNum(numList));
// count the first non repeating char
function nonRepeatingGenricMethod(arr) {
    var count = new Map();
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var item_1 = arr_3[_i];
        count.set(item_1, (count.get(item_1) || 0) + 1);
    }
    for (var _a = 0, arr_4 = arr; _a < arr_4.length; _a++) {
        var item_2 = arr_4[_a];
        if (count.get(item_2) === 1)
            return item_2;
    }
    return null;
}
var str = "Bangalore";
var words = str.split('');
console.log(nonRepeatingGenricMethod(words));
// reverse String and number using same method
/*
Explanation
T extends string | number → allows both strings and numbers.
item.toString() → converts number to string so we can reverse it.
.split('').reverse().join('') → reverses the string.
If original input was a number, convert the reversed string back using Number().
*/
function reversStringNumber(item) {
    var str = item.toString();
    var reverseItem = str.split('').reverse().join('');
    return (typeof item === 'number' ? Number(reverseItem) : reverseItem);
}
var item = 'Anand';
// console.log(reversStringNumber(item));
// remove duplicates from the string or number
function removeDuplicateFromItem(item) {
    var str = item.toString();
    var result = __spreadArray([], new Set(str), true).join('');
    return (item === 'number' ? Number(result) : result);
}
// console.log(removeDuplicateFromItem('programming'));
// console.log(removeDuplicateFromItem(12342));
/*=================================================*/
function countFrequence(item) {
    var str = item.toString().toLowerCase();
    var count = new Map();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        count.set(char, (count.get(char) | 0) + 1);
    }
    // console.log(count);
    count.forEach(function (key, value) {
        console.log(key, value);
    });
    return count;
}
var city = 'BBangalore';
var trainNumber = 12341;
// countFrequence(city);
// countFrequence(trainNumber);
/*=================count duplicates===============================*/
function countDuplicates(item) {
    var str = item.toString().toLowerCase();
    var map = new Map();
    for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
        var char = str_2[_i];
        map.set(char, (map.get(char) || 0) + 1);
    }
    map.forEach(function (value, key) {
        console.log(key, value);
    });
}
var busNumber = 12341;
// countDuplicates(busNumber);
/*===========count max character=========================*/
function countDuplicatesItems(item) {
    var str = item.toString().toLowerCase();
    var count = new Map();
    for (var _i = 0, str_3 = str; _i < str_3.length; _i++) {
        var char = str_3[_i];
        count.set(char, (count.get(char) || 0) + 1);
    }
    var maxChar = '';
    var maxCount = 0;
    count.forEach(function (freq, char) {
        if (freq > maxCount) {
            maxCount = freq;
            maxChar = char;
        }
        console.log(char, freq);
    });
    console.log("Highest occurred character: '".concat(maxChar, "' \u2192 ").concat(maxCount, " times"));
}
var chars = 'aaaaabbbccc';
// countDuplicatesItems(chars);
/* =========remove given item=====================*/
function removeGivenChar(item, toRemove) {
    var str = item.toString().toLowerCase();
    var remove = toRemove.toString().toLowerCase();
    var output = str.split(remove).join('');
    return (item === 'number' ? Number(output) : output);
}
console.log(removeGivenChar('madam', 'm'));
/*=========reverse specfic words================*/
function reverseWord(item, target) {
    var str = item.toString().toLowerCase();
    var tar = target.toString().toLowerCase();
    var targetRev = tar.split('').reverse().join('');
    var output = str.replace(tar, targetRev);
    console.log(output);
}
reverseWord('Anand is from bangalore', 'bangalore');
