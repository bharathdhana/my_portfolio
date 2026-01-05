import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';

const certificates = [
  { title: 'C++', link: '/certificates/C++.jpg' },
  { title: 'Canva Bootcamp', link: '/certificates/Canva Bootcamp.jpg' },
  { title: 'ChatGpt Bootcamp', link: '/certificates/ChatGpt Bootcamp.jpg' },
  { title: 'Cybernaut Internship', link: '/certificates/Cybernaut Internship.jpg' },
  { title: 'Java', link: '/certificates/Java.jpg' },
  { title: 'Python', link: '/certificates/Python.jpg' },
  { title: 'Digital Marketing', link: '/certificates/Digital Marketing.jpg' },
  { title: 'Dotnet', link: '/certificates/Dotnet.jpg' },
  { title: 'Figma Udemy', link: '/certificates/Figma Udemy.jpg' },
  { title: 'LLM', link: '/certificates/LLM.jpg' },
  { title: 'Generative AI', link: '/certificates/Gen AI.jpg' },
  { title: 'Responsible AI', link: '/certificates/Responsible AI.jpg' },
  { title: 'Introduction JS', link: '/certificates/Introduction JS.jpg' },
  { title: 'Introduction to R', link: '/certificates/Introduction to R.jpg' },
  { title: 'MEAN Basics', link: '/certificates/MEAN Basics.jpg' },
  { title: 'NPTEL', link: '/certificates/NPTEL.jpg' },
  { title: 'UI UX', link: '/certificates/UI UX.jpg' },
  { title: 'Version Control', link: '/certificates/Version Control.jpg' },
  { title: 'Front End Dev', link: '/certificates/Front End Dev.jpg' },
  { title: 'JS Meta', link: '/certificates/JS Meta.jpg' },

];

const Certificates = () => {
  const [show, setShow] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const handleShow = (img) => {
    setCurrentImg(img);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <Container className="py-5">
      <h2 className="section-title mb-4 text-center" style={{ color: '#007bff' }}>Certifications</h2>
      <Row className="g-4 justify-content-center">
        {certificates.map((cert, idx) => (
          <Col md={4} key={idx} className="text-center">
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={cert.link}
                alt={cert.title}
                style={{ height: '250px', objectFit: 'cover', borderRadius: '10px', cursor: 'pointer' }}
                onClick={() => handleShow(cert.link)}
              />
              <Card.Body>
                <Card.Title>{cert.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal to show full-size image */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0">
          <img src={currentImg} alt="Certificate" style={{ width: '100%' }} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Certificates;
