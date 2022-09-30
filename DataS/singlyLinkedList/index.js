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
}

const list = new SinglyLinkedList()
list.push(23);
list.push(44);
list.push(38);