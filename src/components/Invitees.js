import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

const Invitees = () => {
  const inviteesList = [
    'PRODUCT LEADERS',
    'PRODUCT MANAGERS',
    'PRODUCT ENGINEERS',
    'PRODUCT MARKETERS',
    'DATA ANALYSTS',
    'PRODUCT ENTHUSIASTS'
  ];

  const generateRow = () => {
    return (
      <Row lg={3} md={2} sm={2} className="invitees">
        {inviteesList.map((inv, idx) => {
          return (
            <Col key={`invitee-${idx}`}>
              <div className="invite-list">
                {inv}
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }

  return (
    <Container>
      <h1 style={{textAlign: 'center', marginBottom: '50px'}}>WHO SHOULD ATTEND?</h1>
      {generateRow()}
    </Container>
  )
}

export default Invitees;