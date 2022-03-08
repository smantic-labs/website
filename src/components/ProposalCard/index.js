import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "../../style/index.css"

function ProposalCard({ address, title, body }) {
    return (
        <Container className='d-flex align-items-center justify-content-center full-height'>
            <Row className="justify-content-md-center">
                <Col xs={10}>
                    <Card>
                        {/* <Card.Header>Proposal Type</Card.Header> */}
                        <Card.Body className="p-5">
                            <div className="p-5">
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {body}
                                </Card.Text>
                            </div>
                            <hr />
                            {address ? (
                                <div className="text-center">
                                    <Button className="vote-button-yes mx-2">Yes</Button>
                                    <Button className="vote-button-no mx-2">No</Button>
                                </div>
                            ) : (
                                <div className="text-center">
                                    Login to vote
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ProposalCard;
