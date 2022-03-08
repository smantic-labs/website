import { React, useState } from "react"
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import CreateProposalModal from "../CreateProposalModal/CreateProposalModal"

import "../../../../style/index.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileSignature } from '@fortawesome/free-solid-svg-icons'

function CreateProposalButton({address}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <OverlayTrigger
                key={1}
                placement={'bottom'}
                overlay={
                    <Tooltip id={'tooltip-bottom'}>
                        Create proposal
                    </Tooltip>
                }
            >
                <Button type="null" className="button-transparent-background" onClick={handleShow}>
                    <FontAwesomeIcon icon={faFileSignature} size="lg" className="fa-dark" />
                </Button>
            </OverlayTrigger>
            <CreateProposalModal show={show} handleClose={handleClose} address={address}/>
        </>
        
    )
}

export default CreateProposalButton;