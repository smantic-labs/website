# Website 
Written by Luca and Tyler. 2022.

### Pages
An interface for smart contracts.

### Workflow
the [gov](https://github.com/muichiro-mc/gov) reads from the blockchain and sends commands to the minecraft server (aka mc). For example, a ban proposal finishes on the contract, then the gov program picks it up and sends command to mc server.

#### homepage
- After logging in with MetaMask
- modal to create new proposal
- Scroll through new proposal
    - If proposal was voted by the user then prompt the results
    - If not, then show two buttons for voting.

### Installation
After cloning the repo, do `npm install` and `npm start`.

### Deployed smart contracts
- [https://ropsten.etherscan.io/address/0x3174b73ce6935161fc6d80219fc35558d8928177#readContract](https://ropsten.etherscan.io/address/0x3174b73ce6935161fc6d80219fc35558d8928177#readContract)
- [https://goerli.etherscan.io/address/0x78a642ee52609ea255d84299946fc23f02009c99](https://goerli.etherscan.io/address/0x78a642ee52609ea255d84299946fc23f02009c99)