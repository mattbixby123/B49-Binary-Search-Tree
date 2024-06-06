function createNode(value) {
  return {
      value: value,
      left: null,
      right: null
  };
}

function inorder(root) {
  if (root !== null) {
      inorder(root.left);
      console.log(root.value);
      inorder(root.right);
  }
}

// Creating the binary tree with nodes containing values [1, 2, 3, 4, 5]
// The structure of the tree will be:
//        1
//       / \
//      2   3
//     / \
//    4   5

let root = createNode(1);
root.left = createNode(2);
root.right = createNode(3);
root.left.left = createNode(4);
root.left.right = createNode(5);

// Testing the inorder function
console.log("Inorder traversal of the binary tree is:");
inorder(root);
// Expected output: 4 2 5 1 3
