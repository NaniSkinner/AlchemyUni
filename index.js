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
