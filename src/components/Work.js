import React, { Component } from 'react'
import '../styles/work.scss'

class Work extends Component {
  render() {
    return (
      <div id="_work" className="work">
        <div className="work-wrap container">
          <p className="desc">Check Out Some of My Works.</p>
          <div className="work-list mx-12 md:mx-0">
            <div className="item-wrap md:float-left md:w-1/4">
              <div className="item-cont">
                <a href="#/">
                  <img className="img" src={require('../assets/images/portfolio/canadian-wanderlust.jpg')} alt=""/>
                </a>
              </div>
            </div>
            <div className="item-wrap md:float-left md:w-1/4">
              <div className="item-cont">
                <a href="#/">
                  <img className="img" src={require('../assets/images/portfolio/fury-fighting-gear.jpg')} alt=""/>
                </a>
              </div>
            </div>
            <div className="item-wrap md:float-left md:w-1/4">
              <div className="item-cont">
                <a href="#/">
                  <img className="img" src={require('../assets/images/portfolio/original-thai-food.jpg')} alt=""/>
                </a>
              </div>
            </div>
            <div className="item-wrap md:float-left md:w-1/4">
              <div className="item-cont">
                <a href="#/">
                  <img className="img" src={require('../assets/images/portfolio/resume-website.jpg')} alt=""/>
                </a>
              </div>
            </div>
            <div className="item-wrap md:float-left md:w-1/4">
              <div className="item-cont">
                <a href="#/">
                  <img className="img" src={require('../assets/images/portfolio/smirkspace.jpg')} alt=""/>
                </a>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Work
