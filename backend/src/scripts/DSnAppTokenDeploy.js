const fs = require('fs')
const path = require('path')
const {Web3} = require('web3')
require('dotenv').config({path:path.resolve(__dirname, '..', '..', '..', '.env')})

console.log(path.resolve(__dirname, '..', '..', '..', '.env'))

let ganachePort = 8545
let web3 = new Web3(`http://localhost:${ganachePort}`)

console.log(process.env.BIN_FILENAME)
console.log(process.env.ABI_FILENAME)

let bytecode = fs.readFileSync(path.resolve(__dirname, '..', 'contracts', 'compiled_contracts', process.env.BIN_FILENAME)).toString()
let abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'contracts', 'compiled_contracts', process.env.ABI_FILENAME)).toString())

let DSnAppToken = new web3.eth.Contract(abi)

DSnAppToken.deploy({data:bytecode})
    .send({
        from: process.env.GANACHE_ADDRESS,
        gas: 1500000
    })
    .then(newContractInstance => {
        DSnAppToken.options.address = newContractInstance.options.address
    });
