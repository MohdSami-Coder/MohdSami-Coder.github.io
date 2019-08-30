const LinkedList = require("./linkedListPrac");

class Queue extends LinkedList{
    enqueue(value){
        this.append(value);
    }

    dequeue(){
        if(!this.head) { return null; }

        let removedValue = this.head.value;
        this.head = this.head.next;
        return removedValue;
    }
}

let q = new Queue();

q.enqueue(10);
// q.print();
q.enqueue(20);
// q.print();
q.enqueue(30);
q.print();

console.log( q.dequeue() );
q.print();
console.log( q.dequeue() );
q.print();
console.log( q.dequeue() );
q.print();
