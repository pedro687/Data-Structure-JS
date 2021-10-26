class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    get(index) {
        return this.data[index]
    }

    shiftItem(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1]
        }

       delete this.data[this.length-1]
        this.length--
        return this.length
    }
}

const arr = new MyArray();
arr.push("Tomato")
arr.push("Banana")
arr.push("Apple")
arr.shiftItem(1);

console.log(arr)