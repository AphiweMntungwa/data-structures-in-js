import Queue from "../queue/index.js";
import Stack from "../stack/index.js";

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
    depthFirstSearchPreOrder() {
        if (!this.root) return false;
        var node = this.root,
            data = [],
            stack = new Stack();
        stack.push(node)
        while (stack.length) {
            node = stack.pop()
            data.push(node.value);
            if (node.right) stack.push(node.right)
            if (node.left) stack.push(node.left);
        }
        return data;
    }
    depthFirstSearchPreOrderAlt() {
        if (!this.root) return false;
        var current = this.root,
            data = [];
        helperDFS(current)

        function helperDFS(node) {
            data.push(node.value);
            if (node.left) helperDFS(node.left);
            if (node.right) helperDFS(node.right)
        }
        return data;
    }
}

export { binarySearchTree }