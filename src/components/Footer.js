import React, { Component } from 'react'
import '../styles/footer.scss'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentYear: new Date().getFullYear()
    }
  }
  render() {
    return (
      <footer id="_contact" className="footer">
        <div className="footer-wrap">
          <div className="telave mx-8">
            <ul className="links flex flex-row justify-center">
              <li>
                <a href="https://m.facebook.com/lzyer.liu.9"><i className="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="https://github.com/lzyerliu"><i className="fa fa-github"></i></a>
              </li>
            </ul>
            <ul className="copyright flex flex-row justify-center mt-6">
              <li className="mr-4">© Copyright {this.state.currentYear} Lzyer Liu</li>
              <li>Design by LzyerLiu</li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
