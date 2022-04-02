import { React, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import { Carousel } from "react-bootstrap";
import ProposalCard from "./ProposalCard/ProposalCard"


const ProposalTypes = ["ImmediateBan", "Ban", "Unban", "Whitelist", "ResetWorld"]
let inital = []

function ProposalCarousel(props) { 

    let { Contract, Provider, Address} = props;
    const [proposals, setProposals ] = useState(inital)

    if (Contract != null && proposals.length == 0) { 
        (async() => { 
            let promises = []
            for (let i = 0; i < 8; i++){ 
                promises.push(Contract.functions.proposals(i))
            }

            setProposals(await Promise.all(promises));
        })()
    }

    const nextIcon = <FontAwesomeIcon icon={faChevronCircleRight} size="lg" className="fa-shadow" />
    const prevIcon = <FontAwesomeIcon icon={faChevronCircleLeft} size="lg" className="fa-shadow" />
    console.log(proposals)

    let items = [] 

    for(let i = 0; i < proposals.length; i++){ 
        let proposal = proposals[i]
        items.push(
          <Carousel.Item key={i}>
              <ProposalCard 
                  address={Address} 
                  title={ProposalTypes[proposal.kind]} 
                  body={"Placeholder body"}/>
          </Carousel.Item>
        );
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
