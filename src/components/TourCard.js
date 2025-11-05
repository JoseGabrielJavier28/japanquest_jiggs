import { useNavigate } from 'react-router-dom';

function Tours() {
  const navigate = useNavigate();

  const handleViewPrices = (tour) => {
    navigate('/pricing', { state: { tour } });
  };

  return (
    <Container className="my-5 text-center">
      <h2
        className="fw-bold py-3 px-4 rounded"
        style={{
          fontSize: '2.8rem',
          color: 'white',
          backgroundColor: '#dc3545',
          display: 'inline-block',
          boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
        }}
      >
        Our Tours
      </h2>

      <Row className="mt-4">
        {/* Tenma Bar Hopping */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Carousel>
              {/* carousel items */}
            </Carousel>
            <Card.Body>
              <Card.Title className="text-danger">
                Tenma Bar Hopping Night
              </Card.Title>
              <Card.Text>
                Join us for a fun night out in Tenma...
              </Card.Text>
              <Button
                variant="info"
                onClick={() => handleViewPrices({ id: 'tenma', name: 'Tenma Bar Hopping Night' })}
                className="me-2"
              >
                View Prices
              </Button>
              <Button as={Link} to="/booking" variant="primary">
                Book Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Free Walking Tour */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Carousel>
              {/* carousel items */}
            </Carousel>
            <Card.Body>
              <Card.Title className="text-danger">
                Free Walking Tour
              </Card.Title>
              <Card.Text>
                Experience Osaka through the eyes of a local...
              </Card.Text>
              <Button
                variant="info"
                onClick={() => handleViewPrices({ id: 'walking', name: 'Free Walking Tour' })}
                className="me-2"
              >
                View Prices
              </Button>
              <Button as={Link} to="/booking" variant="primary">
                Reserve Spot
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
