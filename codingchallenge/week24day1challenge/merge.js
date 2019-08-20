function merge(a, b){
    let merged = [];

    while(a.length  && b.length){
        let smallest;

        if(a[0] < b[0]){
            smallest = a.shift();
        } else {
            smallest = b.shift();
        }
        merged.push(smallest);
    }

    if(a.length){
        merged = merged.concat(a);
    }

    if(b.length){
        merged = merged.concat(b);
    }
    return merged;
}

let a = [1, 4, 7, 19, 32, 67];
let b = [4, 6, 23, 45, 65, 98];

console.log(a);
console.log(b);
console.log( merge(a, b) );
