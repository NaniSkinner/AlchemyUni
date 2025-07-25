class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }

  getRoot() {
    // For this stage: simple case of exactly 2 leaves
    const leftLeaf = this.leaves[0];
    const rightLeaf = this.leaves[1];

    // Use the concat function to combine the two leaves
    return this.concat(leftLeaf, rightLeaf);
  }
}

module.exports = MerkleTree;
