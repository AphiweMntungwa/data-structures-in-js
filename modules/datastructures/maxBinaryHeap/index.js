export default class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        if (this.values.length === 0) return this.values.push(val);
        this.values.push(val);
        let index = this.values.length - 1
        let parent = Math.floor((index - 1) / 2)
        const bubbleUp = (val) => {
            if (this.values[parent] < val) {
                [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]]
                index = parent;
                parent = Math.floor((index - 1) / 2);
                bubbleUp(val);
            }
        }
        bubbleUp(val);
        return this;
    }
    bubbleDown(parent, leftChild, rightChild, arr = this.values) {
        if (arr[parent] < arr[leftChild] || arr[parent] < arr[rightChild]) {
            if (arr[rightChild] === undefined) {
                [this.values[parent], this.values[leftChild]] = [this.values[leftChild], this.values[parent]];
            } else if (arr[leftChild] === undefined) {
                [this.values[parent], this.values[rightChild]] = [this.values[rightChild], this.values[parent]];
            } else if (arr[leftChild] !== arr[rightChild]) {
                if (arr[leftChild] > arr[rightChild]) {
                    [this.values[parent], this.values[leftChild]] = [this.values[leftChild], this.values[parent]];
                    parent = leftChild;
                } else if (arr[leftChild] < arr[rightChild]) {
                    [this.values[parent], this.values[rightChild]] = [this.values[rightChild], this.values[parent]];
                    parent = rightChild;
                }
                leftChild = 2 * parent + 1;
                rightChild = 2 * parent + 2;
                this.bubbleDown(parent, leftChild, rightChild);
            }
        }
    }
    extractMax() {
        if (this.values.length === 1) return this.values.pop();
        let parent = 0;
        [this.values[parent], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[parent]];
        let leftChild = 2 * parent + 1;
        let rightChild = 2 * parent + 2;
        let max = this.values.pop();
        this.bubbleDown(parent, leftChild, rightChild);
        return max;
    }
}