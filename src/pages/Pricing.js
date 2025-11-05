// src/pages/Pricing.js
import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Pricing() {
  const location = useLocation();
  const tour = location.state?.tour;

  // Example data for each tour
  const toursData = {
    tenma: [
      { participants: '1 person', total: '¥20,000', perPerson: '¥20,000' },
      { participants: '2 people', total: '¥30,000', perPerson: '¥15,000' },
      { participants: '3 people', total: '¥37,500', perPerson: '¥12,500' },
      { participants: '4 people', total: '¥40,000', perPerson: '¥10,000' },
    ],
    walking: [
      { participants: 'Free Tour', total: '¥0', perPerson: '¥0' },
    ],
  };

  return (
    <Container className="my-5 main-content">
      <h2 className="text-center mb-4">{tour ? tour.name : 'Pricing'}</h2>

      {tour ? (
        <div className="mx-auto " style={{ maxWidth: '600px' }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Participants</th>
                <th>Total Price</th>
                <th>Price per Person</th>
              </tr>
            </thead>
            <tbody>
              {toursData[tour.id].map((row, index) => (
                <tr key={index}>
                  <td>{row.participants}</td>
                  <td>{row.total}</td>
                  <td>{row.perPerson}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <p className="text-center">No pricing available.</p>
      )}

      <div className="text-center mt-4">
        <Link to="/tours">
          <Button className="btn-brown">Back to Tours</Button>
        </Link>
      </div>
    </Container>
  );
}

export default Pricing;
