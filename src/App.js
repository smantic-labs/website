// Our components
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import { ethers } from "ethers"

const ropstenProvider = "https://ropsten.infura.io/v3/398f95cb8ffc4a18820d767955580aea" 
const address = "0x3174B73CE6935161fc6d80219fC35558D8928177"

const provider = new ethers.providers.InfuraProvider( "ropsten", { projectID: "398f95cb8ffc4a18820d767955580aea", pojectSecret: ""} )

// store this somewhere else? 
const abi = [{"inputs":[{"internalType":"address payable","name":"_vault","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"ProposalID","type":"uint256"},{"indexed":true,"internalType":"enum MuichiroDao.ProposalType","name":"kind","type":"uint8"},{"indexed":false,"internalType":"string","name":"data","type":"string"}],"name":"CreatedProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"ProposalID","type":"uint256"},{"indexed":true,"internalType":"enum MuichiroDao.ProposalType","name":"kind","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pro","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalVoters","type":"uint256"},{"indexed":false,"internalType":"bool","name":"passed","type":"bool"}],"name":"FinishedProposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"ProposalID","type":"uint256"},{"indexed":false,"internalType":"address","name":"voter","type":"address"}],"name":"VoteEvent","type":"event"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"CompleteProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_delegate","type":"address"}],"name":"Delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum MuichiroDao.ProposalType","name":"t","type":"uint8"},{"internalType":"string","name":"data","type":"string"}],"name":"NewProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"NewVoter","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"RequiredPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Times","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalID","type":"uint256"}],"name":"Vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"enum MuichiroDao.ProposalType","name":"kind","type":"uint8"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"pro","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalProposals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalVoters","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"address","name":"delegate","type":"address"}],"stateMutability":"view","type":"function"}]

var contract = new ethers.Contract(address, abi, provider)


function App() {
  console.log(provider)
  console.log(contract.address)
  return (
    <>
      <Header />
      <Body  />
      <Footer />
    </>
  );
}

export default App;
