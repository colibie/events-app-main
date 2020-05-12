import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top header-inner-pages">
      <div className="container d-flex">
        <div className="contact-info mr-auto">
          <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
          <i className="icofont-phone"></i> +1 5589 55488 55
      </div>
        <div className="social-links">
          <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
          <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
          <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
          <a href="#" className="skype"><i className="fa fa-skype"></i></a>
          <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    <header id="header" className="fixed-top header-inner-pages">
      <div className="container d-flex align-items-center">

        <h1 className="logo mr-auto"><a href="index.html">Day</a></h1>
        <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></img></a>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active"><Link to='/'>Home</Link></li>
            <li><Link to='/'>Services</Link></li>
            <li><Link to='/'>Portfolio</Link></li>
            { !this.props.loggedIn && 
            <>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup'>Signup</Link></li>
              </>}
            {this.props.loggedIn &&
              <li className="drop-down"><a href="">My Profile</a>
                <ul>
                  <li><Link to='/allEvents'>All Events</Link></li>
                  <li><Link to='/addEvent'>Add Event</Link></li>
                  <li><Link to='/logout'>Log out</Link></li>
                </ul>
              </li>}
          </ul>
        </nav>

      </div>
    </header>
  </>
);

var mapStateToProps = ({
  auth: { loggedIn, token, _id }
}) => {
  return { loggedIn, token, _id }
}

export default connect(mapStateToProps, actions)(Header);