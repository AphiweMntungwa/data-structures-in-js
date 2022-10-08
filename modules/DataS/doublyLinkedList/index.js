class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (this.head) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
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
        let deleted = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail.prev.next = null;
            this.tail = this.tail.prev
            deleted.prev = null;
        }
        this.length--
            return deleted;
    }
    shift() {
        if (!this.head) return undefined;
        const currentHead = this.head;
        if (this.length === 1) {
            this.tail = null
            this.head = null;
        } else {
            const { next } = currentHead;
            next.prev = null;
            this.head = next;
        }
        currentHead.next = null;
        this.length--
            return currentHead;
    }
}

export { DoublyLinkedList };