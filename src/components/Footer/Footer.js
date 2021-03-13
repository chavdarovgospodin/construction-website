import React from 'react';
import linkedin from '../../assets/images/linkedin.png';
import footerLogo from '../../assets/images/footer-logo.png';
import './styles.scss';

export const Footer = () => (
  <div className="footer">
    <div className="footer-widgets">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <aside className="about_widget">
              <div className="footer_title">
                <img src={footerLogo} alt="V.C.S." />
                <span className="first">V.</span>
                <span className="second">C.</span>
                <span className="third">S.</span>
              </div>
              <p>
                Val Construction Services Val Construction Services Val
                Construction Services Val Construction Services
              </p>
            </aside>
          </div>
          <div className="col-md-4 col-sm-12">
            <aside className="adress_widget">
              <div className="footer_title">
                <h3>Address</h3>
              </div>
              <div className="address_inner">
                <div className="media">
                  <i className="fa fa-map-marker"></i>
                  <a
                    className="nav-link"
                    href="https://maps.google.com/maps?q=London"
                    target="_blank"
                  >
                    1234 Cafficic, London, UK
                  </a>
                </div>
                <div className="media">
                  <i className="fa fa-phone"></i>
                  <a className="nav-link" href="tel:5554280940">
                    555-428-0940
                  </a>
                </div>
                <div className="media">
                  <a href="mailto:webmaster@example.com">
                    <i className="fa fa-envelope"></i>
                    webmaster@example.com
                  </a>
                </div>
                <div className="media">
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook-square"></i>
                    Facebook page
                  </a>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-md-4 col-sm-12">
            <aside className="call_us_widget">
              <h5>Give Us A Call</h5>
              <h4>(012) 3456789</h4>
              <a className="get_bg_btn" href="#">
                Call us
              </a>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        <h4>
          Copyright ©2020 All rights reserved | This website is made by
          <a
            href="https://www.linkedin.com/in/gospodin-chavdarov-ab2435158/"
            target="_blank"
          >
            Gospodin Chavdarov
            <img src={linkedin} alt="Linkedin" width="25" height="25" />
          </a>
        </h4>
      </div>
    </div>
  </div>
);
