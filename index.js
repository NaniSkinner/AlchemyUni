const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// Array of colors to check against
const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "brown",
];

function findColor(hash) {
  return COLORS.find((x) => toHex(sha256(utf8ToBytes(x))) === toHex(hash));
}

module.exports = findColor;

// Find the color that created the hash

// Public Key Cryptography - Hash Message
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
  // Step 1: Convert the string message to an array of UTF-8 bytes
  const messageBytes = utf8ToBytes(message);

  // Step 2: Hash the bytes using keccak256 and return the result
  return keccak256(messageBytes);
}

module.exports = hashMessage;

// turn this into an array of bytes, the expected format for the hash algorithm
const bytes = utf8ToBytes("Vote Yes on Proposal 327");
// hash the message using keccak256
const hash = keccak256(bytes);

console.log(toHex(hash)); // 928c3f25193b338b89d5646bebbfa2436c5daa1d189f9c565079dcae379a43be

// Public Key Cryptography - Signing Messages

const secp = require("ethereum-cryptography/secp256k1");
// Step #1 - Hash it using the hasMessage function
const hashMessage = require("./hashMessage");

const PRIVATE_KEY =
  "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
  // Step 1: Hash the message
  const messageHash = hashMessage(msg);

  // Step 2: Sign the hash with the private key and include recovery bit
  return secp.sign(messageHash, PRIVATE_KEY, { recovered: true });
}

module.exports = signMessage;

//Recover Key from Signature

const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(msg, signature, recoveryBit) {
  // Step 1: Hash the message (just like we did when signing)
  const messageHash = hashMessage(msg);

  // Step 2: Use the recovery method to find the public key
  return secp.recoverPublicKey(messageHash, signature, recoveryBit);
}

module.exports = recoverKey;

//Get Ethereum Address from Public Key
const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  // Step 1: Take the first byte off the public key (it's just a format indicator)
  const slicedKey = publicKey.slice(1);

  // Step 2: Hash the remaining bytes with keccak256
  const hashedKey = keccak256(slicedKey); // containes the x and y coordinated of the elliptic curve that represents the public key

  // Step 3: Take the last 20 bytes of the hash (Ethereum addresses are 20 bytes)
  // To get the last 20 bytes, we slice from byte 12 to the end
  // (since keccak256 produces 32 bytes, and 32 - 20 = 12)
  return hashedKey.slice(-20);
}

module.exports = getAddress;

//MEMPOOL - GOAL: ADD TRANSACTIONS

const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // Add the transaction to the mempool array
  mempool.push(transaction);
}

function mine() {
  // Create a new block with an id property
  // The id is set to the current block height (length of blocks array)
  const block = {
    id: blocks.length,
  };

  // Step 1: Convert the block to a string using JSON.stringify
  const blockString = JSON.stringify(block);

  // Step 2: Create a SHA256 hash of the stringified block
  const hash = SHA256(blockString).toString();

  // Step 3: Add the hash to the block object
  block.hash = hash;

  // Add the new block to the blocks array
  blocks.push(block);

  // Return the newly created block
  return block;
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};

//MINE BLOCK

const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  mempool.push(transaction);
}

function mine() {
  // Create a new block with an id property
  // The id is set to the current block height (length of blocks array)
  const block = {
    id: blocks.length,
  };

  // Step 1: Convert the block to a string using JSON.stringify
  const blockString = JSON.stringify(block);

  // Step 2: Create a SHA256 hash of the stringified block
  const hash = SHA256(blockString).toString();

  // Step 3: Add the hash to the block object
  block.hash = hash;

  // Add the new block to the blocks array
  blocks.push(block);

  // Return the newly created block
  return block;
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};

//Block Hash

const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  mempool.push(transaction);
}

function mine() {
  // Create a new block with an id property
  // The id is set to the current block height (length of blocks array)
  const block = {
    id: blocks.length,
  };

  // Step 1: Convert the block to a string using JSON.stringify
  const blockString = JSON.stringify(block);

  // Step 2: Create a SHA256 hash of the stringified block
  const hash = SHA256(blockString).toString();

  // Step 3: Add the hash to the block object
  block.hash = hash;

  // Add the new block to the blocks array
  blocks.push(block);

  // Return the newly created block
  return block;
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
