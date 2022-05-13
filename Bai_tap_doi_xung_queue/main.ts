import {Queue} from "./Queue";
import {Stack} from "./Stack";

let stack = new Stack();
let queue = new Queue()

stack.push("able was I ere I saw elb")
queue.enqueue("able was I ere I saw elba")

// console.log(stack.split())
//
// let arr1 = [...stack.container]
// let arr2 = [...queue.container]
//
// console.log(arr1)
// console.log(arr2)

function checkSymmetry() {
    for (let i = 0; i < stack.container.length; i++) {
        if (stack.pop() !== queue.dequeue()) {
            return "khong doi xung"
        }
    } return "Doi xung"
}

console.log(checkSymmetry());


