export class Queue {
    container: any[] = [];
    constructor() {
    }

    enqueue(data:any):void {
        this.container.push(data)
    }

    dequeue():string {
        return this.container.shift()
    }

    size() : number {
        return this.container.length
    }

}