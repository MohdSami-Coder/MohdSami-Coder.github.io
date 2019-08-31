function findMissing(arr){
    let missing = [];
    let largest = arr[ arr.length  -1 ];
    let index = 0;
    
    for(let i = 1; i <= largest; i++){
        
        if(i === arr[index]){
            index += 1;
        } else {
            missing.push(i);
        }
    }
    
    return missing;
}

console.log( findMissing( [1, 2, 4, 5, 6] ) );

console.log( findMissing( [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15] ) );
