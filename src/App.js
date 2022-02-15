import { React, useState, useEffect } from "react"

// Our components
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import LoginModal from './components/LoginModal/LoginModal'

async function isLoggedIn(setAddress) {
    // does not have metamask
    if (!window.ethereum) {
        alert("Get MetaMask!");
        return;
    }

    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });

    if (accounts.length > 0) {
        setAddress(accounts[0])
        return
    }
}

function App() {
    const [address, setAddress] = useState("");

    useEffect(() => {
        isLoggedIn(setAddress);
    }, []);

    return address ? (
         <>
            <Header address={address} />
            <Body />
            <Footer />
        </>
    ) : (
        <LoginModal setAddress={setAddress} />
    )
}

export default App;
