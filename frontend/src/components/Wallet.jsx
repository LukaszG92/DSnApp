import React, {useState} from 'react'
import styled from "styled-components"

const Wallet = ({setLoggedIn, setAddress}) => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);

    async function requestAccount() {
        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            console.log(accounts)
            return accounts[0];
        } catch (error) {
            console.error('User denied account access');
            return null;
        }
    }

    const connectWalletHandler = async () => {
        if (window.ethereum) {
            const account = await requestAccount()
            console.log(account)
            setErrorMessage(null)
            setDefaultAccount(account)
            setAddress(account)
            setLoggedIn(true)
        } else {
            setErrorMessage("Please Install Metamask!!!");
        }
    }

    return (
        <TopbarContainer>
            {!defaultAccount ?
                <button onClick={connectWalletHandler}>Connect</button>
                :
                <button onClick={() => {
                    setDefaultAccount(null)
                    setAddress(null)
                    setLoggedIn(false)
                }}>Logout</button>
            }
            <div className="TopbarLeft">
                {errorMessage &&
                    <span className="TopbarText">{errorMessage}</span>
                }
                {defaultAccount &&
                    <span className="TopbarText">Address: {defaultAccount}</span>
                }
            </div>
        </TopbarContainer>
    )
}

const TopbarContainer = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: rgb(255, 255, 255);
    justify-content: center;
    border-bottom: 1px solid gray;
    margin-bottom: 10%;
    box-shadow: -2px 10px 9px -7px rgba(0, 0, 0, 0.34);
    -webkit-box-shadow: -2px 10px 9px -7px rgba(0, 0, 0, 0.34);
    -moz-box-shadow: -2px 10px 9px -7px rgba(0, 0, 0, 0.34);
    @media (max-width: 655px) {
        justify-content: space-between;
    }
    
    .TopbarText {
        font-size: 18px;
        padding-right: 20px;
        padding-left: 20px;
        font-weight: bold;
        color: black;
    }
`
export default Wallet;
