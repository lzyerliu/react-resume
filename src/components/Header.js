import React, { Component } from 'react'
import classnames  from 'classnames'
import '../styles/header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerHeight: {
        height: '800px'
      },
      mdToggle: false,
      currentNav: '_home',
      showTopUp: false,
      scrollDownPart: false
    }
  }


  componentWillMount() {
    let windowHeight = window.innerHeight
    window.onresize = () => {
      windowHeight = window.innerHeight
      this.setState({
        headerHeight: {
          height: `${windowHeight}px`
        }
      })
    }
    this.setState({
      headerHeight: {
        height: `${windowHeight}px`
      }
    })
    window.addEventListener('scroll', this.pageScroll.bind(this))
    // console.log(window.location.hash.replace(/#/, ''))
    let hashStr = window.location.hash
    if (hashStr) {
      let curNav = `_${window.location.hash.replace(/#/, '')}`
      this.setState({
        currentNav: curNav
      })
      this.scrollToAnchor(curNav)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.pageScroll.bind(this))
  }

  scrollToAnchor(anchorName) {
    // console.log(anchorName, 'scrollto')
    if (anchorName) {
      let anchorEl = document.getElementById(anchorName)
      if (anchorEl) {
        anchorEl.scrollIntoView({
          behavior: 'smooth'
        })
        this.setState({
          currentNav: anchorName,
          mdToggle: false
        })
      }
    }
  }

  /**
   * mobile下，点击显隐nav
   * @param {*} str 
   * @param {*} bool 
   */
  toggleNavInMd(str, bool) {
    // console.log(str, bool)
    this.setState({
      mdToggle: bool
    })
  }

  /**
   * 页面滚动
   * @param {*} event 
   */
  pageScroll(event) {
    // 滚动的高度
    let scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0)
    // 视窗高度
    let clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight
    // 页面高度
    // let scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight
    // 距离页面底部的高度
    // let offBottomHeight = scrollHeight - scrollTop - clientHeight

    // console.log(scrollTop, clientHeight, scrollHeight, offBottomHeight)
    // console.log(scrollTop >= clientHeight)
    let tempTopUp = false
    let tempScrollDownPart = false
    if (scrollTop >= clientHeight) {
      tempTopUp = true
    }
    if (scrollTop >= clientHeight/3) {
      tempScrollDownPart = true
    }
    this.setState({
      showTopUp: tempTopUp,
      scrollDownPart: tempScrollDownPart
    })
    // console.log(this.isInViewPortOfOne(document.getElementById('_home')))
    // console.log(this.isInViewPortOfOne(document.getElementById('_about')))
    // console.log(this.isInViewPortOfOne(document.getElementById('_resume')))
    // console.log(this.isInViewPortOfOne(document.getElementById('_work')))
    // console.log(this.isInViewPortOfOne(document.getElementById('_intro')))
    // console.log(this.isInViewPortOfOne(document.getElementById('_contact')))
    // console.log('----------------------------------')
    // let tempNav = '_home'
    // tempNav = this.isInViewPortOfOne(document.getElementById('_home')) ? '_home' : tempNav
    // tempNav = this.isInViewPortOfOne(document.getElementById('_about')) ? '_about' : tempNav
    // tempNav = this.isInViewPortOfOne(document.getElementById('_resume')) ? '_resume' : tempNav
    // tempNav = this.isInViewPortOfOne(document.getElementById('_work')) ? '_work' : tempNav
    // tempNav = this.isInViewPortOfOne(document.getElementById('_intro')) ? '_intro' : tempNav
    // tempNav = this.isInViewPortOfOne(document.getElementById('_contact')) ? '_contact' : tempNav
    // this.setState({
    //   showTopUp: tempTopUp,
    //   scrollDownPart: tempScrollDownPart,
    //   currentNav: tempNav
    // })
  }

  /**
   * 判断元素是否在可视窗口，（备注：还有bug，还不能使用）
   * @param {*} el
   */
  isInViewPortOfOne(el) {
    let scrTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrTop)
    return scrTop > 100 && (!(scrTop > (el.offsetTop + el.offsetHeight) || (scrTop + window.innerHeight) < el.offsetTop))
  }

  render() {
    let isMd = this.state.mdToggle;
    let mdTogg = ''
    if (!isMd) {
      mdTogg = <a href="#nav-wrap" className="mobile-btn block md:hidden" title="show nav" onClick={() => {this.toggleNavInMd('show', true)}}>Show</a>
    } else {
      mdTogg = <a href="#home" className="mobile-btn block md:hidden" title="hide nav" onClick={() => {this.toggleNavInMd('hide', false)}}>hide</a>
    }
    return (
      <header id="_home" className="header-container" style={this.state.headerHeight}>

        <nav className="nav-wrap">
          { mdTogg }
          <ul className={classnames('nav flex', {'flex-row justify-center hidden md:block': !isMd}, {'nav-md flex-col block md:hidden': isMd}, {'nav-fixed': !isMd && this.state.scrollDownPart})}>
            <li className={classnames('nav-item', {'active': this.state.currentNav === '_home'})}><a href="#home" onClick={() => this.scrollToAnchor('_home')}>Home</a></li>
            <li className={classnames('nav-item', {'active': this.state.currentNav === '_about'})}><a href="#about" onClick={() => this.scrollToAnchor('_about')}>About</a></li>
            <li className={classnames('nav-item', {'active': this.state.currentNav === '_resume'})}><a href="#resume" onClick={() => this.scrollToAnchor('_resume')}>Resume</a></li>
            <li className={classnames('nav-item', {'active': this.state.currentNav === '_work'})}><a href="#work" onClick={() => this.scrollToAnchor('_work')}>Work</a></li>
            <li className={classnames('nav-item', {'active': this.state.currentNav === '_intro'})}><a href="#intro" onClick={() => this.scrollToAnchor('_intro')}>Intro</a></li>
            <li className={classnames('nav-item', {'active': this.state.currentNav === '_contact'})}><a href="#contact" onClick={() => this.scrollToAnchor('_contact')}>Contact</a></li>
          </ul>
        </nav>

        <div className="banner">
          <div className="banner-text">
            <h1 className="title text-5xl xl:text-6xl">a'm xxxxx.</h1>
            <h3 className="sub-title text-base xl:text-xl">I'm a city based <span>XXXXXXXXXXXXX cccccc.</span> sss sdfsd sdsdfsdfsdffs.</h3>
            <hr/>
          </div>
        </div>

        <div className="scrolldown hidden md:block">
          <a className="smoothscroll" href="#about" onClick={() => this.scrollToAnchor('_about')}><i className="down icon-down-circle"></i></a>
        </div>

        <div className={classnames('scrollup', {'hidden': !this.state.showTopUp}, {'block': this.state.showTopUp})}>
          <a className="smoothscroll" href="#home" onClick={() => this.scrollToAnchor('_home')}><i className="icon-up-open"></i></a>
        </div>

      </header>
    )
  }
}

export default Header
