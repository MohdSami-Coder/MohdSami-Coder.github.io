class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }

    toString(){
        return this.value;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        let newNode = new Node(value);

        // First check if the tail is Null.
        // If the tail (or head) is Null, that means list is empty.
        // Then make the new node as the head and the tail.

        if(!this.tail){
            // The list is empty now.
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If there is a tail already, we have to make the current tail point to the new node.
            // Also have to make the new node as the new tail.
            
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // this.print();
    }

    prepend(value){
        let newNode = new Node(value);

        // If the head is empty, that means the list is empty, so make the new node as both head & tail.

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {

            // If there is a head, we have to make the new node as the new head
            // Then make the new node point to the old head too.

            newNode.next = this.head;
            this.head = newNode;
        }
        // this.print();
    }

    search(value){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value == value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    print(){
        let currentNode = this.head,
        values=[];

        while(currentNode){
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(values);
    }

    delete(){

    }
}

let l = new LinkedList();



l.append("JavaScript");
l.append("Python");
l.append("Rust");
l.append("Go");

l.prepend("C");
l.prepend("C++");
l.prepend("Cobol");

console.log(l.search("Linux"));
console.log(l.search("Go"));