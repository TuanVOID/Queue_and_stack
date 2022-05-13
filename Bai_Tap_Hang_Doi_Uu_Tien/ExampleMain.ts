import {IPriorityQueue} from "./ExampleIPriority";
import {PriorityQueue} from "./ExamplePriority";

let num = new PriorityQueue()

num.enqueue("huy",2)
num.enqueue("An",5)
num.enqueue("dung", 19)
num.enqueue("Tuan", 2)


console.log(num.data[0])