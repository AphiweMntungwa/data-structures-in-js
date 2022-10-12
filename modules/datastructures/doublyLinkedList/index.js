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
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter, currentNode;
        if (index >= this.length / 2) {
            counter = this.length - 1;
            currentNode = this.tail;
            while (currentNode) {
                if (counter === index) return currentNode;
                counter--
                currentNode = currentNode.prev;
            }
        } else {
            counter = 0;
            currentNode = this.head;
            while (currentNode) {
                if (counter === index) return currentNode;
                counter++
                currentNode = currentNode.next;
            }
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
        if (index < 0 || index > this.length || value === undefined) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value)
        let newNode = new Node(value);
        let nodeBefore = this.get(index - 1);
        let nodeAfter = nodeBefore.next;
        newNode.next = nodeAfter;
        newNode.prev = nodeBefore;
        nodeBefore.next = newNode;
        nodeAfter.prev = newNode;
        this.length++
            return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift()
        const removedNode = this.get(index)
        removedNode.next.prev = removedNode.prev;
        removedNode.prev.next = removedNode.next;
        removedNode.prev = null;
        removedNode.next = null;
        this.length--;
        return removedNode;;;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail
        this.tail = node;
        let prev = null;
        var next;
        var previous;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            previous = node.next
            node.next = prev;
            node.prev = previous;
            prev = node;
            node = next;
        }
        return this;
    }
}

export { DoublyLinkedList };