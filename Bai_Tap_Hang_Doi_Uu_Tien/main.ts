import {Patient} from "./Patient";

let patient = new Patient()

patient.enqueue("An", 4)
patient.enqueue("Dung", 3)
patient.enqueue("Kec", 40)
patient.enqueue("Binh", 1)
patient.enqueue("Tuan", 2)
patient.enqueue("Huy", 3)

console.log(patient)
console.log(patient.dequeue())
console.log(patient)
console.log(patient.dequeue())
console.log(patient)

