import { React, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import { Carousel } from "react-bootstrap";
import ProposalCard from "./ProposalCard/ProposalCard"

const ProposalTypes = ["ImmediateBan", "Ban", "Unban", "Whitelist", "ResetWorld"]
let inital = []

function ProposalCarousel(props) { 

    let { Contract, Address } = props;
    const [proposals, setProposals ] = useState(inital)
    let items = [] 

    if (Contract != null && proposals.length === 0) { 
        (async() => {
            let promises = []
            let totalProposals = await Contract.functions.totalProposals()
            for (let i = 1; i <= totalProposals[0].toNumber(); i++) {
                promises.push(Contract.functions.proposals(i))
            }
            setProposals(await Promise.all(promises))
        })()
    }

    const nextIcon = <FontAwesomeIcon icon={faChevronCircleRight} size="lg" className="fa-shadow" />
    const prevIcon = <FontAwesomeIcon icon={faChevronCircleLeft} size="lg" className="fa-shadow" />

    for(let i = 0; i < proposals.length; i++){ 
        let proposal = proposals[i]
        if (proposal[0] > 0) {
            items.push(
            <Carousel.Item key={i}>
                <ProposalCard 
                    address={Address} 
                    title={ProposalTypes[proposal.kind]} 
                    body={"Placeholder body"}
                    kind={proposal.kind}
                    inFavorCount={parseInt(proposal.pro._hex)}
                    startTime={parseInt(proposal.startTime._hex)*1000}
                />
            </Carousel.Item>
            );
        }
    }

    return (
      <Carousel 
        interval={null} 
        indicators={false} 
        variant={'dark'} 
        nextIcon={nextIcon} 
        prevIcon={prevIcon}>
        {items}
      </Carousel>
    )
}

export default ProposalCarousel
