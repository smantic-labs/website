import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "../../../style/index.css"

// length of each proposal in seconds.  
//[ 1 hours, 1 days, 1 days, 1 days, 1 weeks ];
const proposal_lengths = [3600,86400,86400,86400,604800]

function ProposalCard(props) {
    let { address, contract, proposal, title, body, kind, inFavorCount, startTime } = props 

    var disabled = false
    var end_date 

    if (startTime == 0) { 
        end_date = "proposal has not started."
    } else if (Date.now() > startTime) {
        // disabled = true
        end_date = "voting has ended " + new Date(startTime + proposal_lengths[kind]).toLocaleString()
    } else { 
        end_date = "proposal ends " + new Date(startTime + proposal_lengths[kind]).toLocaleString()
    }

    function voteYes() {
        contract.NewVoter(address)
        // contract.Vote()
        console.log('YES')
    }

    function voteNo() {
        console.log('NO')
    }

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
                                <Card.Text>
                                    {inFavorCount + " voters in favor"}
                                </Card.Text>
                                <Card.Text>
                                    {end_date}
                                </Card.Text>
                            </div>
                            <hr />
                            {address ? (
                                <div className="text-center">
                                    <Button className="vote-button-yes mx-2" onClick={voteYes} disabled={disabled}>Yes</Button>
                                    <Button className="vote-button-no mx-2" onClick={voteNo} disabled={disabled}>No</Button>
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
