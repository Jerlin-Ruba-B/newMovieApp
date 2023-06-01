import {HiOutlineSearch} from 'react-icons/hi'
import './index.css'

const Navbar = () => (
  <>
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/ruba/image/upload/v1685592597/Group_7399_boi4n8.svg"
          alt="website logo"
          className="navbar-logo-size"
        />
        <ul className="unordered-navbar-tabs">
          <li className="navbar-list-tabs">Home</li>
          <li className="navbar-list-tabs">Popular</li>
        </ul>
      </div>
      <div className="icon-navbar-container">
        <HiOutlineSearch
          className="navbar-search-icon"
          test_id="searchButton "
        />
      </div>
    </div>
  </>
)

export default Navbar
