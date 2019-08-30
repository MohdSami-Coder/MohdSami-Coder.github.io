function randomArray(max){
    let arr = [];

    for(let i = 1; i <= max; i++){
        arr.push( Math.floor(Math.random() * 10) );
    }
    return arr;
}


function mergeArrays(left, right){
    let merged = [];

    while(left.length && right.length){
        let smallest;

        if( left[0] < right[0] ){
            smallest = left.shift();
        } else {
            smallest = right.shift();
        }
        merged.push(smallest);
    } 

    if(left.length){
        merged = merged.concat(left);
    }

    if(right.length){
        merged = merged.concat(right);
    }

    return merged;
}

function mergeSort(arr){

    if(arr.length == 1){ return arr; }

    let middle = Math.floor(arr.length / 2);

    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);


    let leftSortedArray = mergeSort(left);
    let rightSortedArray = mergeSort(right);

    return mergeArrays(leftSortedArray, rightSortedArray);
}

let myArray = randomArray(10);
console.log(myArray);

console.log("sorting array....");
console.log( mergeSort(myArray) );