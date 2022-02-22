import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <Container className="w-100 p-3 text-center fixed-bottom">
            <Row>
                <Col>
                    <a href="https://github.com/muichiro-mc" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faDiscord} size="lg" />
                    </a>
                </Col>
                <Col>
                    <small>2022</small>
                </Col>
                <Col>
                    <a href="https://github.com/muichiro-mc" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;