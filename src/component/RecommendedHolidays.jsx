import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Style/RecommendedHolidays.css';
import BaliImg from "../assets/bali.jpg";
import SwissImg from "../assets/swiss.jpg";
import BoracayImg from "../assets/boracay.jpg";
import PalawanImg from "../assets/palawan.jpg";
const holidaysData = [
  { img: BaliImg, title: "Bali", duration: "4D3N", price: "$899" },
  { img: SwissImg, title: "Swiss", duration: "6D5N", price: "$900" },
  { img: BoracayImg, title: "Boracay", duration: "5D4N", price: "$699" },
  { img: PalawanImg, title: "Palawan", duration: "4D3N", price: "$789" },
];

const RecommendedHolidays = () => {
  return (
    <div className="recommended-holidays">
      <div className="header-row">
        <h2 className="section-title">Recommended Holidays</h2>
        <p className="view-all">View all holidays →</p>
      </div>

      <Row xs={1} md={2} lg={4} className="g-4">
        {holidaysData.map((holiday, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={holiday.img} className="card-img-top" />
              <Card.Body>
                <div className="card-content">
                  <div className="text-info">
                    <Card.Title>{holiday.title}</Card.Title>
                    <Card.Text>{holiday.duration}</Card.Text>
                  </div>
                  <div className="price">{holiday.price}</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RecommendedHolidays;
