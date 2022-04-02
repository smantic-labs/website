import { React, useState } from "react"

// Our components
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import { ethers } from "ethers"
import abi from "./abi"

const contract_address = "0x3174B73CE6935161fc6d80219fC35558D8928177"
const infura_project_id = "398f95cb8ffc4a18820d767955580aea"
const network = "ropsten"


let initalState = { 
    Provider: null, 
    Account: null, 
    Metamask: null, 
    Contract: null,
}


function App() {

    const [eth, setEth] = useState(initalState)

    if (window.ethereum == null) { 
        // TODO: use backend server or infura reverse proxy. 
        alert("metamask is required currently!!");
        return; 
    }

    if (eth.Provider == null) { 
       (async () => { 

            var account 
            var provider 

            if( window.ethereum != null) {
                // first get the available eth accounts. 
                var accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });


                // sign in if needed
                if (accounts.length === 0) {
                    accounts = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                } 
            } else { 
                // use infura if there is no metamask.
                provider = new ethers.providers.InfuraProvider(network, infura_project_id)
            }

            setEth({ 
                Provider: provider,
                Contract: new ethers.Contract(contract_address, abi, provider),
                Account: account, 
            })
        })()
    }


    console.log(eth)
    return (
        <>
            <Header 
                eth
            />
            <Body
                eth
            />
            <Footer />
        </>
    );
}

export default App;
