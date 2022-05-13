"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = require("./Queue");
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
var queue = new Queue_1.Queue();
stack.push("able was I ere I saw elb");
queue.enqueue("able was I ere I saw elba");
// console.log(stack.split())
//
// let arr1 = [...stack.container]
// let arr2 = [...queue.container]
//
// console.log(arr1)
// console.log(arr2)
function checkSymmetry() {
    for (var i = 0; i < stack.container.length; i++) {
        if (stack.pop() !== queue.dequeue()) {
            return "khong doi xung";
        }
    }
    return "Doi xung";
}
console.log(checkSymmetry());
