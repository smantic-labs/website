import "../../style/index.css"

import { Row, Col } from "react-bootstrap";

import ProposalCarousel from "./Carousel"

import ProposalCard from "../ProposalCard/index";


const ProposalTypes = ["ImmediateBan", "Ban", "Unban", "Whitelist", "ResetWorld"]


function Body(props) {

    let { contract, provider, address} = props.props;

    if(contract == null){ 
        return(<></>)
    }


    let cards = [];
    for (let i = 0; i < 8; i++) { 

        let getProposal = async() =>  { 
            return await contract.functions.proposals(i);
            // response = [ kind, start time, pro ] 
            // we have to get the body from the event
        }

        getProposal().then((data) => { 
            let card = 
                <ProposalCard 
                address={address} 
                title={ProposalTypes[data[0]]}
                body={"1"}
            />

            cards.push(card)
        })
    }

    return (
        <Row className="justify-content-md-center">
            <Col md={6}>
                <ProposalCarousel
                    cards={cards}
                />
            </Col>
        </ Row>
    );
}

export default Body;
