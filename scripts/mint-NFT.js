require("dotenv").config();
const API_URL="https://polygon-mumbai.g.alchemy.com/v2/jIvJuLNY2Cb58nskvTKr6TuJfXR17j8X";
const {createAlchemyWeb3}=require("@alch/alchemy-web3");
const web3=createAlchemyWeb3(API_URL);

const contract=require("../artifacts/contracts/NFT.sol/MyNFT.json");
console.log(JSON.stringify(contract.abi));

const contractaddress="0x7dA133D4BaC0f2fdc02815D000980D8d1a29daFE";
const NFTcontract=new web3.eth.Contract(contract.abi,contractaddress);

//creating transaction
async function mintNft(tokenURI) {
  const nonce = await web3.eth.getTransactionCount("0x9c23e3168aD8dAd15cC66CD4b596aB0Ef3349093", "latest"); //get latest nonce

  //the transaction
  const tx = {
    from: "0x9c23e3168aD8dAd15cC66CD4b596aB0Ef3349093",
    to: "0x7dA133D4BaC0f2fdc02815D000980D8d1a29daFE",
    nonce: nonce,
    gas: 500000,
    data: NFTcontract.methods.mintNFT("0x9c23e3168aD8dAd15cC66CD4b596aB0Ef3349093", tokenURI).encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, "9d8fb5f4af84e10f9fa269f89cac624bc094f1df53433fe1afb16ce3c77a67d2");
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log("Promise failed:", err);
    });
}

mintNft("https://ipfs.io/ipfs/QmVtUdnyFTqwAZuU8C6s6YHgH2PYXhhHWU6PkcK45fB4JS");

//NFT image=https://gateway.pinata.cloud/ipfs/Qme7Jyd2G7m5qM9yQwMZrt6vBDiYn4u8qMGtnufxUZrQu2

//The hash of your transaction is:  0x3aa4455d2d3776b87543632645b390d6f501f24d63a4a106e521ced2abe44bab 