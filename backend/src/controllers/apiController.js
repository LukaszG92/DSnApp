const fs = require('fs');
const path = require("path");
const {Web3} = require('web3')
require('dotenv').config({path:path.resolve(__dirname, '..', '.env')})

let ganachePort = 8545
let web3 = new Web3(`http://localhost:${ganachePort}`)


exports.getToken = async (req, res) => {
    let abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'contracts', 'compiled_contracts', 'DSnAppToken.abi')).toString())

    if(!abi){
        return res.status(500).send({
            status: "failure",
            message: "Cannot retrieve the Contract ABI."
        })
    }

    let contractAddress = process.env.TOKEN_ADRS;

    if(!contractAddress){
        return res.status(500).send({
            status: "failure",
            message: "Cannot retrieve the contract address"
        })
    }

    let accounts = await web3.eth.getAccounts();
    let ownerAddress = accounts[0];

    if(!ownerAddress){
        return res.status(500).send({
            status: "failure",
            message: "Cannot retrieve the ganache deployer address"
        })
    }

    res.status(200).send({
        status:'success',
        message:'Contract ABI retrieved successfully',
        data: {
            abi: abi,
            contractAddress: contractAddress,
            ownerAddress: ownerAddress
        }
    })
}