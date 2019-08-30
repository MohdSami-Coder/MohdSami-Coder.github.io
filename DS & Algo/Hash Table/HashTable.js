const LinkedList = require("./linkedList");

class HashTable{

    constructor(size=8){
        this.size = size;
        this.array = [];
        for(let i = 0; i < this.size; i++){
            this.array.push( new LinkedList() );
        }
    }

    hash(key){
        let sum = 0;
        Array.from(key).forEach( char => sum += char.charCodeAt(0) );
        return sum % this.size;
    }

    getList(key){
        let hashId = this.hash(key);
        return this.array[ hashId ];

    }

    set(key, value){
        //  First u have to find the hash to get the array location
        let linkedList = this.getList(key);

        //  See if this key exists inside our linked list
        let node = linkedList.search(key);

        // If the key already exists in that location, simply update the value
        if(node){
            node.data = value;
        } else {
            linkedList.append(key, value);
        }
    }

    get(key){
        let linkedList = this.getList(key);

        let node = linkedList.search(key);

        if(node){
            return node.data;
        } else {
            return null;
        }

    }

    delete(key){
        let linkedList = this.getList(key);

        linkedList.delete(key);
    }

    print(){
        this.array.forEach(a => a.print() );
    }
}

let h = new HashTable();
h.set("Instructor", "Ansal");
h.set("Instructor", "Ansal");
h.set("Student", "Sami");
h.set("CBO", "Pramod");
h.set("Counselor", "Vaibhav");
h.set("Founder", "Divyam");
h.print();


console.log("Deleting Founder and Counselor");

h.delete("Founder");
h.delete("Counselor");

h.print();

// console.log( h.get("Instructor") );
// console.log( h.get("Founder") );
// console.log( h.get("Counselor") );
// console.log( h.get("Principal") );