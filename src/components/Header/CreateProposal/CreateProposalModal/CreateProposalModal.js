import { React } from "react"

import { Button, Modal, Form } from "react-bootstrap"

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
                {/* Creating new vote */}
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledSelect">Proposal Type</Form.Label>
                        <Form.Select id="disabledSelect">
                            <option>ImmediateBan</option>
                            <option>Ban</option>
                            <option>Unban</option>
                            <option>Whitelist</option>
                            <option>ResetWorld</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form>
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