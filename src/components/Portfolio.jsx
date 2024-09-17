import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import './Portfolio.css'; 
import pic from '../assets/image1.png';
import picture from '../assets/image2.png';
import img from '../assets/image3.png';
import photo from '../assets/boyphoto.jpg';

const Portfolio = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id="home" className="hero-section">
        <Container className="text-center">
          <Row>
            <Col>
              <h1>Welcome to My Portfolio</h1>
              <p>Hi, I'm Muhammed Aflah .K. I'm a Full Stack Devaloper.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="about" className="about-section">
        <Container>
          <Row>
            <Col md={6}>
              <h2>About Me</h2>
              <p>Brief introduction about yourself. Describe your skills, experience, and interests.</p>
            </Col>
            <Col md={6}>
              <img src={photo} alt="About Me" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="projects" className="projects-section">
        <Container>
          <h2 className="text-center">My Projects</h2>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img className='visual' variant="top" src={img} />
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>Short description of the project.</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img className='visual' variant="top" src={ picture}/>
                <Card.Body>
                  <Card.Title>Project 2</Card.Title>
                  <Card.Text>Short description of the project.</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img className='visual' variant="top" src={pic} />
                <Card.Body>
                  <Card.Title>Project 3</Card.Title>
                  <Card.Text>Short description of the project.</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="contact" className="contact-section">
        <Container>
          <h2 className="text-center">Contact Me</h2>
          <Row>
            <Col md={6}>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <Button variant="primary" type="submit">Send</Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="footer">
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; {new Date().getFullYear()}Portfolio. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Portfolio;
