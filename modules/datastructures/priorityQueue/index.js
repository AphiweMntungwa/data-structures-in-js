class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority
    }
}
export default class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        if (this.values.length === 0) {
            this.values.push(newNode);
            return this;
        }
        this.values.push(newNode);
        let index = this.values.length - 1
        let parent = Math.floor((index - 1) / 2)

        const bubbleUp = (priority) => {
            if (this.values[parent].priority < priority) {
                [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]]
                index = parent;
                parent = Math.floor((index - 1) / 2);
                this.values[parent] && bubbleUp(priority);
            }
        }
        bubbleUp(priority);
        return this;
    }
    bubbleDown(parent, leftChild, rightChild, arr = this.values) {
        if (arr[leftChild] && arr[parent].priority < arr[leftChild].priority) {
            if (arr[rightChild] === undefined)[arr[parent], arr[leftChild]] = [arr[leftChild], arr[parent]];
            else {
                if (arr[leftChild].priority >= arr[rightChild].priority) {
                    [arr[parent], arr[leftChild]] = [arr[leftChild], arr[parent]]
                } else if (arr[leftChild].priority < arr[rightChild].priority) {
                    [arr[parent], arr[rightChild]] = [arr[rightChild], arr[parent]];
                }
                parent = leftChild
                leftChild = 2 * parent + 1;
                rightChild = 2 * parent + 2;
                this.bubbleDown(parent, leftChild, rightChild);
            }
        } else if (arr[rightChild] && arr[parent].priority < arr[rightChild].priority) {
            if (arr[leftChild] === undefined)[arr[parent], arr[rightChild]] = [arr[rightChild], arr[parent]];
            else {
                if (arr[leftChild].priority >= arr[rightChild].priority) {
                    [arr[parent], arr[leftChild]] = [arr[leftChild], arr[parent]]
                } else if (arr[leftChild].priority < arr[rightChild].priority) {
                    [arr[parent], arr[rightChild]] = [arr[rightChild], arr[parent]];
                }
                parent = rightChild
                leftChild = 2 * parent + 1;
                rightChild = 2 * parent + 2;
                this.bubbleDown(parent, leftChild, rightChild);
            }
        }
    }
    dequeue() {
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) return this.values.pop().value;
        let parent = 0;
        [this.values[parent], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[parent]];
        let leftChild = 2 * parent + 1;
        let rightChild = 2 * parent + 2;
        let max = this.values.pop();
        this.bubbleDown(parent, leftChild, rightChild);
        return max.value;
    }
}