import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      country: "Australia",
      comment:
        "The Tenma Bar Hopping tour was the highlight of my Japan trip! The guide was friendly and showed us hidden gems we’d never find on our own.",
      image: "images/photo5.jpg",
    },
    {
      name: "Carlos D.",
      country: "Spain",
      comment:
        "I joined the Osaka free walking tour — amazing experience! Learned so much about local life and culture. Totally recommend Japan Quest!",
      image: "images/photo4.jpg",
    },
    {
      name: "Emma L.",
      country: "UK",
      comment:
        "Such a fun night with locals! The izakayas were cozy, the food was great, and I met new friends from around the world.",
      image: "images/photo3.jpg",
    },
    {
      name: "Liam T.",
      country: "Canada",
      comment:
        "Our Kyoto cultural tour was incredible. The guide shared so many stories behind the temples and traditions. Highly recommended!",
      image: "images/photo6.jpg",
    },
    {
      name: "Hannah K.",
      country: "USA",
      comment:
        "The street food tour was a dream come true! I tried dishes I’d never have known about. Thank you Japan Quest for the tasty memories!",
      image: "images/photo7.jpg",
    },
    {
      name: "Yuna S.",
      country: "South Korea",
      comment:
        "Such warm hospitality! The tour felt personal and authentic — I felt like I was exploring Japan with friends.",
      image: "images/photo8.jpg",
    },
    {
      name: "Marco F.",
      country: "Italy",
      comment:
        "I loved the Osaka night walk! The city comes alive after dark, and our guide was so knowledgeable and fun.",
      image: "images/photo9.jpg",
    },
    {
      name: "Clara R.",
      country: "France",
      comment:
        "Japan Quest made my solo trip unforgettable. Everything was organized perfectly, and the group atmosphere was amazing!",
      image: "images/photo10.jpg",
    },
    {
      name: "David P.",
      country: "New Zealand",
      comment:
        "A fantastic way to discover real Japan beyond the tourist spots. The guides are passionate and truly love what they do.",
      image: "images/photo11.jpg",
    },
  ];

  return (
    <Container className="my-5 main-content">
      <h2 className="text-center fw-bold mb-4">What Our Guests Say</h2>
      <p className="text-center text-muted mb-5">
        Real experiences from travelers who explored Japan with us 🇯🇵
      </p>
      <Row>
        {reviews.map((review, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              {/* Large image at top */}
              <Card.Img
                variant="top"
                src={review.image}
                alt={review.name}
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                }}
              />
              <Card.Body className="text-center">
                <Card.Text className="fst-italic mt-3">“{review.comment}”</Card.Text>
                <hr />
                <h6 className="mb-0 fw-bold text-primary">{review.name}</h6>
                <small className="text-muted">{review.country}</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Testimonials;
