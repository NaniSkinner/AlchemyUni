// class Transaction {
//   constructor(inputUTXOs, outputUTXOs) {
//     this.inputUTXOs = inputUTXOs;
//     this.outputUTXOs = outputUTXOs;
//   }

//   execute() {
//     // Check if any input UTXO is already spent
//     for (let i = 0; i < this.inputUTXOs.length; i++) {
//       const inputUTXO = this.inputUTXOs[i];

//       // If the UTXO is already spent, throw an error
//       if (inputUTXO.spent) {
//         throw new Error("Cannot spend an already spent TXO!");
//       }
//     }

//     // Calculate total input value
//     let totalInputValue = 0;
//     for (let i = 0; i < this.inputUTXOs.length; i++) {
//       totalInputValue += this.inputUTXOs[i].value;
//     }

//     // Calculate total output value
//     let totalOutputValue = 0;
//     for (let i = 0; i < this.outputUTXOs.length; i++) {
//       totalOutputValue += this.outputUTXOs[i].value;
//     }

//     // Check if inputs have enough value to cover outputs
//     if (totalInputValue < totalOutputValue) {
//       throw new Error("Not enough input value to cover output value!");
//     }
//   }
// }

// module.exports = Transaction;

class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputUTXOs = outputUTXOs;
  }
  execute() {
    const anySpent = this.inputUTXOs.some((x) => x.spent);
    if (anySpent) {
      throw new Error("Cannot include a spent UTXO");
    }

    const inputAmount = this.inputUTXOs.reduce((p, c) => {
      return p + c.amount;
    }, 0);
    const outputAmount = this.outputUTXOs.reduce((p, c) => {
      return p + c.amount;
    }, 0);
    if (inputAmount < outputAmount) {
      throw new Error("Not enough here");
    }

    // 🎉 SUCCESS! Mark all input UTXOs as spent
    this.inputUTXOs.forEach((utxo) => {
      utxo.spent = true;
    });

    // Calculate the fee: inputs - outputs
    this.fee = inputAmount - outputAmount;
  }
}

module.exports = Transaction;
