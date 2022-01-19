import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"

import "../../../style/index.css"

function ProposalCard () {
    return (
        <Container className='d-flex align-items-center justify-content-center full-height'>
            <Row>
                {/* <Col xs={1} className="d-flex align-items-center">
                    <button><FontAwesomeIcon icon={faChevronCircleLeft} size="lg" className="fa-shadow" /></button>
                </Col> */}
                <Col xs={10}>
                    <Card>
                        {/* <Card.Header>Proposal Type</Card.Header> */}
                        <Card.Body className="p-5">
                            <div className="p-5">
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </div>
                            <hr />
                            <div className="text-center">
                                <Button className="vote-button-yes mx-2">Yes</Button> 
                                <Button className="vote-button-no mx-2">No</Button> 
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {/* <Col xs={1} className="d-flex align-items-center">
                    <button><FontAwesomeIcon icon={faChevronCircleRight} size="lg" className="fa-shadow" /></button>
                </Col> */}
            </Row>
        </Container>
    );
}

export default ProposalCard;