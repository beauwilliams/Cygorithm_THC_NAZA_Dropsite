    window.userWalletAddress = null
    const loginButton = document.getElementById('loginButton')
    const userWallet = document.getElementById('userWallet')

    function toggleButton() {

      loginButton.addEventListener('click', loginWithMetaMask)
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
      console.log(window.ethereum.networkVersion, 'window.ethereum.networkVersion');

      //if the user is not on binance testnet. reject the transaction..
      if (window.ethereum.networkVersion !== 97) {return}
      mint();


      loginButton.removeEventListener('click', loginWithMetaMask)
      setTimeout(() => {
        loginButton.addEventListener('click', signOutOfMetaMask)
      }, 200)
}

            //fetch abi and contract
async function mint() {
    fetch('http://localhost:8080/contract.json')
        .then(res => res.json())
        .then((out) => {
            const contractAddress = out.address
            const ABI = out.abi;
            // <!-- const contractInstance = window.ethereum.Contract(ABI); -->
                const contractInstance = new myWeb3.eth.Contract(ABI,contractAddress)
                // <!-- contractInstance.methods.balanceOf({ from: "0x75Ef2D0B1b560D4b9F47315B44F5BB62B071308C", value: 500000000000000000, gas: 21000 }, -->
                    contractInstance.methods.balanceOf(window.userWalletAddress).call(function (err, res) {

                        if (err) {

                            console.log("An error occured", err)

                            return

                        }

                        console.log("The balance is: ", res)
                    })


                    contractInstance.methods.mintStandardNFT().send({from: window.userWalletAddress, value: "25000000000000001"})

                // <!-- (err, res) => { console.log('Output: ', res);}); -->
                console.log(contractInstance);

            // <!-- console.log('Output: ', address); -->
            // <!-- console.log('Output: ', abi); -->
        }).catch(err => console.error(err));
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
    });

    //using web3 provider
    const oldProvider = web3.currentProvider; // keep a reference to metamask provider
    myWeb3 = new Web3(oldProvider);  // now you can use myWeb3 instead of web3
    // <!-- myWeb3 = new Web3(window.ethereum);  // now you can use myWeb3 instead of web3 -->
        // <!-- myWeb3 = new Web3(Provider);  // now you can use myWeb3 instead of web3 -->






    async function loadContract() {
    }

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


