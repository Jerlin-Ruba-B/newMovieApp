import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {user: '', password: '', isError: false, error: ''}

  updateUser = event => {
    this.setState({user: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  updateToken = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  updateError = error => {
    this.setState({isError: true, error})
  }

  submitForm = async event => {
    event.preventDefault()
    const {user, password} = this.state
    const userDetails = {user, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.updateToken(data.jwt_token)
    } else {
      this.updateError(data.error_msg)
    }
  }

  render() {
    const {user, password, isError, error} = this.state
    return (
      <>
        <div className="bg-login-container">
          <div className="login-container">
            <div className="movies-heading-container">
              <img
                src="https://res.cloudinary.com/ruba/image/upload/v1685345781/Group_7399_1x_kpwfr1.svg"
                alt="login website logo"
              />
            </div>

            <form className="login-card-container" onSubmit={this.submitForm}>
              <h1 className="login-title">Login</h1>
              <div className="label-input">
                <label className="label" htmlFor="user">
                  USERNAME
                </label>
                <input
                  type="text"
                  placeholder="username"
                  id="user"
                  className="inputEl"
                  onChange={this.updateUser}
                  value={user}
                />
              </div>
              <div className="label-input">
                <label className="label" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="inputEl"
                  value={password}
                  onChange={this.updatePassword}
                />
              </div>

              <button className="btn" type="submit">
                Login
              </button>
              {isError && <p className="error_msg">{error}</p>}
            </form>
          </div>
        </div>
      </>
    )
  }
}
export default LoginForm
