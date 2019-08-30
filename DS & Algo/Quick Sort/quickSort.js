function randomArray(max){
    let arr = [];

    for(let i = 0; i <= max; i++){
        arr.push( Math.floor(Math.random() * 10) );
    }
    return arr;
}


function qSort(arr){

    if(arr.length <= 1) {return arr; }

    let left = [];
    let right = [];
    let pivot = arr.shift();
    let center = [ pivot ];

    while(arr.length){

        let currentElement = arr.shift();

        if(currentElement == pivot){
            center.push(currentElement);
        } else if(currentElement > pivot){
            right.push(currentElement);
        } else {
            left.push(currentElement);
        }
    }
    let leftSortedArray = qSort(left);
    let rightSortedArray = qSort(right);

    return leftSortedArray.concat(center, rightSortedArray);

}



let myArray = randomArray(10);
console.log(myArray);

console.log("quick sorting...");
console.log( qSort(myArray) );