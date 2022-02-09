import { React } from "react"
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap"

import "../../../style/index.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function AccountButton ({address}) {

    return (       
        <OverlayTrigger
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
        </OverlayTrigger>
    )
}


export default AccountButton;