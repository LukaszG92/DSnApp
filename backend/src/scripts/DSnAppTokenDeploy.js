const fs = require('fs')
const path = require('path')
const {Web3} = require('web3')
require('dotenv').config({path:path.resolve(__dirname, '..', '..', '..', '.env')})

let ganachePort = 8545
let web3 = new Web3(`http://localhost:${ganachePort}`)

let tokenBin = fs.readFileSync(path.resolve(__dirname, '..', 'contracts', 'compiled_contracts', 'DSnAppToken.bin')).toString()
let tokenAbi = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'contracts', 'compiled_contracts', 'DSnAppToken.abi')).toString())

let DSnAppToken = new web3.eth.Contract(tokenAbi)

const deploy = async () => {
    let accounts = await web3.eth.getAccounts();
    let deploymentAccount = accounts[0];

    let token =
        await DSnAppToken.deploy({data: tokenBin})
        .send({
            from: deploymentAccount,
            gas: 3000000
        })

    console.log(`Token address: ${token.options.address}`)
}

deploy()