"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.isFull = function () {
        return Queue.capacity === this.size();
    };
    Queue.prototype.dequeue = function () {
        return this.container.shift();
    };
    Queue.prototype.enqueue = function (data) {
        if (this.isFull()) {
            console.log("Queue is full");
        }
        else {
            this.container.push(data);
        }
    };
    Queue.prototype.size = function () {
        return this.container.length;
    };
    Queue.capacity = 5;
    return Queue;
}());
exports.Queue = Queue;
