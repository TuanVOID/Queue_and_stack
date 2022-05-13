import {IQueue} from "./IQueue";

export class Queue implements IQueue{
    container: number[] =[]
    static capacity : number = 5;

    constructor() {
    }

    isFull():boolean {
        return Queue.capacity === this.size()
    }

    dequeue(): any {
        return this.container.shift()
    }

    enqueue(data: any): void {
        if ( this.isFull()) {
            console.log(`Queue is full`)
        } else {
            this.container.push(data)
        }
    }

    size () :number {
        return this.container.length
    }
}