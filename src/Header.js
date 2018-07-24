import React, { Component } from 'react';
import {hot} from "react-hot-loader";
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        console.info('constructor header()');
    }



  render() {
      function clickOnHeader(e) {
          console.info("click on header");
          let event = new CustomEvent('penetration-to-header', { detail: { info: 'Alfa'}});
          window.dispatchEvent(event);
      }

      function clickOnButton(e) {
          e.stopPropagation()
          let target = document.querySelector(".alert_item");
          target.dispatchEvent(new CustomEvent('targeted-event', { detail: { info: 'Omega'}}));
      }
    return (
        <header className="Header" onClick={clickOnHeader}>
          <img src="/src/logo.svg" className="Header-logo" alt="logo" />
          <h1 className="Header-title">React Playground</h1>
            <button onClick={clickOnButton} type="button" class="btn btn-outline-light">CLICK</button>
        </header>
    );
  }
}

export default hot(module)(Header);
// export default App;
