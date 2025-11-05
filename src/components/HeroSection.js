import React from "react";
import { Button, Container } from "react-bootstrap";

function HeroSection() {
  return (
    <div
      className="text-center d-flex align-items-center justify-content-center hero-section"
      style={{
        minHeight: "70vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
      }}
    >
      {/* Very subtle overlay to slightly improve readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.1)", // very light, almost transparent
        }}
      />

      <Container style={{ position: "relative", zIndex: 1 }}>
        <h1 className="display-4 fw-bold mb-3">Explore Japan Like a Local 🇯🇵</h1>
        <p className="lead mb-4">
          Authentic tours, cultural experiences, and unforgettable memories guided by locals.
        </p>
        <Button variant="danger" size="lg" href="/tours">
          View Tours
        </Button>
      </Container>
    </div>
  );
}

export default HeroSection;

