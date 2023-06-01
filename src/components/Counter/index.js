import {Component} from 'react'

import './index.css'

class Counter extends Component {
  render() {
    return (
        
      <div>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>0</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>

        

      
      //login form mobileView

<div className="mobileViewContainer">
          <img
            src="https://res.cloudinary.com/ruba/image/upload/v1685452709/Group_7399_h34uyu.svg"
            alt="login website logo"
            className="logo-size"
          />
          <form
            onSubmit={this.getAuthentication}
            className="mobileViewFormContainer"
          >
            <h1 className="mobileViewTitle">Login</h1>

            <label className="mobileViewLabel" htmlFor="user-mobileView">
              USERNAME
            </label>
            <input
              type="text"
              className="inputElMobileView"
              placeholder="username"
              id="user-mobileView"
              onChange={this.updateUser}
              value={user}
            />
            <label className="mobileViewLabel" htmlFor="password-mobileView">
              PASSWORD
            </label>
            <input
              type="password"
              className="inputEl"
              placeholder="Password"
              id="password-mobileView"
              value={password}
              onChange={this.updatePassword}
            />
            <button className="loginButtonMobileView" type="submit">
              Login
            </button>
            {isError && <p className="error_msg">{error}</p>}
          </form>
        </div>

        //Not Found mobile  view

        <div className="notFoundMobileView">
      <h1 className="notFoundMobileViewTitle">Lost Your Way</h1>
      <p className="notFoundMobileViewDesc">
        we are sorry the page you requested
      </p>
      <button type="button" className="notFoundMobileViewButton">
        Go to Home
      </button>
    </div>

    //Navbar mobile view

     <div className="mobile-navbar-view">
      <div className="mobile-view-navbar-logo-container">
        <img
          src="https://res.cloudinary.com/ruba/image/upload/v1685592597/Group_7399_boi4n8.svg"
          alt=""
          className="mobile-view-navbar-logo"
        />
      </div>
      <div className="icon-navbar-container">
        <AiOutlineSearch className="navbar-search-icon" />
      </div>
    </div>

    )
  }
}

export default Counter
