// Our components
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

// Bootstrap
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container fluid>
      <Header />

      <Body />
            
      <Footer />
    </Container>
  );
}

export default App;
