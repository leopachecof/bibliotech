import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
          </Col>
          <Col md={4} className="text-center">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
          </Col>
          <Col md={4} className="text-center">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <p>Todos os direitos reservados © </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};







