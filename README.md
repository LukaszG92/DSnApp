# DSnApp
DApp based on the Snake videogame


## Setup you enviroment

First of all we need to **install Ganache**

```bash
npm install -g ganache
```

First of all **start the Ganache test blockchain**, you can define the port on which the server will listen:

 ```bash 
  ganache [--server.port <port>]
```

After this command you should see something like this:

```bash
ganache v7.9.2 (@ganache/cli: 0.10.2, @ganache/core: 0.10.2)
Starting RPC server

Available Accounts
==================
(0) 0xc81c61BE4607cC6b5c5D8300161eeb280F4a8287 (1000 ETH)
(1) 0x292daba53dCc90A0C46eee8e6C91042AF4D26bd8 (1000 ETH)
(2) 0xff78E977030046169ED92AA7D96Eb6b623B27aAA (1000 ETH)
(3) 0xBEfE492CC908fA8DE5A244cE41eaEd8543EC0D4C (1000 ETH)
(4) 0xEa5E6E0B43dC5fD5978c5Bc574e79b3dBDc561e8 (1000 ETH)
(5) 0x74cC14c0AD53D76E7926dC85B2A67Ff368229b47 (1000 ETH)
(6) 0x1cdF54583A6C3B023271eE1aCbd1a829dfe2D91A (1000 ETH)
(7) 0x46a6fB1965d0B59a4367EB48D20E6A6bc447eF3D (1000 ETH)
(8) 0x47ba64E4Ad3F454e266c4Bd83394F0C4950Be868 (1000 ETH)
(9) 0x5089C830925694E3827497fc32368416409EEfB1 (1000 ETH)

Private Keys
==================
(0) 0xa453505e751d9ec5a93da8d1806c28da90e5ed17ce978daa39af59979fc985ca
(1) 0x563228effea9ce075ab1aa6b672f8748493abbc61a6819a61869a6a5d4a44a4c
(2) 0xd020c7c800acb270858e29ead2454b69ad251ddeb7e3afe1f1c851c95305e1de
(3) 0xd73b4b049084b1190677a4103f8cc50dfdf7ae4f5eae342dbac4a9ca8cbb4b0f

...

RPC Listening on 127.0.0.1:8545
```

Now you have to set as  environment variable with one of this account, e.g. using the first account:

```bash
export GANACHE_ADDRESS=0xc81c61BE4607cC6b5c5D8300161eeb280F4a8287
```

Now we have to **compile the Smart Contract**, first of all we need to install the Solidity Compiler

```bash
npm install -g solc
```

The we have to get the contract's bin and abi

```bash
cd ./backend/src/contracts
solcjs solcjs --bin --abi --include-path ../../node_modules/ --base-path contracts/ --output-dir ./compiled_contracts DSnAppToken.sol
```

After this we have to setup two enviroment variables containg the contract's abi and bin filenames

```bash
export BIN_FILENAME=<contract-filename.bin>
export ABI_FILENAME=<contract-filename.abi>
```

Now we have to **deploy the Smart Contract** on the Ganache blockchain

```bash
cd ../scripts
node DSnAppTokenDeploy.js
```

If the deployment is successful on the Ganache terminal we will see something like this

```bash
eth_getBlockByNumber
eth_blockNumber
eth_sendTransaction

  Transaction: 0xfc136e7f9d414855ec2d69d8be06b4d14aa3c050e8cde02bcaad7449227c490d
  Contract created: 0x228fb69e72254e6dda41c6ee75f633120439b409
  Gas usage: 1027935
  Block number: 1
  Block time: Sun Feb 25 2024 16:19:17 GMT+0100 (GMT+01:00)

eth_getTransactionReceipt
eth_blockNumber
```

We need to save the **Contract addres** in another enviroment variable

```bash
export CONTRACT_ADDRESS='0x228fb69e72254e6dda41c6ee75f633120439b409'
```

The last step to complete our setup is download and setup the Metamask browser extension from this link: https://metamask.io/download/
Now you have to create you accunt, and after this we have to connect Metamask to Ganache, from the popup select the network in the left-upper corner e from the menu select *"Add network"*

<p align="center">
 <img width="416" alt="Screenshot 2024-02-25 alle 18 25 17" src="https://github.com/LukaszG92/DSnApp/assets/128072825/39cc3258-9272-437f-8ca5-e450743a9126">
</p>

Now you have to select *"Add a network manually"*

<p align="center">
 <img width="924" alt="Screenshot 2024-02-25 alle 18 26 13" src="https://github.com/LukaszG92/DSnApp/assets/128072825/ee08c03c-e80f-4683-a6ec-79f8cd737e1d">
</p>

Setup the Network as follows:

<p align="center">
 <img width="728" alt="Screenshot 2024-02-25 alle 18 29 26" src="https://github.com/LukaszG92/DSnApp/assets/128072825/3870de68-3a69-46ae-9fc3-d66529275e80">
</p>

From the Ganache network select now *"Import tokens"*

<p align="center">
 <img width="927" alt="Screenshot 2024-02-25 alle 18 30 52" src="https://github.com/LukaszG92/DSnApp/assets/128072825/dc0cd4fc-e5c6-46da-882e-42492534c9b5">
</p>

And insert the previously seen **Contract address* as *"Token Contract Address"*, click on *"Next"* and then click *"Import"*

<p align="center">
 <img width="386" alt="Screenshot 2024-02-25 alle 18 32 25" src="https://github.com/LukaszG92/DSnApp/assets/128072825/8423bc54-720a-4071-a0b0-87907844da32">
</p>

Now you are ready to play DSnApp!

## References
This repository borrows partially from [react-simple-snake](https://github.com/MaelDrapier/react-simple-snake/tree/master) repository.
