function randomArray(max){
    let arr = [];

    for(let i = 0; i <= max; i++){
        arr.push( Math.floor(Math.random() * 10) );
    }
    return arr;
}

function bSearch(arr, key){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){

        let middle = Math.floor((start + end) / 2);
        if(arr[middle] == key){
            return middle;
        } else if(key > arr[middle]){
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;

}



let x = randomArray(10).sort( (a, b) => a - b );
console.log(x);

console.log("Your Key --", bSearch(x, 3));