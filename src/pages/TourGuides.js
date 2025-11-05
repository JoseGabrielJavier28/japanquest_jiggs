import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function TourGuides() {
  return (
    <Container className="my-5 text-center main-content">
      <h2 className="fw-bold mb-4">Meet Our Tour Guides</h2>

      <Row className="justify-content-center">
        {/* Taketo’s Profile */}
        <Col md={5} className="mb-4">
          <Card className="border-0 shadow-sm h-100 p-3">
            <div className="d-flex justify-content-center mb-3">
              <img
                src="images/taketo.png"
                alt="Taketo Suzuki"
                style={{
                  width: "85%",
                  height: "auto",
                  borderRadius: "1rem",
                  objectFit: "contain",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            </div>
            <Card.Body className="text-start">
              <Card.Title className="fw-bold text-center mb-3">
                Taketo Suzuki
              </Card.Title>
              <Card.Text className="text-muted">
                <strong>Nationality:</strong> Japanese <br />
                <strong>Languages:</strong> Japanese, English, and Spanish <br />
                <strong>Hobbies:</strong> Soccer, Brazilian Jiu-Jitsu, Baseball, Travelling, Drinking occasionally.
              </Card.Text>
              <hr />
              <Card.Text className="text-muted">
                Hi! I’m <strong>Taketo</strong>, a local guide born and raised in <strong>Osaka</strong>.
                I love sharing the real Osaka — not just the famous spots, but the hidden alleys, cozy local bars, 
                and unique stories that make this city special. With my knowledge of Japan and Osaka’s history, culture, 
                and fun local tales, you’ll always discover something new along the way.
              </Card.Text>
              <Card.Text className="text-muted">
                My goal is to make you feel like you’re hanging out with a local friend, not just joining a tour.  
                Let’s explore together and discover the <strong>real Osaka!</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Ryu’s Profile (Dummy Info) */}
        <Col md={5} className="mb-4">
          <Card className="border-0 shadow-sm h-100 p-3">
            <div className="d-flex justify-content-center mb-3">
              <img
                src="images/ryu.png"
                alt="Ryu Fuchino"
                style={{
                  width: "85%",
                  height: "auto",
                  borderRadius: "1rem",
                  objectFit: "contain",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            </div>
            <Card.Body className="text-start">
              <Card.Title className="fw-bold text-center mb-3">
                Ryu Fuchino
              </Card.Title>
              <Card.Text className="text-muted">
                <strong>Nationality:</strong> Japanese <br />
                <strong>Languages:</strong> Japanese and English <br />
                <strong>Hobbies:</strong> Photography, Hiking, Cooking, and Discovering Hidden Izakayas.
              </Card.Text>
              <hr />
              <Card.Text className="text-muted">
                Hey there! I’m <strong>Ryu</strong>, your friendly local guide from <strong>Osaka</strong>.
                I’ve been guiding travelers around Japan for several years and love introducing people 
                to the heart and soul of Japanese culture — from traditional food spots to local festivals. 
                My tours are casual, fun, and full of local insights you won’t find in guidebooks.
              </Card.Text>
              <Card.Text className="text-muted">
                Whether it’s your first time in Japan or your fifth, I’ll make sure you leave with new memories, 
                laughter, and a deeper appreciation for this amazing country.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TourGuides;
