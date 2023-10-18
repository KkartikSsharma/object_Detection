import './App.css';
import Profile from './Profile';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';

function App() {
  return (
    <div className="App" >
      <Header/>
      <header className="App-header" >
        <Container fluid="md" style={{backgroundImage:'https://pbs.twimg.com/profile_banners/1651818526510809089/1682668683/1500x500'}}>
          <Row>
            <Col>
              
            </Col>
            <Col>
              
            </Col>
          </Row>
          <Row>
            <Col>
              
            </Col>
          </Row>
        </Container>
        <Profile />
      </header>
    </div>
  );
}

export default App;
