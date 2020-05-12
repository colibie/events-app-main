import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <>
        <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top header-inner-pages">
          <div className="container d-flex">
            <div className="contact-info mr-auto">
              <i className="fa fa-envelope"></i> <a href="mailto:jenniferolibie@gmail.com">jenniferolibie@gmail.com</a>
              <i className="fa fa-phone"></i> +1 5589 55488 55
            </div>
            <div className="social-links">
              <a href="https://twitter.com/dera_jo" className="twitter"><i className="fa fa-twitter"></i></a>
              <a href="https://facebook.com/chideraolibie" className="facebook"><i className="fa fa-facebook"></i></a>
              <a href="https://instagram.com/jenn_0c" className="instagram"><i className="fa fa-instagram"></i></a>
              <a href="https://linked.com/chidera_olibie" className="linkedin"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <header id="header" className="fixed-top header-inner-pages">
          <div className="container d-flex align-items-center">

            <h1 className="logo mr-auto"><Link to="/">Evently</Link></h1>
            <Link to="/" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></img></Link>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active"><Link to='/'>Home</Link></li>
                <li><Link to='/'>Services</Link></li>
                <li><Link to='/'>Portfolio</Link></li>
                {!this.props.loggedIn &&
                  <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                  </>}
                {this.props.loggedIn &&
                  <li className="drop-down">My Profile
                    <ul>
                      <li><Link to='/dashboard'>All Events</Link></li>
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
  }
}

var mapStateToProps = ({
  auth: { loggedIn, token, _id }
}) => {
  return { loggedIn, token, _id }
}

export default connect(mapStateToProps, actions)(Header);