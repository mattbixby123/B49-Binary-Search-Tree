function createNode(value) {
  return {
      value: value,
      left: null,
      right: null
  };
}

function countNodes(root) {
  if (root === null) {
      return 0;
  }

  let leftDepth = getDepth(root.left);
  let rightDepth = getDepth(root.right);

  if (leftDepth === rightDepth) {
      // The left subtree is a perfect binary tree
      return (1 << leftDepth) + countNodes(root.right);
  } else {
      // The right subtree is a perfect binary tree
      return (1 << rightDepth) + countNodes(root.left);
  }
}

function getDepth(node) {
  let depth = 0;
  while (node !== null) {
      depth++;
      node = node.left;
  }
  return depth;
}

// Creating the binary tree with nodes containing values [10, 11, 12, 13, 14, 15, 16]
// The structure of the tree will be:
//        10
//       /  \
//      11   12
//     / \   / \
//    13 14 15 16

let root = createNode(10);
root.left = createNode(11);
root.right = createNode(12);
root.left.left = createNode(13);
root.left.right = createNode(14);
root.right.left = createNode(15);
root.right.right = createNode(16);

// Testing the countNodes function
console.log("Total number of nodes in the binary tree:", countNodes(root)); // Expected output: 7
