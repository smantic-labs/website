import { Navbar, Container } from 'react-bootstrap'
import LoginButton from './LoginButton/LoginButton';
import CreateProposalButton from './CreateProposal/CreateProposalButton/CreateProposalButton';

function Header({address}) {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Muichiro MC</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='px-2'>
                        <CreateProposalButton address={address} />
                    </Navbar.Text>
                    <Navbar.Text className='px-4'>
                        <LoginButton address={address} />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
  
export default Header;