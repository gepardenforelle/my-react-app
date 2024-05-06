import React from "react";

class Navbar extends React.Component {

  state = {}
  render() {

    return(<nav className="navbar bg-body-tertiary">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Navbar" width="30" height="24"/>
      </a>
    </div>
  </nav> );
  }
}

export default Navbar;