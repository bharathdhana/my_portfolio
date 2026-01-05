import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const About = () => {
   
    const pillStyle = {
        display: 'inline-block',
        padding: '6px 12px',
        margin: '4px',
        borderRadius: '20px',
        backgroundColor: '#e0f7fa',
        color: '#007bff',
        fontWeight: '500',
        fontSize: '0.95rem'
    };

    // Defines a separate style for the hobbies pill
    const hobbyPillStyle = {
        ...pillStyle, // Inherit base styles
        backgroundColor: '#fff3e0', // Light orange/yellow background
        color: '#ff9800', // Orange text
    };

    return (
        <section
            id="about"
            className="py-5"
            style={{ background: 'linear-gradient(to right, #f0f8ff, #ffffff)' }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        
                        {/* 1. Skills Card (Unchanged) */}
                        <Card 
                            className="mb-4 shadow-sm" 
                            style={{ borderLeft: '6px solid #007bff', borderRadius: '10px', padding: '20px' }}
                        >
                            <Card.Body>
                                <Card.Title style={{ fontWeight: '700', fontSize: '1.5rem', color: '#007bff' }}>
                                    💻 Skills
                                </Card.Title>
                              
                                <div>
                                    <span style={pillStyle}>C++</span>
                                    <span style={pillStyle}>Java</span>
                                    <span style={pillStyle}>Python</span>
                                    <span style={pillStyle}>HTML & CSS</span>
                                    <span style={pillStyle}>JavaScript</span>
                                    <span style={pillStyle}>React</span>
                                    <span style={pillStyle}>MySQL</span>
                                   
                                </div>
                            </Card.Body>
                        </Card>

                        {/* 2. Interests Card (Unchanged) */}
                        <Card 
                            className="mb-4 shadow-sm" 
                            style={{ borderLeft: '6px solid #ff2bb1', borderRadius: '10px', padding: '20px' }}
                        >
                            <Card.Body>
                                <Card.Title style={{ fontWeight: '700', fontSize: '1.5rem', color: '#ff2bb1' }}>
                                    💡 Interests
                                </Card.Title>
                                <div>
                                    <span style={pillStyle}>UI/UX Design</span>
                                    <span style={pillStyle}>Software Engineering</span>
                                    <span style={pillStyle}>Web Development</span>
                                    <span style={pillStyle}>Psychology</span>
                                </div>
                            </Card.Body>
                        </Card>

                         {/* 3. Experience */}
                         <Card 
                            className="mb-4 shadow-sm" 
                            style={{ borderLeft: '6px solid #28a745', borderRadius: '10px', padding: '20px' }}
                        >
                            <Card.Body>
                                <Card.Title style={{ fontWeight: '700', fontSize: '1.5rem', color: '#28a745' }}>
                                    💼 Experience
                                </Card.Title>
                                
                                <h5 style={{ fontWeight: '600', fontSize: '1.2rem', marginTop: '10px', marginBottom: '5px' }}>
                                    Trainee Operator
                                </h5>
                                <p style={{ fontSize: '1.1rem' , fontFamily: 'sans-serif'}}>
                                Breaks India Private Limited, Chengalpet<br/>
                                Worked as a Trainee Operator in the Raw Material Stores, Stock Management,
                                ensuring quantity of materials and Warehouse maintenance.<br/>
                                Duration : Nov 2020 - Nov 2022<br/>
                                </p>
                                 </Card.Body>
                        </Card>

                        

                        {/* 4. Education & Philosophy Card (Unchanged) */}
                        <Card 
                            className="mb-4 shadow-sm" 
                            style={{ borderLeft: '6px solid #a72892ff', borderRadius: '10px', padding: '20px' }}
                        >
                            <Card.Body>
                                <Card.Title style={{ fontWeight: '700', fontSize: '1.5rem', color: '#a72892ff' }}>
                                    🎓 Education 
                                </Card.Title>
                                
                                <h5 style={{ fontWeight: '600', fontSize: '1.2rem', marginTop: '10px', marginBottom: '5px' }}>
                                    Engineering
                                </h5>
                                <p style={{ fontSize: '1.1rem' , fontFamily: 'sans-serif'}}>
                                UG in Computer Science and Engineering,<br/>
                                Gnanamani College of Technology, 2026 <br/> 
                                CGPA : 8.23/10
                                </p>
                                
                                <h5 style={{ fontWeight: '600', fontSize: '1.2rem', marginTop: '15px', marginBottom: '5px' }}>
                                    Diploma
                                </h5>
                               <p style={{ fontSize: '1.1rem' , fontFamily: 'sans-serif'}}>
                                Diploma in Computer Engineering,<br/>
                                Muthayammal Polytechnic College, 2020 <br/> 
                                Percentage : 99%
                                </p>
                            </Card.Body>
                        </Card>



                        {/* 5. Hobbies Card (NEW) */}
                        <Card 
                            className="mb-4 shadow-sm" 
                            style={{ borderLeft: '6px solid #ff9800', borderRadius: '10px', padding: '20px' }}
                        >
                            <Card.Body>
                                <Card.Title style={{ fontWeight: '700', fontSize: '1.5rem', color: '#ff9800' }}>
                                    🎨 Hobbies
                                </Card.Title>
                                <div>
                                    <span style={hobbyPillStyle}>Reading Books</span>
                                    <span style={hobbyPillStyle}>Writing</span>

                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;