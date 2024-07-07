class single {
    name = 'single'
    static instance = null
    static getInstance() {
        if (!this.instance) {
            this.instance = new single();
        }
        return this.instance;
    }
}
let a = single.getInstance();
let b = single.getInstance();
console.log(a);
