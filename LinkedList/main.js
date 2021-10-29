const myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    } 
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode
        this.tail = newNode  
        this.length += 1
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }

        newNode.next = this.head
        this.head = newNode;
        this.length++;
    }
}


const linkedList = new LinkedList(10);
linkedList.append(6)
linkedList.append(12)
linkedList.prepend(1)
console.log(linkedList)