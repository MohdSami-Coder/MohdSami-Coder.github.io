function isPalindrome(str){
    let lastIndex = str.length - 1;
    for(let i = 0; i < str.length; i++){
        if( str[i] !== str[lastIndex] ){
            return false;
        }
        lastIndex -= 1;
    }
    return true;
}

console.log( isPalindrome("malayalam") );
console.log( isPalindrome("madam") );
console.log( isPalindrome("Sami") );
