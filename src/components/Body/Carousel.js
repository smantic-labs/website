import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
    

const nextIcon = <FontAwesomeIcon icon={faChevronCircleRight} size="lg" className="fa-shadow" />
const prevIcon = <FontAwesomeIcon icon={faChevronCircleLeft} size="lg" className="fa-shadow" />

function ProposalCarousel(props){ 

    let {cards} = props

    let items = []
    for (let i = 0; i < cards.length; i++){ 

        let card = cards[i]
        console.log(card)
        let item = <Carousel.Item key={i}> 
            card
        </Carousel.Item>
        items.push(item)
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
