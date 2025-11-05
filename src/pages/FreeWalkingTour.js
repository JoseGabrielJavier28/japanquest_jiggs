import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FreeWalkingTour() {
  const navigate = useNavigate();

  return (
    <Container className="my-5 main-content" style={{ maxWidth: "900px" }}>
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <Image
            src="https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?auto=format&fit=crop&q=80&w=1170"
            alt="Free Walking Tour Osaka"
            fluid
            rounded
            className="shadow-sm"
          />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold mb-3 text-danger">Free Walking Tour Osaka</h2>
          <p><strong>Location:</strong> Osaka, Namba area to Shinsekai</p>
          <p><strong>Start Time:</strong> 10:00 AM</p>
          <p><strong>Duration:</strong> About 2.5 hours</p>
          <p><strong>Price:</strong> Free</p>
          <p><strong>Schedule:</strong> Every Tuesday and Friday</p>
          <p><strong>Language:</strong> English, Japanese</p>
          <p><strong>Included:</strong> Your guide is local from Osaka.</p>
          <p><strong>Participants:</strong> Minimum 5 participants</p>
          <p>
            <strong>Accessibility:</strong> Not fully wheelchair accessible due to
            crowded streets and narrow spaces.
          </p>
          <div className="mt-4">
            <Button
              className="btn-brown me-2"
              onClick={() => navigate("/booking", { state: { tour: "walking" } })}
            >
              Reserve Spot
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate(-1)}
            >
              Back to Tours
            </Button>
          </div>
        </Col>
      </Row>

      <div className="mt-5">
        <h4 className="fw-bold mb-3">What to Expect</h4>
        <p>
          Experience Osaka through the eyes of a local! Join our free walking tour
          and discover the heart of Osaka while learning about Japan’s fascinating
          culture, customs, and everyday life.
        </p>
        <p>
          Our local guide will share fun stories, cultural insights, and little-known
          facts about Osaka — from its vibrant history to its unique food culture and
          quirky traditions.
        </p>
        <p>
          We’ll stroll through lively shopping streets, hidden alleys, and local
          neighborhoods — the real Osaka you won’t find in a guidebook!
        </p>
      </div>
    </Container>
  );
}

export default FreeWalkingTour;
