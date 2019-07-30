function frequency(arr){
    let obj = {};

    for(let i = 0; i < arr.length; i++){

        let element = arr[i];

        if( !obj[element] ){
            obj[element] = 0;
        }
        obj[element] += 1;
    }

    return obj;
    
}

let names = ["Ansal", "Vaibhav", "Divyam", "Vaibhav", "Dwarak"];
let numbers = [2, 3, 2, 4, 3, 5, 3];

console.log( frequency(names) );

console.log( frequency(numbers) );

