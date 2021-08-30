import React from 'react';
import {
  Container
} from 'react-bootstrap';

const Goals = () => {
  const paragraphText = [
    `New products often appear but breakthroughs 
    that have a positive impact on people's lives are rare.`,
    `Building an impactful event isn't just about getting bigger 
    and better on the surface. Create outcome-oriented product, 
    develop the possibilities, and achieve whatever results you 
    dream of.`,
    `UXCellent Digital Product Development Conference will bring 
    together the brightest minds behind successful companies and 
    teach you how to do it right.`
  ]

  return (
    <Container id="goals-container">
      <h1 style={{textAlign: 'center'}}>OUR GOAL</h1>
      <span>&nbsp;</span>
      <p>{paragraphText[0]}</p>
      <p>{paragraphText[1]}</p>
      <p>{paragraphText[2]}</p>
    </Container>
  );
};

export default Goals;