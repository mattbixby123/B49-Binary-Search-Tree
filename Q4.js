function createNode(value) {
  return {
      value: value,
      left: null,
      right: null
  };
}

function searchBottomLeftValue(root) {
  if (root === null) {
      return null;
  }

  let queue = [root];
  let currentNode = null;

  while (queue.length > 0) {
      currentNode = queue.shift();

      // Enqueue right child first, so leftmost node is processed last
      if (currentNode.right !== null) {
          queue.push(currentNode.right);
      }
      if (currentNode.left !== null) {
          queue.push(currentNode.left);
      }
  }

  return currentNode.value;
}

// Creating the binary tree with nodes containing values [2, 1, 3, 4, 5, 6]
// The structure of the tree will be:
//        2
//       / \
//      1   3
//     / \   \
//    4   5   6

let root = createNode(2);
root.left = createNode(1);
root.right = createNode(3);
root.left.left = createNode(4);
root.left.right = createNode(5);
root.right.right = createNode(6);

// Testing the searchBottomLeftValue function
console.log("The leftmost value in the last row of the binary tree is:", searchBottomLeftValue(root)); // Expected output: 6
