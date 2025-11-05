import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <Container className="my-5 text-center main-content">
      <h2 className="fw-bold mb-3 mt-3">About Japan Quest</h2>

      <Row className="align-items-center mt-5">
        <Col md={6}>
          <Image
            src="images/photo2.jpg"
            alt="Japan culture"
            fluid
            rounded
            className="shadow-sm mb-4 mb-md-0"
          />
        </Col>

        <Col md={6}>
          <p className="text-muted lead">
            Welcome to <strong>Japan Quest</strong> — your trusted local travel guide to
            authentic Japanese adventures. We connect curious travelers to Japan’s hidden
            gems, cultural experiences, and local delights.
          </p>
          <p className="text-muted">
            Our goal is to make every journey unforgettable by offering guided tours,
            food discoveries, and cultural experiences that go beyond the usual tourist spots.
          </p>
          <p className="text-muted mb-4">
            Join us to explore Japan like a local — with heart, history, and adventure.
          </p>

          {/* Animated "Book Now" Button */}
          <Button
            variant="danger"
            className="px-5 py-2 fw-semibold animated-book-btn"
            onClick={handleBookingClick}
          >
            Book Now
          </Button>
        </Col>
      </Row>

      {/* Inline animation styles */}
      <style jsx>{`
        .animated-book-btn {
          border-radius: 50px;
          box-shadow: 0 0 0 rgba(255, 0, 0, 0.4);
          animation: pulse 2s infinite;
          transition: all 0.3s ease-in-out;
        }
        .animated-book-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.6);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(255, 0, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
          }
        }
      `}</style>
    </Container>
  );
}

export default About;
