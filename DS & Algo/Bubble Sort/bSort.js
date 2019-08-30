function randomArray(max){
    let arr = [];
    for(let i = 1; i <= max; i++){
        arr.push( Math.floor(Math.random() * 10) );
    }
    return arr;
}

function bSort(arr){

    for(let i = 0; i <= arr.length; i++){
        for(let j = 0; j <= arr.length - i; j++){
            if(arr[j] > arr[j + 1]){
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

let myArray = randomArray(5);
console.log(myArray);
console.log(bSort(myArray));