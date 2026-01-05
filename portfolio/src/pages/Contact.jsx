import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Contact = () => (

  <section className="py-5 bg-light">
    <Container>
      <h2 className="section-title mb-4 text-center">Contact Me</h2>


      <Row className="g-4 justify-content-center">
        
        {/* LinkedIn Card */}
        <Col xs={12} sm={6} md={4}>
          <Card className="contact-card h-100 text-center shadow-sm">
            <Card.Body>
              <Card.Title>LinkedIn</Card.Title>
              <Card.Text>Connect with me on LinkedIn.</Card.Text>
              <Button
                variant="primary"
                href="https://www.linkedin.com/in/bharathkumarjn"
                target="_blank"
              >
                Visit LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Email Card */}
        <Col xs={12} sm={6} md={4}>
          <Card className="contact-card h-100 text-center shadow-sm">
            <Card.Body>
              <Card.Title>Email</Card.Title>
              <Card.Text>Send me an email directly.</Card.Text>
              <Button
                variant="danger"
                href="mailto:bharathdhanavan2612@gmail.com"
                target="_blank"
              >
                Send Email
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* GitHub Card */}
        <Col xs={12} sm={6} md={4}>
          <Card className="contact-card h-100 text-center shadow-sm">
            <Card.Body>
              <Card.Title>GitHub</Card.Title>
              <Card.Text>Check out my projects on GitHub.</Card.Text>
              <Button
                variant="dark"
                href="https://github.com/bharathdhana"
                target="_blank"
              >
                Visit GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>


  </section>
);

export default Contact;