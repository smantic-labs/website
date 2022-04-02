import "../../style/index.css"

import { React, useState } from "react"
import ProposalCard from "./ProposalCard/ProposalCard"
import { Row, Col, Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"


//import ProposalCard from "../ProposalCard/index";


const ProposalTypes = ["ImmediateBan", "Ban", "Unban", "Whitelist", "ResetWorld"]

let inital = [null, null, null, null, null, null, null, null]

function Body(props) {

    let { Contract, Provider, Address} = props;

    const [proposals, setProposals ] = useState(inital)

    const nextIcon = <FontAwesomeIcon icon={faChevronCircleRight} size="lg" className="fa-shadow" />
    const prevIcon = <FontAwesomeIcon icon={faChevronCircleLeft} size="lg" className="fa-shadow" />

    if (proposals[0] == null && Contract != null) { 

        (async() => { 
            for (let i = 0; i < 8; i++){ 
                proposals[i] = await Contract.functions.proposals(i);
            }
            setProposals(proposals);
        })()
    }

    console.log(proposals)
    return (
        <Row className="justify-content-md-center">
            <Col md={6}>
                <Carousel interval={null} indicators={false} variant={'dark'} nextIcon={nextIcon} prevIcon={prevIcon}>
                    {
                        proposals.map((proposal, index) => {

                            if (proposal == null  || proposal[0] == null ) { 
                                return (
                                    <Carousel.Item key={index}>
                                        <ProposalCard 
                                            address={Address} 
                                            title={"Placeholder title"} 
                                            body={"Placeholder body"}/>
                                    </Carousel.Item>
                                )
                            }

                            var title = ProposalTypes[proposal.kind]
                            var body = "placeholder proposal body"

                            return (
                                <Carousel.Item key={index}>
                                    <ProposalCard 
                                        address={Address} 
                                        title={title} 
                                        body={body}/>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </Col>
        </ Row>
    );
}

export default Body;
