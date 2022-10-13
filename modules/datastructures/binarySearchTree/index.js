import Queue from "../queue/index.js";

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
    find(val) {
        if (this.root && val != undefined) {
            let nodeVal = this.root
            while (true) {
                if (val > nodeVal.value) {
                    if (!nodeVal.right) {
                        return false;
                    }
                    nodeVal = nodeVal.right;
                } else if (val < nodeVal.value) {
                    if (!nodeVal.left) {
                        return false;
                    }
                    nodeVal = nodeVal.left;
                } else {
                    return nodeVal;
                }
            }
        } else {
            return false;
        }
    }
    breadthFirstSearch() {
        if (!this.root) return false;
        var node = this.root,
            data = [],
            queue = new Queue();
        queue.enqueue(node)
        while (queue.length) {
            node = queue.dequeue()
            data.push(node.value);
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right)
        }
        return data;
    }
}

export { binarySearchTree }