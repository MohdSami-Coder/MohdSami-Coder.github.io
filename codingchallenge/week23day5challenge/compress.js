function compress(str){

    let compressed = "";
    let previous = str[0];
    let count = 0;

    for(let i = 0; i < str.length; i++){

        // Update the repeated character count
        if(str[i] === previous){
            count += 1;
            continue;
        }

        // Construct the compressed character code
        compressed += previous;
        if(count > 1){
            compressed += count.toString();
        }

        // Reset the previous and count values
        previous = str[i];
        count = 1;
    }

    // For the last character, construct the compressed string again
    compressed += previous;
    if(count > 1){
        compressed += count.toString();
    }

    return compressed;
}

console.log( compress("AAABCCDDDD") );