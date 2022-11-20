import { React, useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"

function CreateProposalModal({ show, handleClose, props }) {
    const [selected, setSelected] = useState("ImmediateBan");
    const [mcUsernameBan, setMcUsername] = useState("");

    const response = {
        ImmediateBan: {
            times: "1 hours",
            percentageRequired: 60,
            mcUsernameBan: true,
            enumId: 0
        },
        Ban: {
            times: "1 days",
            percentageRequired: 30,
            mcUsernameBan: true,
            enumId: 1
        },
        Unban: {
            times: "1 days",
            percentageRequired: 30,
            mcUsernameBan: true,
            enumId: 2,
        },
        Whitelist: {
            times: "1 days",
            percentageRequired: 30,
            mcUsernameBan: true,
            enumId: 3
        },
        ResetWorld: {
            times: "1 weeks",
            percentageRequired: 75,
            mcUsernameBan: false,
            enumId: 4
        }
    }

    const handleSubmitProposal = () => {
        const contract = props.Contract

        if (selected === "") {
            alert("Select a proposal"); return;
        } 
        
        if (response[selected].mcUsernameBan) {
            if (mcUsernameBan === "") { alert("Type a username"); return; }
        }

        //call NewProposal(ProposalType t, string calldata data)
        contract.NewProposal(response[selected].enumId, mcUsernameBan)
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
                    {selected &&
                        <Form.Group className="mb-3" controlId="formTimes">
                            <Form.Label>Time duration</Form.Label>
                            <Form.Control placeholder={response[selected].times} disabled />
                            <Form.Label>Percentage of favorable votes</Form.Label>
                            <Form.Control placeholder={response[selected].percentageRequired+"%"} disabled />
                            {response[selected].mcUsernameBan && 
                                <>
                                    <Form.Label>Username</Form.Label> 
                                    <Form.Control placeholder="Username" onChange={ v => { setMcUsername(v.target.value) }}/>
                                </>
                            }
                        </Form.Group>
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmitProposal} disabled={!props}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateProposalModal;