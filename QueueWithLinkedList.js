//const LinkedList = require("./LinkedList");
const LinkedListNode = require("./LinkedListNode");

class Queue {
    constructor(){
        this.front = this.rear = null;
    }

    enqueue(data){
        let oNode = new LinkedListNode(data);
        if(this.rear === null){
            this.front = this.rear = oNode;
            return;
        }
        this.rear.next = oNode;
        this.rear = oNode;
    }

    dequeue(){
        // If queue is empty, return NULL. 
        if (this.front == null) 
        return null; 

        // Store previous front and move front one node ahead 
        let temp = this.front; 
        this.front = this.front.next; 

        // If front becomes NULL, then change rear also as NULL 
        if (this.front == null) 
            this.rear = null; 
        return temp; 
    }
}