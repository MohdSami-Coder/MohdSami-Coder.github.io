let numbers = [1, 2, 2, 2, 3, 4, 5, 6, 6, 7];

console.log("Before removing Duplicates: ", numbers);

let removeDuplicates = Array.from( new Set(numbers) );
console.log("After removing duplicates:", removeDuplicates);