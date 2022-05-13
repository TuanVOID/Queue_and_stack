export class Patient<T> {
    data: [number, T][] = []

    constructor() {

    }

    enqueue(item:T, code:number) :void {
        this.data.push([code,item])
        this.data.sort((a, b) => {
            if (b > a){
                return -1;
            }
            else {
                return 0;
            }
        })
    }

    dequeue() : any {
        if (this.isEmpty()) {
            return null;
        } else {
            let patientOut = this.data[0]
            this.data.splice(0,1)
            return patientOut;
        }
    }

    size() : number {
        return this.data.length
    }

    isEmpty() : boolean {
        return this.data.length === 0;
    }
}