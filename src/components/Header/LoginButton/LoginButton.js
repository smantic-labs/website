import { React } from "react"
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap"

import "../../../style/index.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function LoginButton({ address, setAddress }) {

    async function login(setAddress) {
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

    if (address != null) { 
        return (<OverlayTrigger
            key={1}
            placement={'bottom'}
            overlay={
                <Tooltip id={'tooltip-bottom'}>
                    {address}
                </Tooltip>
            }
        >
            <Button type="null" className="button-transparent-background">
                <FontAwesomeIcon icon={faUser} size="lg" className="fa-dark" />
            </Button>
        </OverlayTrigger>)
    } else { 
        return (
        <OverlayTrigger
            key={1}
            placement={'bottom'}
            overlay={
                <Tooltip id={'tooltip-bottom'}>
                    Click to login
                </Tooltip>
            }
        >
            <Button 
                type="null"
                className="button-transparent-background" 
                onClick={() => login(setAddress)}
            >
                <FontAwesomeIcon icon={faUser} size="lg" className="fa-dark" />
            </Button>
        </OverlayTrigger>
        )
    }
}

export default LoginButton;
