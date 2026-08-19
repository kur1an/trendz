import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import "./Caro.css";
import { Link } from "react-router-dom";

function ControlledCarousel({ products }) {
  return (
    <Container className="mt-3">
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} className="d-flex" key={product.id}>
            <Card className="product-card">
              <Link to={`/products/${product.id}`} className="text-decoration-none">
                <Image src={product.productImage} fluid />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.productName}</Card.Title>
                  <Card.Text>{product.productDiscripption}</Card.Text>
                </Card.Body>
              </Link>
              <Button variant="primary" className="mt-auto">
                Add to cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ControlledCarousel;
