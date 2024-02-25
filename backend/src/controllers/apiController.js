const fs = require('fs');
const path = require("path");
require('dotenv').config({path:path.resolve(__dirname, '..', '.env')})

exports.mintTokens = (req, res) => {
    let abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'contracts', 'compiled_contracts', process.env.ABI_FILENAME)).toString())

    console.log(abi);
    if(!abi){
        return res.status(500).send({
            status: "failure",
            message: "Cannot retrieve the Contract ABI."
        })
    }

    let contractAddress = process.env.CONTRACT_ADDRESS

    console.log(contractAddress)
    if(!contractAddress){
        return res.status(500).send({
            status: "failure",
            message: "Cannot retrieve the contract address"
        })
    }

    let ganacheAddress = process.env.GANACHE_ADDRESS

    console.log(ganacheAddress)
    if(!ganacheAddress){
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
            ganacheAddress: ganacheAddress
        }
    })
}