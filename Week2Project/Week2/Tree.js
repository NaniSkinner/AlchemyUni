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

  hasNode(data) {
    // If tree is empty, the node doesn't exist
    if (this.root === null) {
      return false;
    }

    // Use helper function to search recursively
    return this._searchNode(this.root, data);
  }

  _searchNode(currentNode, targetData) {
    // If we've reached a null node, the data doesn't exist
    if (currentNode === null) {
      return false;
    }

    // If we found the data, return true
    if (currentNode.data === targetData) {
      return true;
    }

    // If target is less than current node, search left
    if (targetData < currentNode.data) {
      return this._searchNode(currentNode.left, targetData);
    }
    // If target is greater than current node, search right
    else {
      return this._searchNode(currentNode.right, targetData);
    }
  }
}

module.exports = Tree;
