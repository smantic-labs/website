import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import "../../style/index.css"

function Body() {
    return (
        <Container className='d-flex align-items-center justify-content-center full-height'>
            <Row>
                <Col xs={1} className="d-flex align-items-center">
                    <button><FontAwesomeIcon icon={faChevronCircleLeft} size="lg" className="fa-shadow" /></button>
                </Col>
                <Col xs={10}>
                    <Card>
                        {/* <Card.Header>Proposal Type</Card.Header> */}
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button className="vote-button">Vote</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1} className="d-flex align-items-center">
                    <button><FontAwesomeIcon icon={faChevronCircleRight} size="lg" className="fa-shadow" /></button>
                </Col>
            </Row>
        </Container>
    );
}
  
export default Body;