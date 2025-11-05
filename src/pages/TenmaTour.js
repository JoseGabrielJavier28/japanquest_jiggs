// src/pages/TenmaTour.js
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function TenmaTour() {
  const navigate = useNavigate();

  return (
    <Container className="my-5 main-content" style={{ maxWidth: "900px" }}>
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <Image
            src="https://maido-storage.oss-cn-hongkong.aliyuncs.com/maido/uploads/2022/11/temma-izakaya-img02-01.jpg"
            alt="Tenma Bar Hopping Night"
            fluid
            rounded
            className="shadow-sm"
          />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold mb-3 text-danger">Tenma Bar Hopping Night — Osaka</h2>
          <p><strong>Duration:</strong> About 2.5 hours</p>
          <p><strong>Start Time:</strong> 5:30 PM or 8:30 PM</p>
          <p><strong>Group Size:</strong> 3–8 people</p>
          <p><strong>Includes:</strong> Drinks, food, and guided bar-hopping experience</p>
          <p><strong>Language:</strong> English, Japanese</p>

          <div className="mt-4">
            <Button
              className="btn-brown me-2"
              onClick={() => navigate("/pricing", { state: { tour: "tenma" } })}
            >
              View Prices
            </Button>
            <Button
              className="btn-brown"
              onClick={() => navigate("/booking", { state: { tour: "tenma" } })}
            >
              Book Now
            </Button>
          </div>
        </Col>
      </Row>

      <div className="mt-5">
        <h4 className="fw-bold mb-3">Experience Osaka’s Hidden Bar Scene</h4>
        <p>
          Discover Osaka’s lively nightlife with our local guide! 
          You’ll visit cozy izakayas, hidden bars, and meet locals who make this city so special.
        </p>
        <p>
          Perfect for solo travelers, friends, or couples — this is an authentic and unforgettable experience of Osaka after dark.
        </p>
      </div>
    </Container>
  );
}

export default TenmaTour;
