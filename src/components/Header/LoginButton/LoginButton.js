import LoginModal from "../LoginModal/LoginModal"
import { React, useState, useEffect } from "react"
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

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
            {/* <button onClick={getWallet}>
                
            </button>

            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
            sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on bottom
            </button>
            
            */}
            <Button type="null" >
                <FontAwesomeIcon icon={faUser} size="lg" />
            </Button>
        </div>
    ) : (
        <LoginModal setAddress={setAddress} />
    )
}

export default LoginButton;