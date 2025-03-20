import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './Style/PopularStays.css';
import Matterhorn from '../assets/matterhorn.jpg';
import Discovery from '../assets/discovery.jpg';
import Arctic from '../assets/arctic.jpg';
import Lake from '../assets/lake.jpg';

const staysData = [
  {
    img: Matterhorn,
    title: "Matterhorn Suites",
    type: "Entire bungalow",
    price: "$575/night",
    rating: "4.9",
    reviews: "60 reviews"
  },
  {
    img: Discovery,
    title: "Discovery Shores",
    type: "2-Story beachfront suite",
    price: "$360/night",
    rating: "4.8",
    reviews: "116 reviews"
  },
  {
    img: Arctic,
    title: "Arctic Hut",
    type: "Single deluxe hut",
    price: "$420/night",
    rating: "4.7",
    reviews: "78 reviews"
  },
  {
    img: Lake,
    title: "Lake Louise Inn",
    type: "Deluxe King Room",
    price: "$244/night",
    rating: "4.6",
    reviews: "63 reviews"
  },
];

const PopularStays = () => {
  return (
    <div className="popular-stays px-5 py-5">
      <Row className="header-row">
        <Col><h2 className="section-title">Popular Stays</h2></Col>
        <Col className="text-end"><span className="view-all">View all stays →</span></Col>
      </Row>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {staysData.map((stay, index) => (
          <Col key={index} className="d-flex justify-content-center">
            <Card className="stay-card h-100">
              <Card.Img variant="top" src={stay.img} className="stay-img" />
              <Card.Body>
                <div className="stay-type-container">
                  <p className="stay-type">{stay.type}</p>
                  <i className="fas fa-play-circle video-icon"></i>
                </div>
                <h5 className="stay-title">{stay.title}</h5>
                <p className="stay-price">{stay.price}</p>
                <div className="rating">
                  ⭐ {stay.rating} <span className="reviews">({stay.reviews})</span>
                </div>
                <Button variant="outline-primary" className="mt-3 w-100">MORE DETAILS</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PopularStays;
