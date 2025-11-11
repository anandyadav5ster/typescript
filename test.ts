// rotate left Array

function rotateArray(arr: number[], d: number): number[]{
  const n = arr.length;
    // Normalize d: ensures d is not larger than the array length
    // and handles negative rotations if they were allowed (by converting them)
    d = d % n;

    if (d === 0) {
        return arr; // No rotation needed
    }
  const elementsToMove = arr.slice(0, d);
  const remainingElements = arr.slice(d);
  return remainingElements.concat(elementsToMove);
}

// const originalArray = [1, 2, 3, 4, 5];
// const d = 2;
// const rotatedArray = rotateArray(originalArray, d);
// console.log(rotatedArray);


function rotateArrayRight(arr: number[], d: number): number[] {
  const n = arr.length;
  const actualRotataion = d % n; // rotation should not be less than 0

  // no rotation
  if(actualRotataion === 0){
    return arr;
  }
  const splitIndex = n-actualRotataion;
  const elementsToMove = arr.slice(splitIndex);
  const remainingElements = arr.slice(0,splitIndex);
  return elementsToMove.concat(remainingElements);
}

// const rightRotateArray = rotateArrayRight([1, 2, 3, 4, 5], 2);
// console.log(rightRotateArray);

// reverse String
function reverseString(str: string): string{
  const charArray: string[] = str.split('');
  const revArray:string[] = charArray.reverse();
  const revString: string = revArray.join('')
  return revString;
}


function reverseStringMethodOne(str: string) {
    const charArray: string[] = str.split('');
    let revString: string = '';
    for( const ch of charArray) {
        revString =ch+ revString;
    }
    console.log(revString);
}

reverseString('Bangalore');

// const revStr: string = reverseString('Bangalore');
// console.log(revStr);

function reverseSentence(str: string): string{
  const words: string[] = str.split(' ');
  const revSent: string[] = words.reverse();
  const revSentence:string = revSent.join(' ');
  return revSentence;
}
// const revSentence: string = reverseSentence('I am in delhi');
// console.log(revSentence);

function majorityOfElement():  void{
  const a: number[] = [3,2,3,3,4];
  const n:number =  a.length;
  const elementCounts = new Map<number, number>();

  for(const element of a){
    const currentCount: number = elementCounts.get(element) || 0;
    elementCounts.set(element,currentCount+1);
  }

   let maxCount: number = 0;
   let majorityElement: number | undefined;

  // Iterate over the Map entries [key, value]
    elementCounts.forEach((count,key)=>{
 if (count > maxCount) {
      maxCount = count;
      majorityElement = key;
    }
  })

  console.log(`Majority of the element is ${majorityElement}`);
}
// majorityOfElement();

//count Alpha Digit Spl
// interface CharacterCounts {
//   alpha:number;
//   digit:number;
//   spl:number;
// }
function countAlphaDigitSpl(): void{
  const str: string = "An@and@a123wipro";
  let alpha:number = 0;
  let digit:number = 0;
  let spl: number = 0;

  for( let i:number = 0;i<str.length;i++){
    const ch:string = str.charAt(i);
    if(/[a-zA-z]/.test(ch)){
      alpha ++;
    } else if(/[0-9]/.test(ch)){
      digit ++;
    } else{
      spl ++;
    }
  }
  // return {alpha,digit,spl};
  console.log(`Character count ${alpha}`);
  console.log(`Digit count ${digit}`);
  console.log(`Special charcater count ${spl}`);
}
// const counts: CharacterCounts = countAlphaDigitSpl();
// console.log(`Character count ${counts.alpha}`);
// console.log(`Digit count ${counts.digit}`);
// console.log(`Special charcater count ${counts.spl}`);
// countAlphaDigitSpl();

function countStringChar(str: string) {
   str = str.toLowerCase();
    const map = new Map<String, number>();
    const chs: string[] = str.split('');
    for(const c of chs) {
      if(map.has(c)){
          map.set(c, map.get(c)+1);
      } else {
        map.set(c,1);
      }
    }
    map.forEach((key, count) =>{
      console.log(key, count);
    })
    
}
// countStringChar('Bangalore');

// count first non repeat number

