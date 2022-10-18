import { DoublyLinkedList } from "./modules/datastructures/doublyLinkedList/index.js";
import { SinglyLinkedList } from "./modules/datastructures/singlyLinkedList/index.js";
import Queue from "./modules/datastructures/queue/index.js"
import { binarySearchTree } from "./modules/datastructures/binarySearchTree/index.js"
import quickSort from './modules/algorithms/sorting/quickSort.js'



let bst = new binarySearchTree()
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
//bst.insert(21);
window.bst = bst;
let list = new Queue();
list.enqueue(1) //7
list.enqueue(2) //7
list.enqueue(3) //7
window.list = list;
console.log(bst);
const div = document.querySelector(".block");
const button = document.querySelectorAll("button");
const input = document.querySelector("input");
let inputCarrier = 20

const divArr = (length) => Array.from({ length }, () => Math.floor(Math.random() * 2000));
let first = divArr(inputCarrier);
div.textContent = `[${first}]`;
button[0].addEventListener('click', () => {
    quickSort(first);
    div.textContent = `[${first}]`;
})

button[1].addEventListener('click', () => {
    first = divArr(inputCarrier)
    div.textContent = `[${first}]`;
})

input.addEventListener("change", (e) => {
    inputCarrier = e.target.value;
})