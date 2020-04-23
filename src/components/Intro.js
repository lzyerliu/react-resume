import React, { Component } from 'react'
import '../styles/intro.scss'

class Intro extends Component {
  render() {
    return (
      <div id="_intro" className="intro-container">
        <div className="intro-wrap container">
          <div className="flex flex-col md:flex-row mx-8 md:mx-0">
            <div className="left hidden md:block">
              <div className="ble"> </div>
            </div>
            <div className="right">
              <div className="item md:mr-12">
                <h3>Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.</h3>
                <p>Kareem Abdul Jabbar</p>
              </div>
              <div className="item md:mr-12">
                <h3>That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!</h3>
                <p>Steve Wozniak... impersonator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro
