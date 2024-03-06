import './App.css';
import Wallet from "./components/Wallet";
import Snake from "./components/Snake/Snake";
import React, {useState} from "react";
import {NotificationManager, NotificationContainer } from "react-notifications"
const JSURL = require("jsurl");
const {Web3} = require('web3')


let ganachePort = 8545
let web3 = new Web3(`http://localhost:${ganachePort}`)

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [address, setAddress] = useState(null);
    const [snakeColor, setSnakeColor] = useState('#000000')
    const [appleColor, setAppleColor] = useState('#FF0000')
    const [borderColor, setBorderColor] = useState('#000000')


    const mintTokens = async (walletAddress, score) => {
        if (score === 0){
            NotificationManager.warning('You cannot mint 0 token', 'No token to mint', 2000)
            return
        }
        let response = await fetch('http://localhost:8000/api/getToken');
        let responseData = await response.json();
        if(response.status === 200) {
            let DSnAppToken = new web3.eth.Contract(responseData.data.abi, responseData.data.contractAddress)
            DSnAppToken.methods.mintToken(walletAddress, score).send({from: responseData.data.ownerAddress})
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

    const randomizeSkin = () => {
        let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        setSnakeColor(color)

        color = '#'+Math.floor(Math.random()*16777215).toString(16);
        setAppleColor(color)

        color = '#'+Math.floor(Math.random()*16777215).toString(16);
        setBorderColor(color)

    }

    const buySkin = async () => {

        if(address) {
            let response = await fetch('http://localhost:8000/api/getToken');
            let responseData = await response.json();

            const token = new web3.eth.Contract( responseData.data.abi, responseData.data.contractAddress);

            try {
                let tokenTransferResult = await token.methods.transfer(responseData.data.ownerAddress, web3.utils.toWei(1, 'ether'))
                    .send({
                        from: address
                    })

                randomizeSkin()
            } catch (e) {
                console.log(e)
            }
        }

    }

    return (
        <>
            <NotificationContainer/>
            <Wallet setLoggedIn={setLoggedIn}
                    setAddress={setAddress}/>
            {loggedIn &&
                <Snake mintTokens={mintTokens}
                       buySkin={buySkin}
                       address={address}
                       snakeColor={snakeColor}
                       appleColor={appleColor}
                       borderColor={borderColor}
                />
            }
        </>
    );
}

export default App;
