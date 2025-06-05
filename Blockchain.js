const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [new Block()];
  }

  addBlock(block) {
    block.previousHash = this.chain[this.chain.length - 1].toHash();
    this.chain.push(block);
  }

  isValid() {
    // Start from index 1 as block 0 is genesis block with no previous block
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      // Check if the previousHash matches the actual hash of the previous block
      if (
        currentBlock.previousHash.toString() !==
        previousBlock.toHash().toString()
      ) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;
