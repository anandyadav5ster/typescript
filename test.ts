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
