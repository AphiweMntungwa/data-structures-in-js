import { DoublyLinkedList } from "./modules/DataS/doublyLinkedList/index.js";
import { SinglyLinkedList } from "./modules/DataS/singlyLinkedList/index.js";

console.log('doublyLinkedList');


let list = new DoublyLinkedList();
list.push({ name: 'Aphiwe', lastName: 'Mntungwa' })
list.push(1)
list.push(11)
list.push(110)
window.list = list;