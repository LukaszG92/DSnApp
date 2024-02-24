# DSnApp
DApp based on the Snake videogame


## Setup you enviroment

To follow the following instructions you need to have Ganache installed.

First of all **start the ganache test blockchain**, you can define the port on which the server will listen:
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



## References
This repository borrows partially from [react-simple-snake](https://github.com/MaelDrapier/react-simple-snake/tree/master) repository.
