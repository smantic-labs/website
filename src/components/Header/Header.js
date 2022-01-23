import { Navbar, Container } from 'react-bootstrap'
import LoginButton from './LoginButton/LoginButton';

function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Muichiro MC</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <LoginButton />
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
  
export default Header;