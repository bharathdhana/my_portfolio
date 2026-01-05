import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'Todo App',
    description: 'React todo app.',
    github: 'https://github.com/bharathdhana/todo-app',
    
  },

  {
    title: 'Portfolio',
    description: 'My personal portfolio website.',
    github: 'https://github.com/bharathdhana/my_portfolio',
    live: 'https://takealook-portfolio.netlify.app/'
  },

  {
    title: 'Amazon Scraper',
    description: 'Web scraper for Amazon product data.',
    github: 'https://github.com/bharathdhana/Amazon_Scraper',
  },

  {
    title: 'Indeed Scraper',
    description: 'Web scraper for Indeed product data.',
    github: 'https://github.com/bharathdhana/Indeed_Scraper',
  },

   {
    title: 'Ebay Scraper',
    description: 'Web scraper for Ebay product data.',
    github: 'https://github.com/bharathdhana/Ebay_Scraper',
  },

  {
    title: 'Credit card approval using Machine Learning',
    description: 'Machine learning model to predict credit card approvals.',
    github: 'https://github.com/bharathdhana/Credit_card_approval_ML',
  },

  {
    title: 'E-Commerce Price Comparison Tool',
    description: 'A tool to compare prices across different e-commerce platforms.',
    github: 'https://github.com/bharathdhana/Price_Comparison_Tool',
  },

   {
    title: 'Fake News Detection using Machine Learning',
    description: 'A tool to detect fake news using machine learning techniques.',
    github: 'https://github.com/bharathdhana/Fake_news_detection_using_ML ',
  },

  {
    title: 'Image Viewer using Tkinter',
    description: 'A simple image viewer application built with Tkinter.',
    github: 'https://github.com/bharathdhana/Image_Viewer_using_Tkinter',
  },

  {
    title: 'Policy Insurance Tracker',
    description: 'A web app to track insurance policies and renewals.',
    github: 'https://github.com/bharathdhana/Policy-Insurance-Tracker',
  },
  
  {
    title:'Hospital Management System',
    description: 'A comprehensive system to manage hospital operations efficiently.',
    github: 'https://github.com/bharathdhana/Hospital-Management-System',
  },

  {
    title: 'Developer Community',
    description: 'A platform for developers to share knowledge and collaborate on projects.',
    github: 'https://github.com/bharathdhana/DevCommunity',
    live: 'https://dev-comm-unity.netlify.app/'
  },

  {
    title:'Employee Management System',
    description: 'A comprehensive system to manage employee operations efficiently.',
    github: 'https://github.com/bharathdhana/Employee-Management-System',
  },

  {
    title:'Ink Of My Soul',
    description: 'A platform to share your poetry and connect with fellow poets.',
    github: 'https://github.com/bharathdhana/ink-of-my-soul ',
    live: 'https://bharathdhana.github.io/ink-of-my-soul/'
  },

  {
     title: 'Taxi Booking System',
     description: 'A web application to book taxis online with real-time tracking.',
     github: 'https://github.com/bharathdhana/Taxi-Booking-System',
  },

  {
    title: 'Library Application',
    description: 'Python based library application to manage books and users.',
    github: 'https://github.com/bharathdhana/library-application',
  },

  {
    title: 'Expense Tracker',
    description: 'Python application to track and manage expenses efficiently.',
    github: 'https://github.com/bharathdhana/expense-tracker',
  }


];

const Projects = () => (
  <section className="py-5 bg-light">
    <Container>
      <h2 className="section-title mb-4 text-center">Projects</h2>
      <Row className="g-4">
        {projects.map((project, idx) => (
          <Col md={4} key={idx}>
            <Card className="project-card h-100 text-center">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button
                  variant="primary"
                  href={project.github}
                  target="_blank"
                  className="me-2"
                >
                  GitHub
                </Button>
                {project.live && (
                  <Button
                    variant="success"
                    href={project.live}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
