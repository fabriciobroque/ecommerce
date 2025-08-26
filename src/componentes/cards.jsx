import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards(props) {
  return (
    <Container>
    <Row>
        <Col>
        <Card  style={{ width: '15rem' }}>
      <Card.Img  variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
         Preco R${props.preco}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
    </Row>
    </Container>
  );
}

export { Cards };