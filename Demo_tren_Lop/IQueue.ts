export interface IQueue {
    enqueue(data:any) :void;
    dequeue() :any;
}