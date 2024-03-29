// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {

        this.elements = {};
        this.head = 0;
        this.tail = 0;

      }
      add(element) {

        this.elements[this.tail] = element;
        this.tail++;

      }
      remove() {

        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
        
      }
}

module.exports = Queue;
