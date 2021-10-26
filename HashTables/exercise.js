class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }

        return hash
    }

    set(key, value) {
        const hash = this._hash(key)
        if (!this.data[hash]) {
            this.data[hash] = []
        }
 
        this.data[hash].push([key, value])
    }

    get(key) {
        const hash = this._hash(key)
        const bucket = this.data[hash]

        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] == key) {
                    return bucket[i][1]
                }
            }
        }

        return undefined
    }

    keys() {
        const keysArray = []
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }

        if (keysArray.length > 0) {
            return keysArray;
        }

        return undefined;
    }
}

const hashTable = new HashTable(50)
hashTable.set("apples", 54)
hashTable.set("grapes", 100)
hashTable.set("hape", 100)

console.log(hashTable.keys())