// Write your code here

import {Component} from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-box">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="logo-img"
          />
        </Link>
        <Popup
          modal
          trigger={
            <button
              className="trigger-button"
              type="button"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="hamburger-close-icon" />
            </button>
          }
        >
          {close => (
            <div className="popup-box">
              <div className="modal-box">
                <div className="close-btn">
                  <button
                    className="trigger-button"
                    type="button"
                    onClick={() => close()}
                    data-testid="closeButton"
                  >
                    <IoMdClose className="hamburger-close-icon" />
                  </button>
                </div>
                <ul className="home-about-box">
                  <li>
                    <Link to="/" className="modal-links">
                      <button
                        type="button"
                        className="modal-links-btn"
                        onClick={() => close()}
                      >
                        <AiFillHome className="icon" />
                        <h1>Home</h1>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="modal-links">
                      <button
                        type="button"
                        className="modal-links-btn"
                        onClick={() => close()}
                      >
                        <BsInfoCircleFill className="icon" />
                        <h1>About</h1>
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default Header
