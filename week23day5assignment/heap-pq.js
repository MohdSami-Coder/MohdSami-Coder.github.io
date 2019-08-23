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
            
            this.swap( this.getParentIndex(currentIndex), currentIndex );

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


    swap(indexOne, indexTwo){
        let tmp = this.array[ indexOne ];
        this.array[ indexOne ] = this.array[ indexTwo ];
        this.array[ indexTwo ] = tmp;
    }

    print(){
        console.log(this.array);
    }
}

module.exports = Heap;