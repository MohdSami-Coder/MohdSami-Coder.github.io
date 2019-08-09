function maximumSum(arr){

    let maximum = 0;

    for(let i = 0; i < arr.length; i++){

        let sum = 0;
        for(let j = i; j < arr.length; j++){

            sum += arr[j];

            if(sum > maximum){
                maximum = sum;
            }
            console.log("Index => ", i, "Sum => ", sum)
        }
    }
    return maximum;
}

let a = [-1, 2, 4, -3, 5, 2, -5, 2];
console.log(a);
// console.log( maximumSum(a) );
console.log("maximum sum = ", maximumSum(a));