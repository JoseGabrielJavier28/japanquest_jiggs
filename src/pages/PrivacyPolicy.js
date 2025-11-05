import React from "react";
import { Container } from "react-bootstrap";

function PrivacyPolicy() {
  return (
    <Container className="my-5 text-start main-content">
      <h2 className="fw-bold text-primary mb-3 text-center">Privacy Policy</h2>
      <p className="text-muted">
        At Japan Quest, we respect your privacy. We collect personal information (like name and email)
        only for booking and communication purposes.
      </p>
      <p className="text-muted">
        We do not share your data with third parties. Your payment information is processed securely
        through our trusted partners.
      </p>
      <p className="text-muted">
        For questions about our privacy practices, please contact us at:
        <strong> localtourinjapan@gmail.com</strong>.
      </p>
    </Container>
  );
}

export default PrivacyPolicy;
