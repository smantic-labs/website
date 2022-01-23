import "../../style/index.css"

import ProposalCard from "./ProposalCard/ProposalCard"
import { Row, Col, Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"

function Body() {
    const nextIcon = <FontAwesomeIcon icon={faChevronCircleRight} size="lg" className="fa-shadow" />
    const prevIcon = <FontAwesomeIcon icon={faChevronCircleLeft} size="lg" className="fa-shadow" />
    //const data = [ {title: "Title 1", description: "With supporting text below as a natural lead-in to additional content."}, {title: "Title 2", description: "With supporting text below as a natural lead-in to additional content."} ];

    return (
        //data.map((obj, index) => { return <ProposalCard />})
        <Row className="justify-content-md-center">
            <Col md={6}>
                <Carousel interval={null} indicators={false} variant={'dark'} nextIcon={nextIcon} prevIcon={prevIcon}>
                    <Carousel.Item>
                        <ProposalCard />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ProposalCard />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ProposalCard />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </ Row>
    );
}
  
export default Body;