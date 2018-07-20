import React, { Component } from 'react';
import {hot} from "react-hot-loader";
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="Header">
          <img src="/src/logo.svg" className="Header-logo" alt="logo" />
          <h1 className="Header-title">React Playground</h1>
        </header>
    );
  }
}

export default hot(module)(Header);
// export default App;
