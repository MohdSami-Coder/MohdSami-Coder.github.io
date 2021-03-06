class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }

    toString() {
        return this.value;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        // Create a new node
        let newNode = new Node(value);

        // If the tail is None, make the head and tail as new node as our list
        // is empty.
        if(!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            // If tail is not None, put the current tail's next node as the new
            // node. And also update the current tail as the new node.
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        // Create the new Node
        let newNode = new Node(value);

        // If the head is None, it means that the list is empty.
        // So set both head and tail as the new node.
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the head is not None, set the new node's next node as the current
            // head. Also point the current head to the new node.
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    search(value) {
        // Starting from the head, go down till the last node
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) { return currentNode; }
            // Move to the next node
            currentNode = currentNode.next;
        }
        return null;
    }

    delete(valueToDelete) {
        // If the list is empty, return immediately as there is nothing to
        // look up and delete.
        if(!this.head) { return null; }

        // If head is the value that needs to be deleted, simply point the current head to the next value and return.
        if(this.head.value === valueToDelete) {
            this.head = this.head.next;
            return;
        }

        // For other values, start from the second value and go till the end.
        let currentNode = this.head;
        while(currentNode.next) {

            // If the value to delete is the next value of the current, set the
            // current node's next node as its next node's next. And return.

            if(currentNode.next.value === valueToDelete) {
                currentNode.next = currentNode.next.next;
                break;
            }

            currentNode = currentNode.next;
        }

        // Check if tail has to be updated.
        // If the value that needs to be deleted is the value at the tail,
        // we have to update tail as well
        if(this.tail.value === valueToDelete) {
            this.tail = currentNode;
        }
    }

    print() {
        let currentNode = this.head,
            values = [];
        while(currentNode) {
            values.push(currentNode.toString());
            currentNode = currentNode.next;
        }
        console.log(values);
    }
}


let l = new LinkedList();

// console.log("Appending====>");
l.append("Javascript")
l.append("Python")
l.append("Rust")
l.append("Lua")
l.append("Go")
// l.print();

// console.log("Prepending====>");
// l.prepend("Cobol")
// l.prepend("Java")
// l.prepend("C++")
// l.prepend("C");

console.log("Before deletion");
l.print();

// l.delete("Rust");
// l.delete("Lua");
// l.delete("C");
l.delete("Javascript");


console.log("After Deletion");
l.print();
// console.log(l.head.value, l.tail.value);