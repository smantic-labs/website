import { React } from "react"
import AccountButton from "../AccountButton/AccountButton"

function LoginButton({address}) {

    return (
        <div>
            <AccountButton address={address}/>
        </div>
    )
}

export default LoginButton;