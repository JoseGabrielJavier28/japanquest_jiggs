import React, { useState } from "react";
import { Container, Button, Alert, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const bookingData = location.state?.formData;

  const [paid, setPaid] = useState(false);

  if (!bookingData) {
    return (
      <Container className="my-5 text-center">
        <h2>No booking data found</h2>
        <p>Please go back and select a tour.</p>
      </Container>
    );
  }

  // Paid tour details
  const groupTourData = {
    name: "Tenma Bar Hopping Night — Osaka",
    duration: "About 2.5 hours",
    timeSlots: ["5:30 PM – 8:00 PM", "8:30 PM – 11:00 PM"],
    groupSize: "3–8 people",
    pricing: [
      { participants: 1, perPerson: 20000, total: 20000 },
      { participants: 2, perPerson: 15000, total: 30000 },
      { participants: 3, perPerson: 12500, total: 37500 },
      { participants: 4, perPerson: 10000, total: 40000 },
      { participants: 5, perPerson: 10000, total: 50000 },
      { participants: 6, perPerson: 10000, total: 60000 },
    ],
  };

  // Free walking tour details
  const freeTourData = {
    name: "Free Walking Tour — Osaka",
    duration: "About 2.5 hours",
    time: "10:00 AM",
    days: "Every Tuesday and Friday",
    language: "English, Japanese",
    inclusion: "Guided by a local Osaka resident. Minimum 5 participants required.",
    price: "Free",
  };

  const handlePayment = () => {
    setTimeout(() => setPaid(true), 1000);
  };

  const isPaidTour = bookingData.tour === "tenma";

  return (
    <Container className="my-5" style={{ maxWidth: "700px" }}>
      <h2 className="text-center fw-bold mb-4">
        {isPaidTour ? "Group / Private Tour Payment" : "Free Walking Tour Reservation"}
      </h2>

      {!paid ? (
        <>
          <p className="text-center text-muted">
            {isPaidTour
              ? "Review your booking details below and proceed with secure payment."
              : "This tour is completely free! Review your details and confirm your reservation below."}
          </p>

          {/* Tour details */}
          {isPaidTour ? (
            <div className="mb-4">
              <p><strong>Tour Name:</strong> {groupTourData.name}</p>
              <p><strong>Duration:</strong> {groupTourData.duration}</p>
              <p><strong>Time Slots:</strong> {groupTourData.timeSlots.join(", ")}</p>
              <p><strong>Group Size:</strong> {groupTourData.groupSize}</p>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Participants</th>
                    <th>Price per Person (¥)</th>
                    <th>Total Price (¥)</th>
                  </tr>
                </thead>
                <tbody>
                  {groupTourData.pricing.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.participants}</td>
                      <td>{row.perPerson.toLocaleString()}</td>
                      <td>{row.total.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>7+</td>
                    <td colSpan={2}>Please contact us directly</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="mb-4">
              <p><strong>Tour Name:</strong> {freeTourData.name}</p>
              <p><strong>Duration:</strong> {freeTourData.duration}</p>
              <p><strong>Time:</strong> {freeTourData.time}</p>
              <p><strong>Days:</strong> {freeTourData.days}</p>
              <p><strong>Language:</strong> {freeTourData.language}</p>
              <p><strong>Inclusion:</strong> {freeTourData.inclusion}</p>
              <p><strong>Price:</strong> {freeTourData.price}</p>
            </div>
          )}

          <div className="text-center">
            {isPaidTour ? (
              <Button className="btn-brown" size="lg" onClick={handlePayment}>
                Pay Now (Test)
              </Button>
            ) : (
              <Button className="btn-brown" size="lg" onClick={() => setPaid(true)}>
                Confirm Reservation
              </Button>
            )}
          </div>
        </>
      ) : (
        <Alert variant="success" className="text-center mt-4">
          🎉 {isPaidTour ? "Payment successful!" : "Reservation confirmed!"}
          <br />
          Thank you for booking with <strong>Japan Quest</strong>.<br />
          A confirmation email will be sent shortly.
        </Alert>
      )}
    </Container>
  );
}

export default Payment;
