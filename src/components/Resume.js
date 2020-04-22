import React, { Component } from 'react'
import '../styles/resume.scss'

class Resume extends Component {
  render() {
    const barsStayle = {
      git: {
        width: '60%'
      },
      css: {
        width: '82%'
      },
      html: {
        width: '88%'
      },
      js: {
        width: '80%'
      },
      node: {
        width: '66%'
      },
      vue: {
        width: '76%'
      },
      react: {
        width: '46%'
      }
    }
    return (
      <div id="_resume" className="resume">
        <div className="container resume-wrap">
          <div className="section flex flex-col md:flex-row">
            <div className="step mx-8 md:mx-0  flex flex-row justify-center md:justify-start">
              <span>EDUCATION</span>
            </div>
            <div className="intro mx-8 md:mx-0">
              <div className="intro-item">
                <h3 className="title md:mr-12 text-center md:text-left">University?</h3>
                <p className="info md:mr-12 text-center md:text-left">
                  Masters in Beer tasting
                  <span>•</span>
                  <em className="date">April 2007</em>
                </p>
                <p className="text-j md:mr-12">Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>
              </div>
              <div className="intro-item">
                <h3 className="title md:mr-12">School #1 Maybe College?</h3>
                <p className="info md:mr-12">
                  What did you study 101
                  <span>•</span>
                  <em className="date">March 2003</em>
                </p>
                <p className="text-j md:mr-12">Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>
              </div>
            </div>
          </div>
          <div className="section flex flex-col md:flex-row">
            <div className="step mx-8 md:mx-0  flex flex-row justify-center md:justify-start">
              <span>WROK</span>
            </div>
            <div className="intro mx-8 md:mx-0">
              <div className="intro-item">
                <h3 className="title md:mr-12">Awesome Design Studio</h3>
                <p className="info md:mr-12">
                  Senior UX God 
                  <span>•</span>
                  <em className="date">March 2010 - Present</em>
                </p>
                <p className="text-j md:mr-12">Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.</p>
              </div>
              <div className="intro-item">
                <h3 className="title md:mr-12">Super Cool Studio</h3>
                <p className="info md:mr-12">
                  Junior bug fixer
                  <span>•</span>
                  <em className="date">March 2007 - February 2010</em>
                </p>
                <p className="text-j md:mr-12">Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.</p>
              </div>
            </div>
          </div>
          <div className="section flex flex-col md:flex-row">
            <div className="step mx-8 md:mx-0  flex flex-row justify-center md:justify-start">
              <span>SKILLS</span>
            </div>
            <div className="intro mx-8 md:mx-0">
              <div className="intro-item">
                <p className="text-j md:mr-12">Here you can create a short write-up of your skills to show off to employers</p>
              </div>
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand git" style={barsStayle.git}></span>
                    <em>GIT</em>
                  </li>
                  <li>
                    <span className="bar-expand git" style={barsStayle.css}></span>
                    <em>CSS</em>
                  </li>
                  <li>
                    <span className="bar-expand git" style={barsStayle.html}></span>
                    <em>HTML</em>
                  </li>
                  <li>
                    <span className="bar-expand git" style={barsStayle.js}></span>
                    <em>JS</em>
                  </li>
                  <li>
                    <span className="bar-expand git" style={barsStayle.node}></span>
                    <em>NODE</em>
                  </li>
                  <li>
                    <span className="bar-expand git" style={barsStayle.vue}></span>
                    <em>VUE</em>
                  </li>
                  <li>
                    <span className="bar-expand git" style={barsStayle.react}></span>
                    <em>REACT</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
