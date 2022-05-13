import {Stack} from "./Stack";

let stack = new Stack<any>()

stack.push("abc")
stack.push("xyz")
stack.push(123)
stack.push(true)
stack.push(false)
stack.pop()

console.log(stack.container)
console.log(stack.size())