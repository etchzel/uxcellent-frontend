import React from 'react';
import {
  Row,
  Col,
  Button,
  Container,
} from 'react-bootstrap';

const Preview = () => {
  return (
    <Container id="preview-container">
      <Row md={2} className="mb-5 mt-5">
        <Col 
          md={{order: 1}} 
          sm={{order: 2}}
          xs={{order: 2}}
          className="join-member-col"
        >
          <Container>
            <h1>DIGITAL PRODUCT DEVELOPMENT CONFERENCE</h1>
            <p>Engaging minds, empowering success.</p>
            <span>&nbsp;</span>
            <Button>Join Us</Button>
          </Container>
        </Col>
        <Col md={{order: 2}} sm={{order: 1}} xs={{order: 1}}>
          {/* replace with img tag */}
          <div className="img-placeholder">Illustration</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Preview;