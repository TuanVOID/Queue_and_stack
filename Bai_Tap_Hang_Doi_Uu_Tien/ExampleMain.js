"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExamplePriority_1 = require("./ExamplePriority");
var num = new ExamplePriority_1.PriorityQueue();
num.enqueue("huy", 2);
num.enqueue("An", 5);
num.enqueue("dung", 19);
num.enqueue("Tuan", 2);
console.log(num.data[0]);
