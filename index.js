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
import { removeDuplicatess } from "./questions/q20.js";
import { countTotalCharacters } from "./questions/q21.js";
import { getProductTitles } from "./questions/q22.js";
import { getUniqueCategories } from "./questions/q23.js";
import { pricesDoubled } from "./questions/q24.js";
import { productsGreaterThan } from "./questions/q25.js";
import { getTitles } from "./questions/q26.js";
import { getPricesWithDiscountType } from "./questions/q27.js";
import { getTitlesSortedByPrice } from "./questions/q28.js";
import { mostExpensiveProduct } from "./questions/q29.js";
import { toUpperCaseArray } from "./questions/q3.js";
import { mostChipestProduct } from "./questions/q30.js";
import { totalPrice } from "./questions/q31.js";
import { countProductsByCategory } from "./questions/q32.js";
import { productsInPriceRange } from "./questions/q33.js";
import { squareNumbers } from "./questions/q34.js";
import { pricesToCurrency } from "./questions/q35.js";
import { sortAscending } from "./questions/q36.js";
import { sortDescending } from "./questions/q37.js";
import { removeFalsy } from "./questions/q38.js";
import { allEven } from "./questions/q39.js";
import { arrayToText } from "./questions/q4.js";
import { hasNumberAbove100 } from "./questions/q40.js";
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

//Q20
console.log(removeDuplicatess([1, 2, 1, ["a", "b"], ["a", "b"]]));

//Q21
console.log(countTotalCharacters(["Hi", "Iraj"]));

// List of Products
let products = [
  {
    id: 1,
    title: "Pen",
    category: "stationery",
    price: 10,
    discount: { type: "none" },
  },
  {
    id: 2,
    title: "Shirt",
    category: "clothing",
    price: 500,
    discount: { type: "seasonal" },
  },
  {
    id: 3,
    title: "Phone",
    category: "electronics",
    price: 20000,
    discount: { type: "festival" },
  },
  {
    id: 4,
    title: "Notebook",
    category: "stationery",
    price: 50,
    discount: { type: "none" },
  },
];

//Q22
console.log(getProductTitles(products));

//Q23
console.log(getUniqueCategories(products));

//Q24
console.log(pricesDoubled(products));

//Q25
console.log(productsGreaterThan(products));

//Q26
console.log(getTitles(products, "stationery"));

//Q27
console.log(getPricesWithDiscountType(products, "seasonal"));

//Q28
console.log(getTitlesSortedByPrice(products));

//Q29
console.log(mostExpensiveProduct(products));

//Q30
console.log(mostChipestProduct(products));

//Q31
console.log(totalPrice(products));

//Q32
console.log(countProductsByCategory(products));

//Q33
console.log(productsInPriceRange(products, 100, 1000));

//Q34
console.log(squareNumbers([2, 3, 4]));

//Q35
console.log(pricesToCurrency([100, 200]));

//Q36
console.log(sortAscending([3, 1, 6, 2]));

//Q37
console.log(sortDescending([1, 2, 3, 4]));

//Q38
console.log(removeFalsy([0, 1, false, 2, "", 3, undefined, null]));

//Q39
console.log(allEven([2, 4, 6, 8]));

//Q40
console.log(hasNumberAbove100([2, 4, 6, 8, 101]));
