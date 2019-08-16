
// Brute force

// function checkUniqueChars(str){

//     let chars = new Set();
    
//     for(let i = 0; i < str.length; i++){

//         if( chars.has(str[i]) ) { return false; }
//         chars.add(str[i]);

//     }
//     return true;
// }

// console.log(checkUniqueChars("ansal"));
// console.log(checkUniqueChars("arkesh"));



function checkUniqueChars(str){

   return new Set(str).size == str.length;
    
}

console.log(checkUniqueChars("sami"));
console.log(checkUniqueChars("kamla"));