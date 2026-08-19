import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';

function Books({ booksData }) {
  return (
    <Container className="mt-3">
      <Row>
        {booksData.map((book, i) => (
          <Col sm={12} md={6} lg={4} xl={3} className="d-flex" key={i}>
            <Card className="book-card">
              <Image src={book.booksImage} fluid /> 

              <Card.Body className="d-flex flex-column">
                <Card.Title>{book.booksName}</Card.Title>

                <Card.Text>{book.booksDiscripption}</Card.Text>

                <Button variant="primary" className="mt-auto">
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Books;
