function randomArray(max){
    let arr = [];
    for(let i = 0; i <= max; i++ ){
        arr.push(Math.floor(Math.random() * 10) );
    }
    return arr;
}

function largest(arr){
    return Math.max.apply(null, arr);
}

function smallest(arr){
    return Math.min.apply(null, arr);
}

function main() {
    let n = randomArray(10);
    
    console.log(n);
    console.log("Largest Number: - ", largest(n));
    console.log("Smallest Number: - ", smallest(n));
}

main();