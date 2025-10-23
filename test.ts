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
  for (const [key, count] of elementCounts) {
    if (count > maxCount) {
      maxCount = count;
      majorityElement = key;
    }
  }
  console.log(`Majority of the element is ${majorityElement}`);
}
// majorityOfElement();