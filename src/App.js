import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Preview from './components/Preview';
import Goals from './components/Goals';
import About from './components/About';
import Invitees from './components/Invitees';

class App extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <Preview/>
        <Goals/>
        <About/>
        <Invitees/>
      </>
    );
  };
};

export default App;