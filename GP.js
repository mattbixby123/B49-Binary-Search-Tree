add(data) ;{ 
  const newNode = new Node(data);
  if(!this.head) { 
      this.head = newNode;
  } 
  else {
       let current = this.head; 
       while(current.next) {
            current = current.next;
       }
       current.next = newNode;
  } 
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

addNode(data) ;{
  const newNode = new Node(data);
  if (!this.root) {
  this.root = newNode;
  }
}

// class Node {
//     constructor(val) {
//             this.key = val;
//             this.left = null;
//             this.right = null;
//      }

//      var root = new Node('A'); // Use string values 'A', 'B', etc.
//      root.left = new Node('B');
//      root.right = new Node('C');
//      root.left.left = new Node('D');
     
//      console.log(root);
//     }

//issues with line 37, not sure how to get this to work from the guided practice