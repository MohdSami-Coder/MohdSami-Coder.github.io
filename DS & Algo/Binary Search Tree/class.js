class Node {

    constructor(value=null) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value;
    }

    // Utility Functions

    // Sets the value of the current node
    setValue(value) {
        this.value = value;
    }

    setLeft(node) {
        // If there is a left node, remove its parent first

        if(this.left) {
            this.left.parent = null;
        }

        this.left = node;

        // Make the current node the new parent for the new left
        if(this.left) {
            this.left.parent = this;
        }

    }

    setRight(node) {
        // If there is a right node, remove its parent first
        if(this.right) {
            this.right.parent = null;
        }

        this.right = node;

        // Make the current node the new parent for the new right
        if(this.right) {
            this.right.parent = this;
        }

    }

    removeChild(nodeToRemove) {

        if(this.left && this.left.value === nodeToRemove.value) {
            this.left = null;
            return true;
        }

        if(this.right && this.right.value === nodeToRemove.value) {
            this.right = null;
            return true;
        }

        return false;
    }

    replaceChild(nodeToReplace, replacementNode) {
        if(!nodeToReplace || !replacementNode) { return false; }

        if(this.left && this.left.value === nodeToReplace.value) {
            this.left = replacementNode;
            return true;
        }

        if(this.right && this.right.value === nodeToReplace.value) {
            this.right = replacementNode;
            return true;
        }

        return false;

    }

    static copyNode(source, target) {
        target.setValue(source.value);
        target.setLeft(source.left);
        target.setRight(source.right);
    }

    // BST Functions

    insert(value) {

        // If there is no root node, insert the value as root node and return
        if(!this.value) {
            this.value = value;
            return;
        }

        // Inserting to the left for values less than the current value
        if(value <= this.value) {

            // If a value exists on the left, call that values insert.
            // This way of recursive calling of left.insert will take us to the
            // next vacant spot.
            if(this.left) {
                return this.left.insert(value);
            } else {
                this.left = new Node(value);
                this.left.parent = this;
            }

        // Inserting to the right for the values greater than the current value
        } else {

            // If a value exists on the left, call that values insert.
            // This way of recursive calling of left.insert will take us to the
            // next vacant spot.
            if(this.right) {
                return this.right.insert(value);
            } else {
                this.right = new Node(value);
                this.right.parent = this;
            }

        }

    }

    find(value) {

        // First, check if the value is the current/root value
        if(this.value === value) {
            return this;
        }

        // If it is not the case, see which portion of the BST the value could contain
        if(value < this.value && this.left) {
            return this.left.find(value);
        }

        // or else if the value is greater, look through the right nodes
        if(value > this.value && this.right) {
            return this.right.find(value);
        }

        // of if we reach here, then that means that the value is not in the BST
        return null;

    }

    findMin() {

        if(!this.left) {
            return this;
        }

        return this.left.findMin();

    }

    remove(value) {
        let nodeToRemove = this.find(value);

        if(!nodeToRemove) {return null;}

        // Get the parent of the node to be removed.
        let parent = nodeToRemove.parent;

        // First check if the node is a leaf (without children)
        if(!nodeToRemove.left && !nodeToRemove.right) {

            // If there is a parent, we will call the remove child of that parent to remove the node.
            if(parent) {
                parent.removeChild(nodeToRemove);
            } else {
                // if there is no parent or no child, that meants it the root node we have to delete.
                // we will then simply set its value as null
                // REMEMBER to not set the entire root node as null
                nodeToRemove.value = null;
            } 

        // Check if the node has both two children
        } else if(nodeToRemove.left && nodeToRemove.right) {

            // When the node has two childrent, find the min value amon them and replace the current node with that value
            let nextNode = nodeToRemove.findMin();

            if(nextNode !== nodeToRemove.right) {
                this.remove(nextNode.value);
                nodeToRemove.setValue(nextNode.value);
            } else {
                nodeToRemove.setValue(nodeToRemove.right.value);
                nodeToRemove.setRight(nodeToRemove.right.right);
            }

        // Node has only one child
        } else {

            // Find the only child
            let childNode = nodeToRemove.left || nodeToRemove.right;

            if(parent) {
                parent.replaceChild(nodeToRemove, childNode);
            } else {
                Node.copyNode(childNode, nodeToRemove);
            }
        }

        nodeToRemove.parent = null;

        return true;

    }

    printInOrder() {

        if(this.left) {
            this.left.printInOrder();
        }

        console.log(this.value);

        if(this.right) {
            this.right.printInOrder();
        }

    }

}


class BinarySearchTree {
    constructor() {
        this.root = new Node();
    }

    insert(value) {
        this.root.insert(value);
    }

    find(value) {
        return this.root.find(value);
    }

    findMin() {
        return this.root.findMin();
    }

    remove(value) {
        return this.root.remove(value);
    }

    printInOrder() {
        this.root.printInOrder();
    }
}


let tree = new BinarySearchTree();

tree.insert(100);
tree.insert(150);
tree.insert(50);
tree.insert(145);
tree.insert(40);
tree.insert(80);
tree.printInOrder();

console.log("Removing 50");
tree.remove(50);
tree.printInOrder();