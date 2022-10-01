class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = this.head;
        }
        this.length++
            return this;
    }
    pop() {
        if (!this.head) return undefined;
        let nextNode = this.head;
        let laggingval = nextNode;
        while (nextNode.next) {
            laggingval = nextNode;
            nextNode = nextNode.next
        }
        this.tail = laggingval
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return nextNode;
    }
    shift() {
        if (!this.head) return undefined;
        const currentHead = this.head;
        if (!currentHead.next) {
            this.tail = null
            this.head = null;
        } else {
            const { next } = currentHead;
            this.head = next;
        }
        this.length--
            return currentHead;
    }
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let nextNode = this.head;
        while (nextNode) {
            if (counter === index) return nextNode;
            counter++
            nextNode = nextNode.next;
        }
    }
    set(index, value) {
        const nodeFromIdx = this.get(index)
        if (nodeFromIdx) {
            nodeFromIdx.val = value || nodeFromIdx.val;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value)
        let newNode = new Node(value);
        newNode.next = this.get(index);
        let nodeBefore = this.get(index - 1);
        nodeBefore.next = newNode;
        this.length++
            return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift()
        let prevNode = this.get(index - 1);
        let outgoingNode = prevNode.next;
        prevNode.next = this.get(index + 1) || null;
        this.length--;
        return outgoingNode;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail
        this.tail = node;
        let prev = null;
        var next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

const list = new SinglyLinkedList()
list.push(23);
list.push(44);
list.push(38);
list.push('fucoff');
list.push('manthiscrazy');
console.log(list)