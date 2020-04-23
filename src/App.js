import React, { Component } from 'react';

import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Work from './components/Work'
import Intro from './components/Intro'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resumeData : {}
    }
  }

  getResumeData() {
    // 
  }

  componentDidMount() {
    this.getResumeData()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Work />
        <Intro />
        <Footer />
      </div>
    )
  }
}

export default App;
