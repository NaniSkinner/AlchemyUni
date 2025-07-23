class Tree {
  constructor() {
    this.root = null;
  }

  addNode(node) {
    // If tree is empty, make this node the root
    if (this.root === null) {
      this.root = node;
      return;
    }

    // Helper function to recursively find the right spot
    this._insertNode(this.root, node);
  }

  _insertNode(currentNode, newNode) {
    // If new node's value is less than current node, go left
    if (newNode.data < currentNode.data) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this._insertNode(currentNode.left, newNode);
      }
    }
    // If new node's value is greater than current node, go right
    else if (newNode.data > currentNode.data) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this._insertNode(currentNode.right, newNode);
      }
    }
    // If values are equal, we could choose to ignore or handle duplicates
    // For now, we'll just ignore duplicates
  }
}

module.exports = Tree;
