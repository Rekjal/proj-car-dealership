import React, { Component } from 'react';

class NavBar extends Component {
  render() { 
    return (
<nav className="navbar navbar-light fixed-top bg-light"> 
{/* navbar navbar-expand-md navbar-dark fixed-top bg-dark */}
  <a className="navbar-brand" href="#">Navbar</a>
</nav>
      );
  }
}
 
export default NavBar;