import './App.css';
import Wallet from "./components/Wallet";
import Snake from "./components/Snake/Snake";
import {useState} from "react";
import fs from "fs";
const {Web3} = require('web3')
require('dotenv').config()

let ganachePort = process.env.GANACHE_PORT || 8545
let web3 = new Web3(`http://localhost:${ganachePort}`)

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [address, setAddress] = useState(null);

    const mintTokens = (walletAddress, score) => {
        let abi = JSON.parse(fs.readFileSync(process.env.ABI_PATH).toString())
        let DSnAppToken = new web3.eth.Contract(abi, process.env.CONTRACT_ADDRESS)
        DSnAppToken.methods.issueToken(walletAddress, score).send({from: process.env.GANACHE_ADDRESS})
    }

    return (
        <>
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
