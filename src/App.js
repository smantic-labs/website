import { React, useState, useEffect } from "react"

// Our components
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

async function isLoggedIn(setAddress) {
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });

    if (accounts.length > 0) {
        setAddress(accounts[0])
        return
    } else {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
    
            if (accounts.length > 0) {
                setAddress(accounts[0])
                return
            }
        } catch (e) {
            // nothing for now.
        }
    }
}

function App() {
    const [address, setAddress] = useState("");

    useEffect(() => {
        isLoggedIn(setAddress);
    }, []);

    return (
        <>
            <Header address={address} setAddress={setAddress} />
            <Body />
            <Footer />
        </>
    )
}

export default App;
