class EventEmitter{
    events = {}
    on(event,fn){
        if(!this.events[event]){
            this.events[event] = []
        }
        this.events[event].push(fn)
    }
    emit(event,data){
        this.events[event].forEach(callback =>callback(data))
    }
    remove(event){
        delete this.events[event]
    }
}
let emitter = new EventEmitter()
emitter.on('click',function(data){
    console.log(data)
})
emitter.emit('click','hello')

let arr =  {1:1,2:2}
delete arr[1]
console.log(arr)