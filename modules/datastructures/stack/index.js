class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.length;
    }
    pop() {
        if (!this.first) return undefined;
        const currentHead = this.first;
        if (!currentHead.next) {
            this.first = null
            this.last = null;
        } else {
            const { next } = currentHead;
            this.first = next;
        }
        this.length--;
        return currentHead.value;
    }
    toArr() {
        let arr = []
        let node = this.first
        for (let i = 0; i < this.length; i++) {
            arr.push(node);
            node = node.next;
        }
        return arr;
    }
}

export default Stack;