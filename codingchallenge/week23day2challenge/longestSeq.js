function generateSequence(n){
   
    let length = 1;

    while(n > 1){
        // console.log(n);

        if(n % 2 == 0){
            n /= 2;
        } else {
            n = (3 * n) + 1;
        }
        length++;
    }
    return length;
}

function main(){
    
    let largestSequence = -1;
    let startingNumber = 2;

    for(let i = 2; i <= 1000000; i++){
        let result = generateSequence(i);
        
        if(result > largestSequence){
            largestSequence = result;
            startingNumber = i;
        }
    }
    console.log(`${startingNumber} produces the longest sequence of ${largestSequence}`);
}

main();