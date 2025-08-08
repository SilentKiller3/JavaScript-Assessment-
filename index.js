import { removeDuplicates } from "./questions/q1.js";
import { countElements } from "./questions/q10.js";
import { flattenArray } from "./questions/q11.js";
import { chunkArray } from "./questions/q12.js";
import { stringsToUppercase } from "./questions/q13.js";
import { stringsToLowercase } from "./questions/q14.js";
import { capitalizeFirstLetter } from "./questions/q15.js";
import { joinIntoSentence } from "./questions/q16.js";
import { replaceWord } from "./questions/q17.js";
import { findLongStrings } from "./questions/q18.js";
import { lengthOfStrings } from "./questions/q19.js";
import { mergeArray } from "./questions/q2.js";
import { toUpperCaseArray } from "./questions/q3.js";
import { arrayToText } from "./questions/q4.js";
import { reverseArray } from "./questions/q5.js";
import { sumArray } from "./questions/q6.js";
import { largestNumber } from "./questions/q7.js";
import { smallestNumber } from "./questions/q8.js";
import { averageArray } from "./questions/q9.js";

//Q1
removeDuplicates(["apple", "banana", "apple", "orange", "banana"]);

//Q2
const arr1 = ["a", "b"];
const arr2 = ["b", "c"];
console.log(mergeArray(arr1, arr2));

//Q3
const arr = ["my", "name", "is"];
console.log(toUpperCaseArray(arr));

//Q4
const words = ["My", "Name", "is", "Iraj"];
console.log(arrayToText(words));

//Q5
console.log(reverseArray([1, 2, 3]));

//Q6
console.log(sumArray([10, 20, 30]));

//Q7
console.log(largestNumber([1, 7, 3, 9]));

//Q8
console.log(smallestNumber([5, 2, 8, 1]));

//Q9
console.log(averageArray([2, 4, 6, 8]));

//Q10
console.log(countElements(["apple", "banana", "apple"]));

//Q11
console.log(flattenArray([1, [2, [3, 4]], 5]));

//Q12
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));

//Q13
console.log(stringsToUppercase(["a", "b", "c"]));

//Q14
console.log(stringsToLowercase(["A", "B", "C"]));

//Q15
console.log(capitalizeFirstLetter(["hello", "world"]));

//Q16
console.log(joinIntoSentence(["I", "love", "coding"]));

//Q17
console.log(replaceWord(["I", "am", "Sudan"], "Sudan", "Iraj"));

//Q18
console.log(findLongStrings(["apple", "bat", "cat", "banana"]));

//Q19
console.log(lengthOfStrings(["a", "bb", "ccc"]));
