class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val)
        if (this.root) {
            let nodeVal = this.root
            while (true) {
                if (newNode.value > nodeVal.value) {
                    if (!nodeVal.right) {
                        nodeVal.right = newNode;
                        return this;
                    }
                    nodeVal = nodeVal.right;
                } else if (newNode.value < nodeVal.value) {
                    if (!nodeVal.left) {
                        nodeVal.left = newNode;
                        return this;
                    }
                    nodeVal = nodeVal.left;
                } else {
                    nodeVal.count++;
                    return this;
                }
            }
        } else {
            this.root = newNode;
            return this;
        }
    }
}

export { binarySearchTree }