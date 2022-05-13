import {Queue} from "./Queue";

let queue = new Queue<number>()

queue.enqueue(500)
queue.enqueue("abc")

console.log(queue)