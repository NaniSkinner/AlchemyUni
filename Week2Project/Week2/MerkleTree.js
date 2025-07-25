class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }

  getRoot() {
    // Handle base case: single leaf
    if (this.leaves.length === 1) {
      return this.leaves[0];
    }

    let currentLayer = this.leaves;

    // Keep combining layers until we have a single root
    while (currentLayer.length > 1) {
      const nextLayer = [];

      // Combine pairs in current layer
      for (let i = 0; i < currentLayer.length; i += 2) {
        const left = currentLayer[i];
        const right = currentLayer[i + 1];

        // If there's no right pair, carry the left element up unchanged
        if (right === undefined) {
          nextLayer.push(left);
        } else {
          // Combine the pair
          const combined = this.concat(left, right);
          nextLayer.push(combined);
        }
      }

      currentLayer = nextLayer;
    }

    return currentLayer[0];
  }
}

module.exports = MerkleTree;
