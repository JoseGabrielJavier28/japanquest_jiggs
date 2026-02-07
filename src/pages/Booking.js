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
  const [loading, setLoading] = useState(false);

  // --- IMPROVED LOCAL DATE LOGIC ---
  // This gets the date in YYYY-MM-DD based on the user's local clock, not UTC.
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    
    // Prevent manual entry of past dates
    if (selectedDate < today) {
      alert("You cannot select a date in the past.");
      setFormData({ ...formData, date: "" });
      return;
    }

    if (formData.tour === "walking") {
      const dateObj = new Date(selectedDate);
      const day = dateObj.getUTCDay(); // 2 = Tue, 5 = Fri
      if (day !== 2 && day !== 5) {
        alert("The Free Walking Tour is ONLY available on Tuesdays and Fridays.");
        setFormData({ ...formData, date: "" });
        return;
      }
    }
    setFormData({ ...formData, date: selectedDate });
  };

  const sendEmailNotification = (data) => {
    const isFree = data.tour === "walking";
    const payload = {
      ...data,
      statusNote: isFree 
        ? "This is a FREE tour booking. No Square payment is expected."
        : "Payment is still pending. Please wait for the Square email notification for final confirmation."
    };

    fetch("http://localhost:5000/send-booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(error => console.error("Email server error:", error));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "date") {
      handleDateChange(e);
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFree = formData.tour === "walking";
    const confirmMessage = isFree 
      ? `Confirm free booking for ${formData.date}?`
      : `Proceed to payment for Tenma Bar Hopping?`;

    if (!window.confirm(confirmMessage)) return; 

    setLoading(true);

    const squareLinks = {
      tenma: {
        private: {
          1: "https://square.link/u/jkc1u9q4", 2: "https://square.link/u/QowX1pBm",
          3: "https://square.link/u/Yyqr2fte", 4: "https://square.link/u/4pGGmYXW",
          5: "https://square.link/u/GeFMntYn", 6: "https://square.link.to/private-6",
          7: "https://square.link.to/private-7",
        },
        group: {
          3: "https://square.link/u/4Egrm4lF?src=sheet", 4: "https://square.link.to/group-4",
          5: "https://square.link.to/group-5", 6: "https://square.link.to/group-6",
          7: "https://square.link.to/group-7", 8: "https://square.link.to/group-8",
        },
      },
      walking: {
        free: "https://square.link.to/u/free-walking-tour", 
      },
    };

    let redirectLink = "";
    if (formData.tour === "tenma") {
      redirectLink = formData.privateTour 
        ? squareLinks.tenma.private[formData.groupSize] 
        : squareLinks.tenma.group[formData.groupSize];
    } else if (formData.tour === "walking") {
      redirectLink = squareLinks.walking.free;
    }

    if (redirectLink) {
      sendEmailNotification(formData);
      setSubmitted(true);
      setLoading(false);
      window.open(redirectLink, "_blank");
    } else {
      alert("Link not found.");
      setLoading(false);
    }
  };

  return (
    <Container className="my-5 d-flex justify-content-center main-content">
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <h2 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#231816", fontWeight: 600 }}>
          Book Your Tour
        </h2>

        {submitted && (
          <Alert variant="success">
            <strong>{formData.tour === 'walking' ? 'Booking Confirmed!' : 'Success!'}</strong> 
            {formData.tour === 'walking' ? ' Request received.' : ' Complete payment in the new tab.'}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required disabled={submitted}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required disabled={submitted}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Tour</Form.Label>
            <Form.Select name="tour" value={formData.tour} onChange={handleChange} required disabled={submitted}>
              <option value="">Choose a tour</option>
              <option value="tenma">Tenma Bar Hopping Night — Osaka</option>
              <option value="walking">Free Walking Tour — Osaka</option>
            </Form.Select>
          </Form.Group>

          {formData.tour && (
             <div className="p-3 mb-3" style={{ backgroundColor: "#f8f9fa", borderRadius: "8px", fontSize: "0.9rem", borderLeft: "4px solid #231816" }}>
                {formData.tour === 'tenma' ? (
                  <><strong>Tenma Bar Hopping:</strong><br/>⏱ ~2.5h | 👥 3–8 people | 🕒 5:30/8:30 PM</>
                ) : (
                  <><strong>Free Walking Tour:</strong><br/>📍 Namba to Shinsekai | 🕙 10:00 AM<br/>📅 <strong>Available Tue & Fri</strong> | 💰 FREE</>
                )}
             </div>
          )}

          {formData.tour === "tenma" && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="date" name="date" min={today} value={formData.date} onChange={handleChange} required disabled={submitted} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Time Slot</Form.Label>
                <Form.Select name="timeSlot" value={formData.timeSlot} onChange={handleChange} required disabled={submitted}>
                  <option value="">Choose a time</option>
                  <option value="5:30 PM">5:30 PM – 8:00 PM</option>
                  <option value="8:30 PM">8:30 PM – 11:00 PM</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" name="privateTour" label="Request a Private Tour" checked={formData.privateTour} onChange={handleChange} disabled={submitted}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Number of Travelers</Form.Label>
                <Form.Control type="number" name="groupSize" value={formData.groupSize} onChange={handleChange} min={formData.privateTour ? 1 : 3} max={8} required disabled={submitted}/>
              </Form.Group>
            </>
          )}

          {formData.tour === "walking" && (
            <Form.Group className="mb-3">
              <Form.Label>Select Date (Tuesdays & Fridays only)</Form.Label>
              <Form.Control type="date" name="date" min={today} value={formData.date} onChange={handleChange} required disabled={submitted} />
            </Form.Group>
          )}

          <div className="d-flex justify-content-center mb-3">
            <Button 
              type="submit" 
              disabled={loading || submitted} 
              style={{ width: "100%", backgroundColor: (loading || submitted) ? "#6c757d" : "#231816", border: "none", fontWeight: 600, padding: "12px" }}
            >
              {loading ? "Processing..." : 
               submitted ? "Done" : 
               formData.tour === "walking" ? "Confirm Free Booking" : "Proceed to Payment"}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Booking;