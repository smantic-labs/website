import { React, useState } from "react"

import { Button, Modal, Form } from "react-bootstrap"

function CreateProposalModal({ show, handleClose, address }) {
    const [selected, setSelected] = useState("");

    const response = {
        ImmediateBan: {
            times: "1 hours",
            percentageRequired: 60
        },
        Ban: {
            times: "1 days",
            percentageRequired: 30
        },
        Unban: {
            times: "1 days",
            percentageRequired: 30
        },
        Whitelist: {
            times: "1 days",
            percentageRequired: 30
        },
        ResetWorld: {
            times: "1 weeks",
            percentageRequired: 75
        }
    }

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
                        <Form.Select id="disabledSelect" onChange={v => { setSelected(v.target.value) }}>
                            {Object.keys(response).map((value, index) => {
                                return <option key={index} value={value}>{value}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                    {selected ? (
                        <Form.Group className="mb-3" controlId="formTimes">
                            <Form.Label>Time duration</Form.Label>
                            <Form.Control placeholder={response[selected].times} disabled />
                            <Form.Label>Percentage of favorable votes</Form.Label>
                            <Form.Control placeholder={response[selected].percentageRequired+"%"} disabled />
                        </Form.Group>
                    ) : ( 
                        <Form.Group className="mb-3" controlId="formTimes">
                            <Form.Label>Time duration</Form.Label>
                            <Form.Control placeholder={""} disabled />
                            <Form.Label>Percentage of favorable votes</Form.Label>
                            <Form.Control placeholder={"%"} disabled />
                        </Form.Group>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose} disabled={!address}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateProposalModal;