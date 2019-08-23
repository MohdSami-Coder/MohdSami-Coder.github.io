let Heap = require("./heap-pq");

let fs = require("fs");
  class PriorityQueue extends Heap{
    constructor(){
        let compare = function(a, b){
            return this.priorities[a] > this.priorities[b];
        }
        super(compare);

        this.priorities = {};
    }
    add(item, priority=100){
        this.priorities[item] = priority;
        super.add(item);
    }

    remove(item){
        super.remove(item);
        delete this.priorities[item];
    }

    changePriority(item, priority){
        this.remove(item);
        this.add(item, priority);
    }

  }

let pq = new PriorityQueue();

  fs.readFile("computers-datafile.csv", "utf-8", (err,data) => {
 
  	if(err) {return console.log("error reading file");}
    let array = data.trim().split("\n");
    for (let i = 0; i < array.length; i++) {
      let row = array[i].split(",");
      pq.add(row[0],row[1])
    }
    pq.print();
  });