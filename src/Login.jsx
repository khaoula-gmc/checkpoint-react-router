import React from 'react';
import { Redirect } from 'react-router-dom';

export class Login extends React.Component {

  constructor() {
    super();

    this.state = {
      redirectToReferrer: false
    }
    // binding 'this'
    this.login = this.login.bind(this);
  }

  login() {

    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
      
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/Admin' } }
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div className='overlay'>
        <div className='wrapper'>
        <p className='login-msg'>You must log in to view the page at Admin Area</p>
        <div className='auth'>
        <input type='text' placeholder='Login'/>
        <input type='password' placeholder='password'/>
        </div>
        <button onClick={this.login}>Log in</button>
      </div>
      </div>
    )
  }
}

/* A fake authentication function */
export const fakeAuth = {

  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
     setTimeout(cb, 100)
  },
}