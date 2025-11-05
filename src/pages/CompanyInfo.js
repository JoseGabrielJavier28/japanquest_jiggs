import React from "react";
import { Container } from "react-bootstrap";

function CompanyInfo() {
  return (
    <Container className="my-5 text-center main-content">
      <h2 className="fw-bold text-primary mb-3">Company Information</h2>

      <p className="text-muted">
        <strong>Company Name:</strong> Japan Quest <br />
        <strong>Business Type:</strong> Travel & Tour Operator (Local Experiences & Cultural, Food Tours in Japan) <br />
        <strong>Representatives:</strong> Ryu Fuchino and Taketo Suzuki <br />
        <strong>Location:</strong> Osaka, Japan <br />
        <strong>Email:</strong> localtourinjapan@gmail.com <br />
        <strong>Website:</strong> Coming Soon
      </p>

      <p className="text-muted">
        Japan Quest provides guided local tours and cultural experiences across Japan. 
        Our mission is to connect travelers with authentic Japanese culture, 
        local communities, and unforgettable memories through small-group tours, 
        personalized itineraries, and warm hospitality.
      </p>
    </Container>
  );
}

export default CompanyInfo;
