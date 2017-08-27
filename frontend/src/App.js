import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);

    /* INIT STATES */

    this.state = {
      user: null,
      errorMsg: null,
    };
    
    /* AUTH METHODS */

    this.onSuccessLogin = this.onSuccessLogin.bind(this);
    this.onErrorLogin = this.onErrorLogin.bind(this);
    this.onSuccessSignup = this.onSuccessSignup.bind(this);
    this.onErrorSignup = this.onErrorSignup.bind(this);
    this.onSuccessLogout = this.onSuccessLogout.bind(this);
    this.authenticated = this.authenticated.bind(this);

    /* USER RELATED METHODS */

    this.isV = this.isV.bind(this);

    /* ERROR HANDLING */

    this.doneHandleError = this.doneHandleError.bind(this);
  }


  render() {
    return (
      <div>
        <Header
          authenticated={this.authenticated}
          onSuccessLogout={this.onSuccessLogout}
          errorMsg={this.errorMsg}
        />
        <Main 
          authenticated={this.authenticated}
          login={this.login}
          logout={this.logout}
          onSuccessLogin={this.onSuccessLogin}
          onErrorLogin={this.onErrorLogin}
          onSuccessSignup={this.onSuccessSignup}
          onErrorSignup={this.onErrorSignup}
          onSuccessLogout={this.onSuccessLogout}

          user={this.user}
          isV={this.isV}

          doneHandleError={this.doneHandleError}
          errorMsg={this.errorMsg}
        />
        <Footer />
      </div>
    );
  }

  /* AUTH METHODS */

  onSuccessSignup(user) {
    this.setState({user: user});
  }

  onErrorSignup(errorMsg) {
    this.setState({errorMsg: errorMsg});
  }

  onSuccessLogin(user) {
    this.setState({user: user});
  }

  onErrorLogin(errorMsg) {
    this.setState({errorMsg: errorMsg});
  }

  onSuccessLogout() {
    this.setState({user: null});
  }

  authenticated() {
    return this.state.user !== null;
  }

  /* USER RELATED METHODS */

  isV() {
    return this.state.user.type === 'v';
  }

  /* ERROR HANDLING */

  doneHandleError() {
    this.setState({errorMsg: null});
  }
}

export default App;
