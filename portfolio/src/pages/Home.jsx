
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../img/profile.jpg';

const Home = () => (
  <section
    id="hero"
    className="py-5 d-flex align-items-center"
    style={{ background: 'linear-gradient(to right, #e0f7fa, #ffffff)' }}
  >
    <Container className="py-4">
      <Row className="align-items-center">

        {/* Text Section */}
        <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
          <h1 className="hero-title" style={{ fontSize: '2.4rem', fontWeight: '700' }}>
            Hello, I'm <br />
            Bharath Kumar! <br />
            <span style={{ color: '#ff00ddff' }}>Full Stack Developer.</span>
          </h1>

          <p className="hero-subtitle" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            I've completed my undergraduate studies and am eager to apply my skills and knowledge 
            in real projects. I'm looking for opportunities that help me grow, learn, and gain 
            wisdom while making a meaningful impact.
          </p>
        </Col>

        {/* Image Section */}
        <Col xs={12} md={6} className="text-center">
          <img
            src={profile}
            alt="Profile"
            className="rounded-circle shadow-lg img-fluid"
            style={{
              width: '380px',
              height  : '380px',
              maxWidth: '100%',      // automatically scales down
              maxHeight: '400px',          // fits all screens
              objectFit: 'cover',         // maintain aspect ratio
              border: '5px solid #007bff'
            }}
          />
        </Col>

      </Row>
    </Container>
  </section>
);

export default Home;