function countNonRepeatNum(arr : number[]): number|null {
  const count = new Map<number,number>();
  for(const num of arr){
    count.set(num, (count.get(num)||0)+1);
  }
  for(const num of arr ){
    if(count.get(num)===1){
      return num;
    }
  }
  return null;
}

const numList =  [4, 5, 1, 2, 0, 4];
// console.log(countNonRepeatNum(numList));

// count the first non repeating char
function nonRepeatingGenricMethod<T>(arr:T[]):T|null {
  const count = new Map<T,number>();

  for(const item of arr){
    count.set(item, (count.get(item)||0)+1);
  }
  for(const item of arr){
    if(count.get(item)===1) return item;
  }

  return null;
}
const str: string = "Bangalore";
const words: string[] = str.split('');
console.log(nonRepeatingGenricMethod(words));

// reverse String and number using same method
/*
Explanation
T extends string | number → allows both strings and numbers.
item.toString() → converts number to string so we can reverse it.
.split('').reverse().join('') → reverses the string.
If original input was a number, convert the reversed string back using Number().
*/
function reversStringNumber<T extends string | number>(item:T): T{
    const str = item.toString();
    const reverseItem = str.split('').reverse().join('');
    return (typeof item==='number'? Number(reverseItem):reverseItem) as T;
    
}
const item = 'Anand';
// console.log(reversStringNumber(item));

// remove duplicates from the string or number
function removeDuplicateFromItem<T extends string | number>(item: T): T {
  const str = item.toString();
  const result = [...new Set(str)].join('');
  return (item ==='number'?Number(result): result) as T;
}
// console.log(removeDuplicateFromItem('programming'));
// console.log(removeDuplicateFromItem(12342));
/*=================================================*/
function countFrequence<T extends string | number>(item:T): Map<string,number>{
    const str = item.toString().toLowerCase();
    const count = new Map<string,number>();
    for(const char of str){
       count.set(char,(count.get(char)|0)+1);
    }
    // console.log(count);
    count.forEach((key,value) =>{
        console.log(key,value);
    })
    return count;
}

const city = 'BBangalore';
const trainNumber = 12341;
// countFrequence(city);
// countFrequence(trainNumber);
/*=================count duplicates===============================*/
function countDuplicates<T extends string | number>(item: T){
  const str = item.toString().toLowerCase();
  const map = new Map<string,number>();
  for(const char of str){
    map.set(char,(map.get(char)||0)+1);
  }
  map.forEach((value,key) =>{
    console.log(key,value);
  });
}
const busNumber = 12341;
// countDuplicates(busNumber);
/*===========count max character=========================*/
function countDuplicatesItems<T extends string | number>(item:T){
    const str = item.toString().toLowerCase();
    const count = new Map<string,number>();
    for(const char of str){
           count.set(char,(count.get(char)||0)+1);
    }
    
   let maxChar='';
   let maxCount=0;
    
    count.forEach((freq,char) =>{
        if(freq > maxCount){
      maxCount = freq;
      maxChar = char;
        }
    console.log(char,freq);
    })
  console.log(`Highest occurred character: '${maxChar}' → ${maxCount} times`);
}

const chars = 'aaaaabbbccc';
// countDuplicatesItems(chars);
/* =========remove given item=====================*/
function removeGivenChar<T extends string|number>(item:T, toRemove:T): T{
  const str = item.toString().toLowerCase();
  const remove = toRemove.toString().toLowerCase();
  const output = str.split(remove).join('');
  return(item==='number'?Number(output):output) as T;
}
console.log(removeGivenChar('madam','m'));

/*=========reverse specfic words================*/
function reverseWord<T extends string | number>(item:T, target:T) {
    const str = item.toString().toLowerCase();
    const tar = target.toString().toLowerCase();
    const targetRev = tar.split('').reverse().join('');
    const output = str.replace(tar,targetRev);
    console.log(output);
}

// reverseWord('Anand is from bangalore','bangalore');
function countDigit(str: string){
    const digit = str.match(/\d/g);
    const countDigit = digit?digit.length:0;
    console.log(countDigit);
}
const cityName: string = "456Delhi123";
countDigit(cityName);