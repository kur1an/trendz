import { Card, Button, Container, Row, Col, CardImg } from "react-bootstrap";
import "./Caro.css";
import { Link } from "react-router-dom";

function ControlledCarousel({ products,handleCartCountIncrement }) {
  return (
    <Container className="mt-3">
     <Row>
  {products.map((product) => (
    <Col sm={12} md={6} lg={2}  key={product.id}>
      <Card className="product-card">
        <Link to={`/products/${product.id}`} className="text-decoration-none">
          <CardImg 
            variant="top" 
            src={product.productImage} 
            className="img-fluid" 
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>{product.productDiscripption}</Card.Text>
          </Card.Body>
        </Link>
        <Button 
          variant="primary" 
          className="mt-3" 
          onClick={handleCartCountIncrement}
        >
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
