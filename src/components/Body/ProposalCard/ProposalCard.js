import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "../../../style/index.css"

function ProposalCard(props) {
    let { address, title, body  } = props 



    return (
        <Container className='d-flex align-items-center justify-content-center full-height'>
            <Row className="justify-content-md-center">
                    <Card className="card-container">
                        <Card.Body className="card-body">
                            <div className="p-5">
                                <Card.Title>
                                    {title}
                                </Card.Title>
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
            </Row>
        </Container>
    );
}

export default ProposalCard;
