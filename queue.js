 class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(item){
        this.items.push(item);
    }
    dequeue(){
       return this.items.shift();
    }
    peek(){
        return this.items[0];
    }
    getSize(){
        return this.items.length;
    }
    isEmpty(){
        return this.getSize() === 0;
    }
}
const car = new Queue();

car.enqueue("honda");
car.enqueue("toyota");
car.enqueue("suzuki");

console.log(car);
console.log(car.dequeue());
console.log(car);
console.log(car.peek());
