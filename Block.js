const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(data) {
    this.data = data;
  }
  toHash() {
    return SHA256(this.data + this.previousHash); // hashing the data stored on this.data
  }
}

module.exports = Block;
