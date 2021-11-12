// 0x394dD1B1aBBA01369913818e1c07f1d36FD67240

//reset the wallet address on page load
window.userWalletAddress = null
const loginButton = document.getElementById('loginButton')
const userWallet = document.getElementById('userWallet')
const mintStandardNFTButton = document.getElementById('mintStandardNFT')
const mintRareNFTButton = document.getElementById('mintRareNFT')
const mintGenesisNFTButton = document.getElementById('mintGenesisNFT')


function toggleButton() {
    loginButton.addEventListener('click', loginWithMetaMask)
}

function mintButtons() {
    mintStandardNFTButton.addEventListener('click', mintStandardNFT)
    mintRareNFTButton.addEventListener('click', mintRareNFT)
    mintGenesisNFTButton.addEventListener('click', mintGenesisNFT)
}

+//if the user is not on binance testnet. reject the transaction..
function checkNetwork(){
        if (window.ethereum.networkVersion !== 97) {
        console.log("wrong network")
        return true
    }
        else { return false }
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


    //TODO: Move to functions
    // mintStandardNFT()
    getNAZABalance()

    loginButton.removeEventListener('click', loginWithMetaMask)
    setTimeout(() => {
        loginButton.addEventListener('click', signOutOfMetaMask)
    }, 200)
}

async function instantiateContract() {
    //fetch abi and contract
    return fetch('https://cygorithm.com/contract.json')
        .then(res => res.json())
        .then((out) => {
            const contractAddress = out.address
            const abi = out.abi;
            // <!-- const contractInstance = window.ethereum.Contract(ABI); -->
            const contractInstance = new myWeb3.eth.Contract(abi,contractAddress)
            // console.log(contractInstance)
            return contractInstance
        }).catch(err => console.error(err))
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
    instantiateContract()
        .then(contractInstance => contractInstance.methods.mintStandardNFT().send({from: window.userWalletAddress, value: "25000000000000000"}));
}

async function mintRareNFT() {
    instantiateContract()
        .then(contractInstance => contractInstance.methods.mintRareNFT().send({from: window.userWalletAddress, value: "50000000000000000"}));
}

async function mintGenesisNFT() {
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


