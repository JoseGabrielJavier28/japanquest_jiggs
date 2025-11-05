import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div className="bg-light text-center py-5">
      
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Tours */}
      <Container className="py-5 main-content ">
        <h2 className="fw-bold mb-4">Featured Experiences</h2>
        <Row className="justify-content-center">

          <Col md={5} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src="https://maido-storage.oss-cn-hongkong.aliyuncs.com/maido/uploads/2022/11/temma-izakaya-img02-01.jpg"
                alt="Tenma Bar Hopping Night"
              />
              <Card.Body>
                <Card.Title>Tenma Bar Hopping Night — Osaka</Card.Title>
                <Card.Text>
                  Visit hidden bars and enjoy Osaka’s nightlife with locals. Includes drinks, food, and fun company!
                </Card.Text>
                <Button as={Link} to="/tours/tenma"  className="btn-brown">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={5} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src="https://freetourcommunity.com/wp-content/uploads/2020/10/free_tour_osaka_1.jpg"
                alt="Free Walking Tour Osaka"
              />
              <Card.Body>
                <Card.Title>Free Walking Tour — Osaka</Card.Title>
                <Card.Text>
                  Explore Namba to Shinsekai with a local guide. Discover Osaka’s history, culture, and hidden gems.
                </Card.Text>
                <Button as={Link} to="/tours/free-walking-tour"  className="btn-brown">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* Contact CTA Section */}
      <div
        className="py-5 text-white rounded-4"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/place4.jpg') center/cover",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <h3>Ready to explore Japan?</h3>
          <p>Contact us via Instagram, WhatsApp, or Facebook to book your adventure.</p>
          <Button
            as={Link} to="/Contact"
            variant="light"
          >
            Contact Us
          </Button>
        </Container>
      </div>

    </div>
  );
}

export default Home;

