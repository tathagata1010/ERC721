require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config;
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
// const ALCHEMY_API_KEY = "jIvJuLNY2Cb58nskvTKr6TuJfXR17j8X";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
// const GOERLI_PRIVATE_KEY =
//   "9d8fb5f4af84e10f9fa269f89cac624bc094f1df53433fe1afb16ce3c77a67d2";

const {ALCHEMY_API_KEY , GOERLI_PRIVATE_KEY}=process.env;

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat:{},
    mumbai: {
      // URL:ALCHEMY_API_KEY,
      // accounts:[GOERLI_PRIVATE_KEY]
      url: "https://polygon-mumbai.g.alchemy.com/v2/jIvJuLNY2Cb58nskvTKr6TuJfXR17j8X",
      accounts: ["9d8fb5f4af84e10f9fa269f89cac624bc094f1df53433fe1afb16ce3c77a67d2"],
    },
  },
};
