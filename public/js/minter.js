// 0x394dD1B1aBBA01369913818e1c07f1d36FD67240
//reset the wallet address on page load
window.userWalletAddress = null
const loginButton = document.getElementById('loginButton')
const userWallet = document.getElementById('userWallet')
const mintStandardNFTButton = document.getElementById('mintStandardNFT')
const mintRareNFTButton = document.getElementById('mintRareNFT')
const mintGenesisNFTButton = document.getElementById('mintGenesisNFT')
contractAddress = "0x96dF74f825daF2Fe9Be9b224ec445D09AbF90D79"
contractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"indices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintGenesis","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintRareNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintStandardNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]



function toggleButton() {
    loginButton.addEventListener('click', loginWithMetaMask)
}

function mintButtons() {
    mintStandardNFTButton.addEventListener('click', mintStandardNFT)
    mintRareNFTButton.addEventListener('click', mintRareNFT)
    mintGenesisNFTButton.addEventListener('click', mintGenesisNFT)
}


//if the user is not on binance testnet. reject the transaction..
function correctNetwork() {
    console.log(window.ethereum.networkVersion)
    if (window.ethereum.networkVersion == 97) {
        return true
    }
    else {
        console.log("wrong network")
        return false
    }
}



async function loginWithMetaMask() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch((e) => {
        console.error(e.message)
        return
    })
    if (!accounts) { return }

    window.userWalletAddress = accounts[0]
    userWallet.innerText = window.userWalletAddress
    loginButton.innerText = 'Disconnect Wallet'

    console.log(window.ethereum.networkVersion, 'window.ethereum.networkVersion')


    //TODO: Make on screen UI for user to see num naza nfts they hold
    // getNAZABalance()

    loginButton.removeEventListener('click', loginWithMetaMask)
    setTimeout(() => {
        loginButton.addEventListener('click', signOutOfMetaMask)
    }, 200)
}

async function instantiateContract() {
    //fetch abi and contract
    // return fetch('https://cygorithm.com/contract.json')
        // .then(res => res.json())
        // .then((out) => {
            // const contractAddress = out.address
            // const abi = out.abi;
            // <!-- const contractInstance = window.ethereum.Contract(ABI); -->
            const contractInstance = new myWeb3.eth.Contract(contractAbi,contractAddress)
            // console.log(contractInstance)
            return contractInstance
        // }).catch(err => console.error(err))
}


async function getNAZABalance() {
    instantiateContract()
        .then(contractInstance => {
            contractInstance.methods.balanceOf(window.userWalletAddress).call(function (err, res) {
                if (err) {
                    console.log("An error occured", err)
                    return
                }
                console.log("The balance is: ", res)
            })
        });
}


async function mintStandardNFT() {

    if (!correctNetwork()) {return}
    instantiateContract()
        .then(contractInstance => contractInstance.methods.mintStandardNFT().send({from: window.userWalletAddress, value: "25000000000000000"}));
}

async function mintRareNFT() {
    if (!correctNetwork()) {return}
    instantiateContract()
        .then(contractInstance => contractInstance.methods.mintRareNFT().send({from: window.userWalletAddress, value: "50000000000000000"}));
}

async function mintGenesisNFT() {
    if (!correctNetwork()) {return}
    instantiateContract()
        .then(contractInstance => contractInstance.methods.mintGenesisNFT().send({from: window.userWalletAddress, value: "25000000000000000"}));
}

function signOutOfMetaMask() {
    window.userWalletAddress = null
    userWallet.innerText = ''
    loginButton.innerText = 'Connect Wallet'

    loginButton.removeEventListener('click', signOutOfMetaMask)
    setTimeout(() => {
        loginButton.addEventListener('click', loginWithMetaMask)
    }, 200)
}

window.addEventListener('DOMContentLoaded', () => {
    toggleButton()
    mintButtons()
});


//TODO: Sort this mess below
//using web3 provider
const oldProvider = web3.currentProvider; // keep a reference to metamask provider
myWeb3 = new Web3(oldProvider);  // now you can use myWeb3 instead of web3
// <!-- myWeb3 = new Web3(window.ethereum);  // now you can use myWeb3 instead of web3 -->
// <!-- myWeb3 = new Web3(Provider);  // now you can use myWeb3 instead of web3 -->
// <!-- web3Provider = new Web3(window.ethereum); -->


async function loadContract() {
    return await new window.web3.eth.Contract(ABI, contractAddress);
}
async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }
}

// <!-- import { ethers } from "ethers"; -->
// <!-- const provider = new ethers.providers.Web3Provider(window.ethereum); -->
// <!-- console.log(provider); -->
console.log("YO");


