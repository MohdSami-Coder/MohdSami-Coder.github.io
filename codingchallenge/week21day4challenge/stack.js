class Stack{

    constructor(){
        this.array = [];
    }

    push(value){
        this.array.push(value);
    }

    pop(){
        this.array.pop();    
    }

    print(){
        console.log(this.array);
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();

stack.pop();
stack.print();