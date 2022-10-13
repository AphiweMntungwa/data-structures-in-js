import { DoublyLinkedList } from "./modules/datastructures/doublyLinkedList/index.js";
import { SinglyLinkedList } from "./modules/datastructures/singlyLinkedList/index.js";
import { Stack } from "./modules/datastructures/stack/index.js";
import Queue from "./modules/datastructures/queue/index.js"
import { binarySearchTree } from "./modules/datastructures/binarySearchTree/index.js"



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