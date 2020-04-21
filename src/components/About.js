import React, { Component } from 'react'
import '../styles/about.scss'

class About extends Component {
  render() {
    return (
      <div id="_about" className="about">
        <div className="about-wrap container text-white md:flex lg:flex xl:flex">
          <div className="left hidden md:block ">left</div>
          <div className="right mx-8 md:m-0">
            <div className="">
              <h3 className="title">About Me</h3>
              <p className="desc">This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.This is a desc.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
