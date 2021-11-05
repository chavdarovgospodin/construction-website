import React from 'react';
import PhoneModal from '../../components/PhoneModal';
import linkedin from '../../assets/images/linkedin.png';
import footerLogo from '../../assets/images/FullLogo_Transparent.png';
import CONSTANTS from '../../utils/constants';
import { useLocation } from 'react-router-dom';
import { checkUrl } from '../../utils/utils';
import classnames from 'classnames';
import './styles.scss';

export const Footer = ({breakPoint}) => {
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
              {breakPoint !== 'mobile' && (
                <div className="footer_title">
                  <img src={footerLogo} alt="V.D.C. LTD"  width = "90px" height = "70px"/>
                  <span className="first">V.</span>
                  <span className="second">D.</span>
                  <span className="third">C</span>
                  <span className="first ml-2">LTD</span>
                </div>
              )}
              <p>
                {CONSTANTS.NAME}
              </p>
            </aside>
          </div>
          <div className="col-md-4 col-sm-12">
            <aside className="adress_widget">
            {breakPoint !== 'mobile' && (
              <div className="footer_title">
                <h3>Address</h3>
              </div>
            )}
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
                  <a className="nav-link phone1" href={`tel:${CONSTANTS.PHONE.phone1}`}>
                    {CONSTANTS.PHONE.phone1}
                  </a>
                  <a className="nav-link phone2" href={`tel:${CONSTANTS.PHONE.phone2}`}>
                    {CONSTANTS.PHONE.phone2}
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
            {breakPoint !== 'mobile' && (
              <h5 className="mb-2 mb-md-5">Contact us now</h5>
            )}
              {/* <h4 className="call_us_widget-phone1">{CONSTANTS.PHONE.phone1}</h4>
              <h4 className="call_us_widget-phone2">{CONSTANTS.PHONE.phone2}</h4> */}
              <div className="mt-2 mt-lg-0">
                <PhoneModal text ='call us'/>
              </div>
              {/* <a className="get_bg_btn" href={`tel:${CONSTANTS.PHONE.phone1}`}>
                Call us
              </a> */}
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
