import { React } from "react"

// Our components
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import { ethers } from "ethers"
import abi from "./abi"

const contract_address = "0x3174B73CE6935161fc6d80219fC35558D8928177"



function App() {

    var account;

    let login = async() => { 

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
    }
    login();

    if (window.ethereum == null) { 
        // TODO: use backend server or infura reverse proxy. 
        alert("metamask is required currently!!");
        return; 
    }


    var provider = new ethers.providers.Web3Provider(window.ethereum);
    var contract = new ethers.Contract(contract_address, abi, provider);
    let props = {contract, provider, account};
    console.log(props)

    // props should never change 
    // and thus never re render this component

    return (
        <>
            <Header 
                props={props}
            />
            <Body
                props={props}
            />
            <Footer />
        </>
    );
}

export default App;
