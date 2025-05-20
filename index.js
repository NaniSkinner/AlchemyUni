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
