let LinkedList = require("./linkedList");

let fs = require("fs");
 class HashTable {

  constructor(size=32) {
    this.size = size;
    this.array =[];
    for (let i = 0; i < this.size; i++) {
         this.array.push(new LinkedList())
    }
  }
 
  hash(key) {
    let sum = 0;
     Array.from(key).forEach(character => sum+= character.charCodeAt(0));
     return sum % this.size;
  } 

  getList(key){
    let hashId = this.hash(key);
     return this.array[hashId];
  }

  set(key,value) {
    let linkedList = this.getList(key); 
    let node = linkedList.search(key);
    
    if(node) {
      node.data = value;
    } else {
      linkedList.append(key,value); 
    }
  }

  get(key) {
    let linkedList = this.getList(key); 
    let node = linkedList.search(key);

    if(node) {
      return node.data;
    } else {
      return null;
    }
  }

  delete(key) {
    let linkedList = this.getList(key); 
    linkedList.delete(key);
  }

  print() {
    this.array.forEach(e => e.print())
  }
 }

    let h = new HashTable(8);

  fs.readFile("computers-datafile.csv", "utf-8", (err,data) => {
 
  	if(err) {return console.log("error reading file");}
    let array = data.trim().split("\n");
    for (let i = 0; i < array.length; i++) {
      let row = array[i].split(",");
      h.set(row[0],row[1])
    }
    h.print();
  });