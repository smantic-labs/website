import { React, useState } from "react"

// Our components
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import { ethers } from "ethers"
import abi from "./abi"

const contract_address = "0x78A642Ee52609Ea255d84299946Fc23F02009C99"
const infura_project_id = "398f95cb8ffc4a18820d767955580aea"
const network = "goerli"


let initalState = { 
    Provider: null, 
    Account: null, 
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
                account = accounts[0]
                provider = new ethers.providers.Web3Provider(window.ethereum)
            } else { 
                // use infura if there is no metamask.
                provider = new ethers.providers.InfuraProvider(network, infura_project_id)
            }

            setEth({ 
                Provider: provider,
                Contract: new ethers.Contract(contract_address, abi, provider.getSigner()),
                Account: account, 
            })
        })()
    }

    return (
        <>
            <Header
              Account={eth.Account}
              Contract={eth.Contract}
              Provider={eth.Provider}
            />
            <Body 
              Account={eth.Account}
              Contract={eth.Contract}
              Provider={eth.Provider}
            />
            <Footer />
        </>
    );
}

export default App;
