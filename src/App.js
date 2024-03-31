import logo from './logo.svg';
import './App.css';
import { ChartComponent } from './Components/ChartComponent/ChartComponent ';
import Badge from 'react-bootstrap/Badge';
import TableComponent from './Components/TableComponent/TableComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/HeaderComponent/Header';
import { Col, Container, Row } from 'react-bootstrap';


function App() {
  return (

    <div className='app'>
      <Header></Header>
      <Container className='mt-5'>
        <Row>
          <Col>
            <ChartComponent></ChartComponent>
          </Col>
          <Col>
            <TableComponent></TableComponent>
          </Col>
        </Row>
      </Container>

    </div>

  );
}

export default App;
