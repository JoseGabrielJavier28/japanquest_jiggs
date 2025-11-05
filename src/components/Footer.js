import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="py-5"
      style={{
        background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('/images/tenma.jpg') center/cover no-repeat`,
        textAlign: "center",
      }}
    >
      <Container className="d-flex flex-column align-items-center">
        {/* Logo + Company Name + Tagline */}
        <Image
          src="/images/logo.png"
          alt="Japan Quest Logo"
          width={80}
          height={80}
          roundedCircle
          className="mb-3"
          style={{ objectFit: "cover" }}
        />
        <h5
          className="fw-bold mb-1"
          style={{
            color: "#231816",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Japan Quest
        </h5>
        <p
          className="mb-3 text-muted fst-italic"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Explore Japan Like a Local
        </p>

        {/* Social Links */}
        <div className="mb-3">
          {[
            { name: "Instagram", href: "https://www.instagram.com/localtourinjapan", color: "#E1306C" },
            { name: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=818020121916&text&type=phone_number&app_absent=0", color: "#25D366" },
            { name: "Facebook", href: "https://www.facebook.com", color: "#1877F2" },
            { name: "Email", href: "mailto:localtourinjapan@gmail.com", color: "#D44638" },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 fw-semibold"
              style={{
                color: link.color,
                textDecoration: "none",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Legal Links */}
        <div className="mb-2">
          <Link
            to="/company"
            className="text-decoration-none text-muted mx-2"
            style={{ transition: "color 0.3s" }}
            onMouseOver={(e) => (e.target.style.color = "#231816")}
            onMouseOut={(e) => (e.target.style.color = "#6c757d")}
          >
            Company Info
          </Link>
          <Link
            to="/privacy"
            className="text-decoration-none text-muted mx-2"
            style={{ transition: "color 0.3s" }}
            onMouseOver={(e) => (e.target.style.color = "#231816")}
            onMouseOut={(e) => (e.target.style.color = "#6c757d")}
          >
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-muted small mb-0">
          © {new Date().getFullYear()} Japan Quest. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
