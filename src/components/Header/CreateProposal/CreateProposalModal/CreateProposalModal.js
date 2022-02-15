import { React } from "react"

import { Button, Modal } from "react-bootstrap"

function CreateProposalModal({ show, handleClose, address }) {
    return (
        <Modal show={show} onHide={handleClose}
            keyboard={false}
            size="lg"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Creating a new proposal</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateProposalModal;