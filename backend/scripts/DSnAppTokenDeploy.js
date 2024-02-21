const fs = require('fs')
const {Web3} = require('web3')
require('dotenv').config()

let ganachePort = process.env.GANACHE_PORT || 8545
web3 = new Web3(`http://localhost:${ganachePort}`)

bytecode = fs.readFileSync(process.env.BIN_PATH).toString()
abi = JSON.parse(fs.readFileSync(process.env.ABI_PATH).toString())

let DSnAppToken = new web3.eth.Contract(abi)
DSnAppToken.deploy({data:bytecode})
    .send({
        from: process.env.GANACHE_ADDRESS,
        gas: 1500000
    })
    .then(newContractInstance => {
        DSnAppToken.options.address = newContractInstance.options.address
    });
