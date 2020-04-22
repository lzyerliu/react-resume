import React, { Component } from 'react'
import '../styles/about.scss'

class About extends Component {
  render() {
    return (
      <div id="_about" className="about">
        <div className="about-wrap container text-white md:flex lg:flex xl:flex">
          <div className="left hidden md:block">
            <img className="avatar" src={require('../assets/images/profilepic.jpg')} alt=""/>
          </div>
          <div className="right mx-8 md:m-0">
            <div className="d-item">
              <h3 className="title">About Me</h3>
              <p className="desc md:mr-12">This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.</p>
            </div>
            <div className="d-item flex flex-col md:flex-row">
              <div>
                <h3 className="title">Contact Details</h3>
                <p className="desc contact md:mr-12">Tim Baker</p>
                <p className="desc contact md:mr-12">(Your Street)</p>
                <p className="desc contact md:mr-12">(Your City)(Your State),(Your Zip/Postal Code)</p>
                <p className="desc contact md:mr-12">Tel</p>
                <p className="desc contact md:mr-12">your@email.com</p>
              </div>
              <div className="btn text-left md:text-center">
                <a href="/">
                  <i className="fa fa-download"></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
