function createNode(value) {
  return {
      value: value,
      left: null,
      right: null
  };
}

function isSameTree(p, q) {
  if (p === null && q === null) {
      return true;
  }
  if (p === null || q === null) {
      return false;
  }
  return (p.value === q.value) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Creating the first binary tree with nodes containing values [1, 2, 3]
let tree1 = createNode(1);
tree1.left = createNode(2);
tree1.right = createNode(3);

// Creating the second binary tree with nodes containing values [1, 2, 3]
let tree2 = createNode(1);
tree2.left = createNode(2);
tree2.right = createNode(3);

// Testing the isSameTree function
console.log("Comparing tree1 and tree2:", isSameTree(tree1, tree2)); // Expected output: true

// Creating a different binary tree with nodes containing values [1, 2, 4]
let tree3 = createNode(1);
tree3.left = createNode(2);
tree3.right = createNode(4);

// Testing the isSameTree function with a different tree
console.log("Comparing tree1 and tree3:", isSameTree(tree1, tree3)); // Expected output: false
