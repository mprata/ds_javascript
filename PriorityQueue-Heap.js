class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    insert(value, priority) {
        const newNode = new Node(value, priority);
        this.heap.push(newNode);
        let currentNodeIdx = this.heap.length - 1;
        let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
        while (this.heap[currentNodeParentIdx] && newNode.priority > this.heap[currentNodeParentIdx].priority) {
            const parent = this.heap[currentNodeParentIdx];
            this.heap[currentNodeParentIdx] = newNode;
            this.heap[currentNodeIdx] = parent;
            currentNodeIdx = currentNodeParentIdx;
            currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
        }
    }

    remove() {
        if (this.heap.length < 3) {
            const toReturn = this.heap.pop();
            this.heap[0] = null;
            return toReturn;
        }
        const toRemove = this.heap[1];
        this.heap[1] = this.heap.pop();
        let currentIdx = 1;
        let [left, right] = [2 * currentIdx, 2 * currentIdx + 1];
        let currentChildIdx = this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left;
        while (this.heap[currentChildIdx] && this.heap[currentIdx].priority <= this.heap[currentChildIdx].priority) {
            let currentNode = this.heap[currentIdx]
            let currentChildNode = this.heap[currentChildIdx];
            this.heap[currentChildIdx] = currentNode;
            this.heap[currentIdx] = currentChildNode;
        }
        return toRemove;
    }
}

let pq = new PriorityQueue();
pq.insert(1,1);
pq.insert(2,2);
pq.insert(3,3);
pq.insert(4,4);
pq.insert(5,5);
pq.insert(6,6);
pq.insert(7,7);
pq.insert(8,8);
pq.insert(9,9);
pq.insert(10,10);

for(let i = 0; i < pq.heap.length; i ++){
    
}