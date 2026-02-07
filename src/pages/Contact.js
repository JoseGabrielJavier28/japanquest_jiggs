import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        // Clear form after success
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Connection error:", error);
      alert("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5 main-content" style={{ maxWidth: "600px" }}>
      <h2 className="fw-bold text-center mb-3" style={{ color: "#231816" }}>Contact Us</h2>
      <p className="text-center text-muted mb-4">
        Have questions or want to book directly? Send us a message or reach us through our socials below.
      </p>

      {submitted && (
        <Alert variant="success" className="text-center">
          Thank you! Your message has been sent successfully.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </Form.Group>

        <Button 
          type="submit" 
          className="w-100" 
          disabled={loading}
          style={{ backgroundColor: loading ? "#6c757d" : "#231816", border: "none", padding: "12px", fontWeight: "600" }}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </Form>

      <div className="text-center mt-4">
        <h5 className="mb-3">Connect with us</h5>
        <div className="d-flex justify-content-center gap-4">
          <a href="https://www.instagram.com/japanquest" target="_blank" rel="noopener noreferrer" className="text-danger fs-4"><FaInstagram /></a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-success fs-4"><FaWhatsapp /></a>
          <a href="https://www.facebook.com/japanquest" target="_blank" rel="noopener noreferrer" className="text-primary fs-4"><FaFacebook /></a>
        </div>
      </div>
    </Container>
  );
}

export default Contact;