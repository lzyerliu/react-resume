import React, { Component } from 'react';

import Header from './components/Header'
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
        <Footer />
      </div>
    )
  }
}

export default App;
