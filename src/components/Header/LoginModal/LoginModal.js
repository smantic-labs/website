import { React, useEffect, useState } from "react"
import { Modal, Button, Container, Row, Col } from "react-bootstrap"

async function getAddress(setAddress, handleClose) {
    // does not have metamask
    if (!window.ethereum) {
        alert("Get MetaMask!");
        return;
    }
    
    try {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        if (accounts.length > 0) {
            setAddress(accounts[0])
            handleClose()
            return
        }
    } catch (e) {
        // nothing for now.
    }
}

function LoginModal ({ setAddress }) {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    useEffect( () => {
        getAddress(setAddress, handleClose);
    }, [setAddress])

    return (
        <Modal
            show={show}
            backdrop="static"
            keyboard={false}
            size="lg"
            centered
        >
            <Modal.Header>
                <Modal.Title className="text-center">Welcome to Muichiro</Modal.Title>
            </Modal.Header>
            <Modal.Body className="m-5">
                <Container>
                    <Row className="lead">
                        <Col>
                            Login with your preferred metamask wallet to use Muichiro.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="https://metamask.io/" target="_blank" rel="noreferrer">Learn more about metamask here</a>
                        </Col>
                    </Row>

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={getAddress}>
                    Connect to Metamask
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;
