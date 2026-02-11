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

  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate < today) {
      alert("You cannot select a date in the past.");
      setFormData({ ...formData, date: "" });
      return;
    }
    if (formData.tour === "walking") {
      const dateObj = new Date(selectedDate);
      const day = dateObj.getUTCDay();
      if (day !== 2 && day !== 5) {
        alert(
          "The Free Walking Tour is ONLY available on Tuesdays and Fridays.",
        );
        setFormData({ ...formData, date: "" });
        return;
      }
    }
    setFormData({ ...formData, date: selectedDate });
  };

  // --- GOOGLE FORM INTEGRATION ---
  const sendToGoogleForm = async (data) => {
    const submissionDate = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    let formUrl = "";
    const googleData = new URLSearchParams();

    if (data.tour === "tenma") {
      // FORM 1: TENMA BAR HOPPING
      formUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSc5947DDwCfwREX08NrSfs2-nH48KdtY9cfvwDfljzYJu1EIQ/formResponse";
      googleData.append("entry.79471009", data.name);
      googleData.append("entry.1719761164", data.email);
      googleData.append("entry.1389155829", data.date);
      googleData.append("entry.2027171167", data.timeSlot);
      googleData.append("entry.432402181", data.privateTour ? "Yes" : "No");
      googleData.append("entry.1156383252", data.groupSize);
      googleData.append("entry.1662989323", submissionDate);
    } else {
      // FORM 2: FREE WALKING TOUR
      formUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSfwVbvB56VO1WI8dUOVs1fVZxGAv90In-okchs4nHA468Vb5w/formResponse";
      googleData.append("entry.512572047", data.name); // Name
      googleData.append("entry.1446887812", data.email); // Email
      googleData.append("entry.25529223", data.date); // Date
      googleData.append("entry.382527739", submissionDate); // Submission Date
    }

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: googleData.toString(),
      });
    } catch (error) {
      console.error("Google Form Error:", error);
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFree = formData.tour === "walking";
    const confirmMessage = isFree
      ? `Confirm free booking for ${formData.date}?`
      : `Proceed to payment for Tenma Bar Hopping?`;

    if (!window.confirm(confirmMessage)) return;

    // 1. DETERMINE LINK FIRST

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
          8: "https://square.link.to/private-8",
        },
        group: {
          3: "https://square.link/u/4Egrm4lF",
          4: "https://square.link.to/group-4",
          5: "https://square.link.to/group-5",
          6: "https://square.link.to/group-6",
          7: "https://square.link.to/group-7",
          8: "https://square.link.to/group-8",
        },
      },
      walking: {
        free: "https://square.link.to/free-walking-tour",
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

    if (!redirectLink) {
      alert("Link not found for this group size.");
      return;
    }

    // 2. OPEN TAB IMMEDIATELY (Safari needs this to be synchronous with the click)
    // We open a blank window first.
    const newWindow = window.open("about:blank", "_blank");

    setLoading(true);

    try {
      // 3. DO YOUR ASYNC WORK
      await sendToGoogleForm(formData);

      setSubmitted(true);
      setLoading(false);

      // 4. REDIRECT THE ALREADY OPENED TAB
      if (newWindow) {
        newWindow.location.href = redirectLink;
      }
    } catch (error) {
      console.error("Submission failed", error);
      if (newWindow) newWindow.close(); // Close it if something went wrong
      setLoading(false);
    }
  };

  return (
    <Container className="my-5 d-flex justify-content-center main-content">
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <h2
          className="text-center mb-4"
          style={{ color: "#231816", fontWeight: 600 }}
        >
          Book Your Tour
        </h2>

        {submitted && (
          <Alert variant="success">
            <strong>
              {formData.tour === "walking" ? "Booking Confirmed!" : "Success!"}
            </strong>
            {formData.tour === "walking"
              ? " Request received."
              : " Complete payment in the new tab."}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={submitted}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={submitted}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Tour</Form.Label>
            <Form.Select
              name="tour"
              value={formData.tour}
              onChange={handleChange}
              required
              disabled={submitted}
            >
              <option value="">Choose a tour</option>
              <option value="tenma">Tenma Bar Hopping Night — Osaka</option>
              <option value="walking">Free Walking Tour — Osaka</option>
            </Form.Select>
          </Form.Group>

          {formData.tour && (
            <div
              className="p-3 mb-3"
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                fontSize: "0.9rem",
                borderLeft: "4px solid #231816",
              }}
            >
              {formData.tour === "tenma" ? (
                <>
                  <strong>Tenma Bar Hopping:</strong>
                  <br />⏱ ~2.5h | 👥 3–8 people | 🕒 5:30/8:30 PM
                </>
              ) : (
                <>
                  <strong>Free Walking Tour:</strong>
                  <br />
                  📍 Namba to Shinsekai | 🕙 10:00 AM
                  <br />
                  📅 <strong>Available Tue & Fri</strong> | 💰 FREE
                </>
              )}
            </div>
          )}

          {formData.tour === "tenma" && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  required
                  disabled={submitted}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Time Slot</Form.Label>
                <Form.Select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  required
                  disabled={submitted}
                >
                  <option value="">Choose a time</option>
                  <option value="5:30 PM">5:30 PM – 8:00 PM</option>
                  <option value="8:30 PM">8:30 PM – 11:00 PM</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  name="privateTour"
                  label="Request a Private Tour"
                  checked={formData.privateTour}
                  onChange={handleChange}
                  disabled={submitted}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Number of Travelers</Form.Label>
                <Form.Control
                  type="number"
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleChange}
                  min={formData.privateTour ? 1 : 3}
                  max={8}
                  required
                  disabled={submitted}
                />
              </Form.Group>
            </>
          )}

          {formData.tour === "walking" && (
            <Form.Group className="mb-3">
              <Form.Label>Select Date (Tuesdays & Fridays only)</Form.Label>
              <Form.Control
                type="date"
                name="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
                required
                disabled={submitted}
              />
            </Form.Group>
          )}

          <div className="d-flex justify-content-center mb-3">
            <Button
              type="submit"
              disabled={loading || submitted}
              style={{
                width: "100%",
                backgroundColor: loading || submitted ? "#6c757d" : "#231816",
                border: "none",
                fontWeight: 600,
                padding: "12px",
              }}
            >
              {loading
                ? "Processing..."
                : submitted
                  ? "Done"
                  : formData.tour === "walking"
                    ? "Confirm Free Booking"
                    : "Proceed to Payment"}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Booking;
