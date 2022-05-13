"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
    }
    Stack.prototype.push = function (data) {
        this.container.push(data);
    };
    Stack.prototype.size = function () {
        return this.container.length;
    };
    Stack.prototype.pop = function () {
        return this.container.pop();
    };
    Stack.prototype.split = function () {
        return this.container.toString().split('');
    };
    return Stack;
}());
exports.Stack = Stack;
