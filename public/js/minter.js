//reset the wallet address on page refresh to prevent issues
window.userWalletAddress = null;
//create button events
const loginButton = document.getElementById("loginButton");
const userWallet = document.getElementById("userWallet");
const userNetwork = document.getElementById("userNetwork");
const mintStandardNFTButton = document.getElementById("mintStandardNFT");
const mintRareNFTButton = document.getElementById("mintRareNFT");
const mintGenesisNFTButton = document.getElementById("mintGenesisNFT");

//MAINNET CONTRACT
contractAddress = "0xc14F351C2b83d9E1D63b3710E04bBD6B132ef5D9";
contractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"TOTAL_RARE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_STANDARD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintFreeGenesisNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintFreeRareNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintFreeStandardNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintRareNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintStandardNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numGenesisMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numRareMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numStandardMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

//TODO: Make on screen UI for user to see num naza nfts they hold
// getNAZABalance()

function toggleButton() {
  loginButton.addEventListener("click", loginWithMetaMask);
}

function mintButtons() {
  mintStandardNFTButton.addEventListener("click", mintStandardNFT);
  mintRareNFTButton.addEventListener("click", mintRareNFT);
  // mintGenesisNFTButton.addEventListener('click', mintGenesisNFT)
}

//if the user is not on binance. reject the transaction..
function correctNetwork() {
  // console.log(window.ethereum.networkVersion, 'window.ethereum.networkVersion')
  if (window.ethereum.networkVersion == 56) {
    return true;
  } else {
    alert(
      "You are not connected to the BSC network. If the BSC network has been set up in your Metamask, please switch to it now. If you have not yet set up the BSC network, you may visit chainlist.org to quickly add the network to your wallet!"
    );
    return false;
  }
}

function hasMetamask() {
  //alert user to install metamask if not installed and return
  if (!window.ethereum) {
    alert("Please install MetaMask to use this dApp!");
    return false;
  } else {
    return true;
  }
}

function connectedWallet() {
  //alert user to connect their wallet before minting
  if (!window.userWalletAddress) {
    alert("Please connect your wallet first!");
    return false;
  } else {
    return true;
  }
}

async function newWeb3Instance() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
  }
}

async function loadContract() {
  return await new window.web3.eth.Contract(abi, contractAddress);
}

async function loginWithMetaMask() {
  // alert("THC NAZA Drop Begins Midnight PST")

  if (!hasMetamask()) {
    return;
  }

  newWeb3Instance();

  const accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((e) => {
      console.error(e.message);
      return;
    });

  window.userWalletAddress = accounts[0];
  userWallet.innerText = window.userWalletAddress;
  loginButton.innerText = "Disconnect Wallet";

  if (correctNetwork()) {
    userNetwork.innerText = "Successfully connected to the BSC mainnet";
  } else {
    userNetwork.innerText =
      "You must be connected to the BSC mainnet to use this app";
  }

  loginButton.removeEventListener("click", loginWithMetaMask);
  setTimeout(() => {
    loginButton.addEventListener("click", signOutOfMetaMask);
  }, 200);
}

async function instantiateContract() {
  //NOTE fetch had CORS error on production server... so we put abi in this file directly
  // fetch abi and contract
  /* return fetch('https://cygorithm.com/contract.json')
    .then(res => res.json())
    .then((out) => {
    const contractAddress = out.address
    const abi = out.abi;
    const contractInstance = new window.web3.eth.Contract(contractAbi,contractAddress)
    const contractInstance = window.ethereum.Contract(ABI)
    }).catch(err => console.error(err)) */

  const contractInstance = await new window.web3.eth.Contract(
    contractAbi,
    contractAddress
  );
  return contractInstance;
}

async function getNAZABalance() {
  instantiateContract().then((contractInstance) => {
    contractInstance.methods
      .balanceOf(window.userWalletAddress)
      .call(function (err, res) {
        if (err) {
          console.log("An error occurred", err);
          return;
        }
        console.log("The balance is: ", res);
      });
  });
}

function processMintTransactionOutput(err, transactionHash) {
  if (err) {
    alert(
      "Transaction failed. This may have occurred because it was rejected by the user or there was a network error. If the confirm button in the metamask popup is greyed out, reject the transaction and try click the mint button again. The transaction may have also been rejected due to the NFTs being sold out. Please try again."
    );
    console.log(err);
  } else {
    alert(
      "Success. Transaction awaiting confirmation with hash " + transactionHash
    );
  }
}

async function mintStandardNFT() {
  // alert("THC NAZA Drop Begins Midnight PST")
  if (!hasMetamask()) {
    return;
  }
  if (!correctNetwork()) {
    return;
  }
  if (!connectedWallet()) {
    return;
  }
  instantiateContract().then((contractInstance) =>
    contractInstance.methods
      .mintStandardNFT()
      .send(
        {
          from: window.userWalletAddress,
          value: "250000000000000000",
          gas: 250000,
          gasPrice: 15000000000,
        },
        function (err, transactionHash) {
          processMintTransactionOutput(err, transactionHash);
        }
      )
      .catch((err) => console.error(err))
  );
}

async function mintRareNFT() {
  // alert("THC NAZA Drop Begins Midnight PST")
  if (!hasMetamask()) {
    return;
  }
  if (!correctNetwork()) {
    return;
  }
  if (!connectedWallet()) {
    return;
  }
  instantiateContract().then((contractInstance) =>
    contractInstance.methods
      .mintRareNFT()
      .send(
        {
          from: window.userWalletAddress,
          value: "500000000000000000",
          gas: 250000,
          gasPrice: 15000000000,
        },
        function (err, transactionHash) {
          processMintTransactionOutput(err, transactionHash);
        }
      )
      .catch((err) => console.error(err))
  );
}

/* async function mintGenesisNFT() {
    // alert("THC NAZA Drop Begins Midnight PST")
    if (!hasMetamask()) { return }
    if (!correctNetwork()) { return }
    if (!connectedWallet()) { return }
    instantiateContract()
        .then(contractInstance => contractInstance.methods.mintGenesisNFT().send({from: window.userWalletAddress, value: "10000000000000000000", gas: 120000, gasPrice: 12000000000 },
            function(err,transactionHash){
                processMintTransactionOutput(err,transactionHash)
            }).catch(err => console.error(err))
    );
} */

function signOutOfMetaMask() {
  window.userWalletAddress = null;
  userWallet.innerText = "";
  userNetwork.innerText = "";
  loginButton.innerText = "Connect Wallet";

  loginButton.removeEventListener("click", signOutOfMetaMask);
  setTimeout(() => {
    loginButton.addEventListener("click", loginWithMetaMask);
  }, 200);
}

window.addEventListener("DOMContentLoaded", () => {
  toggleButton();
  mintButtons();
});
