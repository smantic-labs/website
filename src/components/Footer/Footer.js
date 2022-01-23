import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <Container className="w-100 p-3 text-center fixed-bottom">
            <Row>
                <Col>
                    <FontAwesomeIcon icon={faDiscord} size="lg" />
                </Col>
                <Col>
                    <small>2022</small>
                </Col>
                <Col>
                    <small>Tyler and Luca</small>
                </Col>
            </Row>
        </Container>
    );
}
  
export default Footer;