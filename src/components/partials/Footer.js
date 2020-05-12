import React from 'react';

const Footer = () => (
  <>
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="">
              <h4>Day</h4>
              <p>
                A108 Adam Street <br/>
                NY 535022, USA<br/><br/>
              </p>

            </div>
          </div>

          <div className="col-lg-3 col-md-6 social-links">
            <h4>Contact</h4>
            <span>Phone:</span> +1 5589 55488 55<br/>
            <span>Email:</span> info@example.com<br/>
          </div>

          <div className="col-lg-3 col-md-6 social-links">
            <h4>Socials</h4>
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
        </div>
      </div>
    </div>

      <div className="container" id="footer">
        <div className="text-muted">
            &copy; 2020. <a href="#">The Event</a>
          </div>
        </div>
    </footer>

    <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
    {/* <div id="preloader"></div> */}
  </>
        );
export default Footer;