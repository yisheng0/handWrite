class Observer{
    constructor(name){
        this.name = name;
    }
    update(message) {
        console.log(`${this.name}被通知了,message:${message}`);
    }
}
class Sub{
    arr = []
    addObserver(observer) {
        this.arr.push(observer);
    }
    removeObserver(observer) {
        this.arr = this.arr.filter(item => item !== observer);
    }
    notify(message) {
        this.arr.forEach(item => item.update(message));
    }
}
let sub = new Sub();
let o1 = new Observer('o1');
let o2 = new Observer('o2');
sub.addObserver(o1);
sub.addObserver(o2);
sub.notify('hello');