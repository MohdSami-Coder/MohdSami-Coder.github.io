function randomArray(max){

    let arr = [];
    for(let i = 0; i <= max; i++){
        arr.push( Math.floor(Math.random() * 10) );
    }
    return arr;
}

function commonElements(arr1, arr2){

    let common = [];

    // Loop through elements one by one from first array and check that one element 
    // against all elements in the second array
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){

            if(arr1[i] == arr2[j]){
                if( common.indexOf( arr1[i] ) == -1){
                    common.push( arr1[i] );
                }
            }
        }
    }
    return common;
}

let a = randomArray(5);
let b = randomArray(7);
console.log(a);
console.log(b);

console.log( commonElements(a, b) );