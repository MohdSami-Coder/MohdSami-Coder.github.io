class Heap{
    constructor(compareFunction){
        this.array = [];
        this.compare = compareFunction;
    }

    add(item){
        this.array.push(item);

        this.heapifyUp();
    }

    find(item){
        for(let i = 0; i < this.array.length; i++){
            if(this.array[i] == item){
                return i;
            }
        }
        return -1;
    }

    remove(item){
        let indexToRemove = this.find(item);

        if(indexToRemove == -1){
            return null;
        }

        if(indexToRemove == this.array.length - 1){
            return this.array.pop();
        }

        this.array[indexToRemove] = this.array.pop();

        let parent = this.getParent(indexToRemove);

        if(this.hasLeftChild(indexToRemove) && (!parent || this.compare(parent, this.array[indexToRemove])) ){
            this.heapifyDown(indexToRemove);
        } else {
            this.heapifyUp(indexToRemove);
        }
    }

    heapifyUp(index){
        let currentIndex = index || this.array.length - 1;

        while( this.hasParent(currentIndex) && !this.compare(this.getParent(currentIndex), this.array[currentIndex]) ){
            
            this.swap( this.getParentIndex(currentIndex), this.array[currentIndex] );

            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    heapifyDown(index=0){
        let currentIndex = index;

        while( this.hasLeftChild(currentIndex) ){

            let smallestChildIndex = this.getLeftChildIndex(currentIndex);

            if( this.hasRightChild(currentIndex) && this.compare(this.getRightChild(currentIndex), this.getLeftChild(currentIndex)) ){
                smallestChildIndex = this.getRightChildIndex(currentIndex);
            }
            
            if( this.compare(this.array[currentIndex], this.array[smallestChildIndex]) ){
                break;
            } else {
                this.swap( currentIndex, smallestChildIndex )
            }
            currentIndex = smallestChildIndex;
        }
    }
    

    getLeftChildIndex(parentIndex){
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex(parentIndex){
        return (2 * parentIndex) + 2;
    }

    getParentIndex(childIndex){
        return Math.floor( (childIndex - 1) / 2);
    }

    getLeftChild(parentIndex){
        return this.array[ this.getLeftChildIndex(parentIndex) ];
    }

    getRightChild(parentIndex){
        return this.array[ this.getRightChildIndex(parentIndex) ];
    }

    getParent(childIndex){
        return this.array[ this.getParentIndex(childIndex) ];
    }

    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0;
    }

    hasLeftChild(parentIndex){
        return this.getLeftChildIndex(parentIndex) < this.array.length;
    }

    hasRightChild(parentIndex){
        return this.getRightChildIndex(parentIndex) < this.array.length;
    }


    s   wap(indexOne, indexTwo){
        let tmp = this.array[ indexOne ];
        this.array[ indexOne ] = this.array[ indexTwo ];
        this.array[ indexTwo ] = tmp;
    }

    print(){
        console.log(this.array);
    }
}


class PriorityQueue extends Heap{
    constructor(){
        let compare = function(a, b){
            return this.priorities[a] < this.priorities[b];
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

pq.add("Nadal", 3);
pq.add("Djokovic", 2);
pq.add("Federer", 1);
pq.add("Agassi", 7);
pq.add("Murray", 50);
pq.add("Samprass", 80);
pq.add("Williams", 4);

pq.print();
pq.changePriority("Federer", 2);
pq.changePriority("Djokovic", 1);

pq.print();