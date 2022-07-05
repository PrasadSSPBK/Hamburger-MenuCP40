import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import PopUp from 'reactjs-popup'

import './index.css'

const Header = () => (
  <div>
    <nav className="navContainer">
      <Link to="/" className="link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="websiteLogo"
        />
      </Link>

      <PopUp
        modal
        trigger={
          <button type="button" testid="hamburgerIconButton" className="button">
            <GiHamburgerMenu className="hamburger" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="popupContainer">
            <div className="closeContainer">
              <button
                type="button"
                testid="closeButton"
                className="button"
                onClick={() => close()}
              >
                <IoMdClose className="close" />
              </button>
            </div>
            <ul className="iconContainer">
              <Link to="/">
                <li className="homeIconContainer">
                  <AiFillHome className="close" />
                  <h1 className="head">Home</h1>
                </li>
              </Link>
              <Link to="/about">
                <li className="homeIconContainer">
                  <BsInfoCircleFill className="close" />
                  <h1 className="head">About</h1>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </PopUp>
    </nav>
  </div>
)
export default Header
