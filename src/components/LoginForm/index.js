// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isLoginFailed: false, errMessage: ''}

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errMsg => {
    this.setState({
      isLoginFailed: true,
      errMessage: errMsg,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    // const data = await response.json()

    // if (username === '') {
    //   this.onLoginFailure('Enter valid username')
    // } else if (password === '') {
    //   this.onLoginFailure('Enter valid password')
    // } else if (username === '' && password === '') {
    //   this.onLoginFailure('Enter valid username')
    // } else {
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {username, password, isLoginFailed, errMessage} = this.state
    return (
      <div className="login-container">
        <img
          className="login-img-for-large-width"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="form-logo-container">
          <img
            className="web-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <img
            className="login-img-for-small-width"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="label-input-container">
              <label htmlFor="username">USERNAME</label>
              <input
                value={username}
                onChange={this.onChangeUsername}
                id="username"
                type="text"
                className="username"
                placeholder="Username"
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="password">PASSWORD</label>
              <input
                value={password}
                onChange={this.onChangePassword}
                id="password"
                type="password"
                className="password"
                placeholder="Password"
              />
            </div>
            <button className="login-btn" type="submit">
              Login
            </button>
            {isLoginFailed && <p className="err-msg">{errMessage}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
