import React from 'react';
import { Container, Card, Button, Row, Col, Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Tours() {
  const navigate = useNavigate();

  const handleViewPrices = (tour) => {
    navigate('/pricing', { state: { tour } });
  };

  return (
    <Container className="my-5 text-center main-content">
      <h2 className="fw-bold mb-3 mt-3">Our Tours</h2>

      <Row className="mt-4">
        {/* Tenma Bar Hopping Tour */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1713925104997-2786602b1313?auto=format&fit=crop&q=80&w=1074"
                  alt="Tenma Bar Hopping 1"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1733693528303-09eb3b58443a?auto=format&fit=crop&q=80&w=685"
                  alt="Tenma Bar Hopping 2"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1713925105002-b65fe3c1c55d?auto=format&fit=crop&q=80&w=1074"
                  alt="Tenma Bar Hopping 3"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            </Carousel>

            <Card.Body>
              <Card.Title className="text-danger">Tenma Bar Hopping Night</Card.Title>
              <Card.Text>
                Join us for a fun night out in Tenma, one of Osaka’s most authentic bar-hopping districts!
              </Card.Text>

              <Button
                variant="info"
                onClick={() =>
                  handleViewPrices({ id: 'tenma', name: 'Tenma Bar Hopping Night' })
                }
                className="me-2 btn-brown"
              >
                View Prices
              </Button>
              <Button as={Link} to="/booking" variant="primary" className="btn-brown">
                Book Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Free Walking Tour — No Payment Needed */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?auto=format&fit=crop&q=80&w=1170"
                  alt="Free Walking Tour 1"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1499419819507-77191b8ec46e?auto=format&fit=crop&q=80&w=1170"
                  alt="Free Walking Tour 2"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://plus.unsplash.com/premium_photo-1664474450942-fcdaf3930b55?auto=format&fit=crop&q=80&w=1170"
                  alt="Free Walking Tour 3"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            </Carousel>

            <Card.Body>
              <Card.Title className="text-danger">Free Walking Tour — Osaka</Card.Title>
              <Card.Text>
                Experience Osaka through the eyes of a local! Discover the heart of the city, hidden spots, and cultural gems — completely free of charge.
              </Card.Text>

              <Button as={Link} to="/booking" variant="primary" className="btn-brown">
                Reserve Spot (Free)
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Tours;
