import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

const About = () => {
  const paragraphText = `
    This event is open from December 1st 2021 - January 10th 2022. 
    All of selected participants will be given exclusive workshop, 
    webinar and mentoring to develop their products. They will be given 
    the opportunity to attract the judges. They also be given tools and 
    resources to create outcome-oriented product. 
    Showcase will be scheduled in main event.
  `
  return (
    <Container id="about-container">
      <Row className="about-row" md={2}>
        <Col md="auto" style={{alignSelf: 'center', justifySelf: 'center'}}>
          {/* replace with img tag */}
          <div className="img-placeholder-abt">Illustration</div>
        </Col>
        <Col className="about-paragraph">
          <Container>
            <h1 style={{textAlign: 'center', marginBottom: '50px'}}>ABOUT THIS EVENT</h1>
            <span>&nbsp;</span>
            <p>{paragraphText}</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default About;