export class Stack<T> {
    container: T[] = [];

    constructor() {
    }

    push(data:T) : void {
        this.container.push(data)
    }

    size() :number {
        return this.container.length
    }

    pop() : T {
        return this.container.pop()
    }

    split () : string[] {
        return this.container.toString().split('')
    }
}