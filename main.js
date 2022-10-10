import { DoublyLinkedList } from "./modules/DataS/doublyLinkedList/index.js";
import { SinglyLinkedList } from "./modules/DataS/singlyLinkedList/index.js";

console.log('doublyLinkedList');


let list = new DoublyLinkedList();
//list.push({ name: 'Aphiwe', lastName: 'Mntungwa' }) //0
// list.push(1) //1
// list.push(11) //2
// list.push(110) //3
// list.push('hello') //4
// list.push('good') //5
// list.push('sir') //6
list.push(1) //7
list.push(2) //7
list.push(3) //7
    //list.push('good') //8
window.list = list;