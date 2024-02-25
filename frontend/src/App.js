import './App.css';
import Wallet from "./components/Wallet";
import Snake from "./components/Snake/Snake";
import React, {useState} from "react";
import {NotificationManager, NotificationContainer } from "react-notifications"
const {Web3} = require('web3')


let ganachePort = 8545
let web3 = new Web3(`http://localhost:${ganachePort}`)

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [address, setAddress] = useState(null);

    const mintTokens = async (walletAddress, score) => {
        if (score === 0){
            NotificationManager.warning('You cannot mint 0 token', 'No token to mint', 2000)
            return
        }
        let response = await fetch('http://localhost:8000/api/mintTokens');
        console.log(response)
        let responseData = await response.json();
        console.log(responseData)
        if(response.status === 200) {
            let DSnAppToken = new web3.eth.Contract(responseData.data.abi, responseData.data.contractAddress)
            DSnAppToken.methods.issueToken(walletAddress, score).send({from: responseData.data.ganacheAddress})
                .then( result => {
                    console.log(result)
                    NotificationManager.success(`${score} DSnAppToken added to your wallet`, 'Minting completed correctly', 2000)
                }
            )
        }
        if(response.status === 500) {
            NotificationManager.error(responseData.message, 'Contract ABI retrieving error!', 2000)
        }
    }

    return (
        <>
            <NotificationContainer/>
            <Wallet setLoggedIn={setLoggedIn}
                    setAddress={setAddress}/>
            {loggedIn &&
                <Snake mintTokens={mintTokens}
                       address={address}/>
            }
        </>
    );
}

export default App;
