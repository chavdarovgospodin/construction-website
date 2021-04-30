import React from 'react';
import linkedin from '../../assets/images/linkedin.png';
import footerLogo from '../../assets/images/footer-logo.png';
import CONSTANTS from '../../utils/constants';
import { useLocation } from 'react-router-dom';
import { checkUrl } from '../../utils/utils';
import classnames from 'classnames';
import './styles.scss';

export const Footer = () => {
  const location = useLocation();
  const isUrlValid = checkUrl(location.pathname)

  return (
    <div className = {classnames(
      'footer',
      {
          'footer__comming-soon': !isUrlValid,
      },
  )}
    >
    <div className="footer-widgets">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <aside className="about_widget">
              <div className="footer_title">
                <img src={footerLogo} alt="V.C. LTD" />
                <span className="first">V.</span>
                <span className="second">C.</span>
                <span className="third">S.</span>
              </div>
              <p>
                {CONSTANTS.NAME}
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
                    href={CONSTANTS.ADDRESS.link}
                    target="_blank"
                  >
                    {CONSTANTS.ADDRESS.text}
                  </a>
                </div>
                <div className="media">
                  <i className="fa fa-phone"></i>
                  <a className="nav-link" href={`tel:${CONSTANTS.PHONE}`}>
                    {CONSTANTS.PHONE}
                  </a>
                </div>
                <div className="media">
                  <a href={`mailto:${CONSTANTS.EMAIL}`}> 
                    <i className="fa fa-envelope"></i>
                    {CONSTANTS.EMAIL}
                  </a>
                </div>
                <div className="media">
                  <a href={CONSTANTS.FACEBOOK} target='_blank'>
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
              <h4>{CONSTANTS.PHONE}</h4>
              <a className="get_bg_btn" href={`tel:${CONSTANTS.PHONE}`}>
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
          Copyright ©2021 All rights reserved | This website is made by
          <a
            href={CONSTANTS.LINKEDIN}
            target="_blank"
          >
            Gospodin Chavdarov
            <img src={linkedin} alt="Linkedin" width="25" height="25" />
          </a>
        </h4>
      </div>
    </div>
  </div>

  )
}
