import React, { Component } from 'react';
import './App.css'

import Home from './components/Home/home.js'
import About from './components/About/about.js'
import Skills from './components/Skills/skills.js'
import Portfolio from './components/Portfolio/portfolio.js'
import Contact from './components/Contact/contact.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <About/>
        <Skills/>
        <Portfolio />
        <Contact />
        
      </div>
    );
  }
}

export default App;
