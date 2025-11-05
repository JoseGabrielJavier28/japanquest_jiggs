import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tour: "",
    date: "",
    groupSize: 1,
    privateTour: false,
    timeSlot: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Example: Square links mapping
    const squareLinks = {
      tenma: {
        private: {
          1: "https://square.link/u/jkc1u9q4",
          2: "https://square.link/u/QowX1pBm",
          3: "https://square.link/u/Yyqr2fte",
          4: "https://square.link/u/4pGGmYXW",
          5: "https://square.link/u/GeFMntYn",
          6: "https://square.link.to/private-6",
          7: "https://square.link.to/private-7",
        },
        group: {
          3: "https://square.link/u/4Egrm4lF?src=sheet",
          4: "https://square.link.to/group-4",
          5: "https://square.link.to/group-5",
          6: "https://square.link.to/group-6",
          7: "https://square.link.to/group-7",
          8: "https://square.link.to/group-8",
        },
      },
      walking: {
        free: "https://square.link.to/free-walking-tour", // free tour
      },
    };

    let redirectLink = "";

    if (formData.tour === "tenma") {
      if (formData.privateTour) {
        redirectLink = squareLinks.tenma.private[formData.groupSize] || "";
      } else {
        redirectLink = squareLinks.tenma.group[formData.groupSize] || "";
      }
    } else if (formData.tour === "walking") {
      redirectLink = squareLinks.walking.free;
    }

    if (redirectLink) {
      window.location.href = redirectLink;
    } else {
      alert(
        "Sorry, we do not have a payment link for this selection. Please contact us."
      );
    }
  };

  return (
    <Container className="my-5 d-flex justify-content-center main-content">
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: "#231816",
            fontWeight: 600,
          }}
        >
          Book Your Tour
        </h2>

        {submitted && (
          <Alert variant="success">Redirecting to payment...</Alert>
        )}

        <Form onSubmit={handleSubmit}>
          {/* Name */}
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Tour selection */}
          <Form.Group className="mb-3">
            <Form.Label>Select Tour</Form.Label>
            <Form.Select
              name="tour"
              value={formData.tour}
              onChange={handleChange}
              required
            >
              <option value="">Choose a tour</option>
              <option value="tenma">Tenma Bar Hopping Night — Osaka</option>
              <option value="walking">Free Walking Tour — Osaka</option>
            </Form.Select>
          </Form.Group>

          {/* Private Tour checkbox */}
          {formData.tour === "tenma" && (
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="privateTour"
                label="Request a Private Tour"
                checked={formData.privateTour}
                onChange={handleChange}
              />
            </Form.Group>
          )}

          {/* Number of Travelers */}
          {formData.tour === "tenma" && (
            <Form.Group className="mb-3">
              <Form.Label>Number of Travelers</Form.Label>
              <Form.Control
                type="number"
                name="groupSize"
                value={formData.groupSize}
                onChange={handleChange}
                min={formData.privateTour ? 1 : 3}
                max={formData.privateTour ? 7 : 8}
                required
              />
            </Form.Group>
          )}

          {/* Date for walking tour */}
          {formData.tour === "walking" && (
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}

          <div className="d-flex justify-content-center mb-3">
            <Button
              className="btn-brown"
              type="submit"
              style={{
                marginTop: "5%",
                width: "45%",
                backgroundColor: "#231816",
                border: "none",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#3a1f18")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#231816")}
            >
              Proceed to Payment
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Booking;
