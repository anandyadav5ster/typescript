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
// function reverseString(str: string): string{
//   const charArray: string[] = str.split('');
//   const revArray:string[] = charArray.reverse();
//   const revString: string = revArray.join('')
//   return revString;
// }
//
// const revStr: string = reverseString('Bangalore');
// console.log(revStr);
function reverseString(str) {
    var charArray = str.split('');
    var revArray = charArray.reverse();
    return revArray.join('');
}
var revString = reverseString('Bangalore');
console.log(revString);
