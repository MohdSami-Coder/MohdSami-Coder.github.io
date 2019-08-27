function sum(n){

    let result = 0;

    while(n > 0){
        result = result + (n % 10);
        n = Math.floor(n / 10);
    }
    return result;
}

console.log( sum(Math.pow(2, 1000)) );