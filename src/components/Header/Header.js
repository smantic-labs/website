import { Navbar, Container } from 'react-bootstrap'

function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Muichiro MC</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
  
export default Header;