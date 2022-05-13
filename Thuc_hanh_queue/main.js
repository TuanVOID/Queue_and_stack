"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = require("./Queue");
var queue = new Queue_1.Queue();
queue.enqueue(500);
queue.enqueue("abc");
console.log(queue);
