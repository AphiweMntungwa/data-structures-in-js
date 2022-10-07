class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

export { DoublyLinkedList };