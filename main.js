import { DoublyLinkedList } from "./modules/datastructures/doublyLinkedList/index.js";
import { SinglyLinkedList } from "./modules/datastructures/singlyLinkedList/index.js";
import Queue from "./modules/datastructures/queue/index.js"
import { binarySearchTree } from "./modules/datastructures/binarySearchTree/index.js"
import MaxBinaryHeap from "./modules/datastructures/maxBinaryHeap/index.js";
import HashTable from "./modules/datastructures/hash table/index.js";
import PriorityQueue from "./modules/datastructures/priorityQueue/index.js";
import quickSort from './modules/algorithms/sorting/quickSort.js'
import mergeSort from './modules/algorithms/sorting/mergeSort.js'
import selectionSort from './modules/algorithms/sorting/selectionSort.js'
import bubbleSort from './modules/algorithms/sorting/bubbleSort.js'
import insertionSort from './modules/algorithms/sorting/insertionSort.js'
import radixSort from "./modules/algorithms/sorting/radixSort.js";

let heap = new PriorityQueue()
window.heap = heap;
let hashed = new HashTable();
window.hashed = hashed
window.HashTable = HashTable

hashed.set("name", "Aphiwe")
hashed.set("age", 22)
hashed.set("gender", "Male")
hashed.set("kills", 43)
hashed.set("experience", 4)
hashed.set("lastTested", Date(Date.now()).slice(0, 15))

heap.enqueue("headache", 0)
heap.enqueue("common fever", 0)
heap.enqueue("Blood pressure checkup", 0)
heap.enqueue("Minor bleeding", 1)
heap.enqueue("Leg injury", 1)
heap.enqueue("GunShot wound", 5)
heap.enqueue("pregnancy into labour", 4)
heap.enqueue("Minor accidents", 3)

let arr = []
for (const one in heap.values) {
    arr.push(heap.values[one].priority)
}
console.log(arr)

const div = document.querySelector(".block");
const button = document.querySelectorAll("button");
const input = document.querySelector("input");
const select = document.querySelector('select');

let inputCarrier = 20
let selectCarrier = 'quicksort'

const divArr = (length) => Array.from({ length }, () => Math.floor(Math.random() * 2000));
let first = divArr(inputCarrier);
div.textContent = `[${first}]`;
button[0].addEventListener('click', () => {
    switch (selectCarrier) {
        case 'quicksort':
            quickSort(first);
            break;
        case 'mergesort':
            first = mergeSort(first);
            break;
        case 'selectionsort':
            first = selectionSort(first);
            break;
        case 'bubblesort':
            first = bubbleSort(first)
            break;
        case 'insertionsort':
            first = insertionSort(first)
            break;
        case 'radixsort':
            first = radixSort(first)
            break;
        default:
            break;
    }

    div.textContent = `[${first}]`;
})

button[1].addEventListener('click', () => {
    first = divArr(inputCarrier)
    div.textContent = `[${first}]`;
})

input.addEventListener("change", (e) => {
    inputCarrier = e.target.value;
})
select.addEventListener("change", (e) => {
    selectCarrier = e.target.value
})