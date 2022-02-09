import { React, useState, useEffect } from "react"
import LoginModal from "../LoginModal/LoginModal"
import AccountButton from "../AccountButton/AccountButton"

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

function LoginButton() {
    const [address, setAddress] = useState("");

    useEffect(() => {
        isLoggedIn(setAddress);
    }, []);

    return address ? (
        <div>
            <AccountButton address={address}/>
        </div>
    ) : (
        <LoginModal setAddress={setAddress} />
    )
}

export default LoginButton;