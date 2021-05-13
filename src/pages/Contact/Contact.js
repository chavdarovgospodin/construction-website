import React from 'react';
import CONSTANTS from '../../utils/constants';

import './styles.scss';

export const Contact = () => (
  <div className="contact">
    <div className="container">
      <h2>Contact</h2>
      <h3>
        Contact us today whether you would like to get your project started,
        have a general enquiry or would like a no obligation quote. Either way
        we are here to help!
      </h3>
      <div className="row mt-5">
        <div className="col-md-7 mb-5">
          <div className="contact_us p-1">
            <h4 className="mt-3">Phones: {CONSTANTS.PHONE.phone2}</h4>
            <h4 className="mt-5">Adress: {CONSTANTS.ADDRESS.text}</h4>
          </div>
        </div>
        <div className="col-md-5">
          <a className="facebook" href={CONSTANTS.FACEBOOK} target="_blank">
            <div className="content">
              <i className="fa fa-facebook-square"></i>
              <span>Facebook Page</span>
            </div>
          </a>
          <a className="phone" href={`tel:${CONSTANTS.PHONE}`}>
            <div className="content">
              <i className="fa fa-phone"></i>
              <span>Call us</span>
            </div>
          </a>
          <a className="email" href={`mailto:${CONSTANTS.EMAIL}`}>
            <div className="content">
              <i className="fa fa-envelope"></i>
              <span>Email us</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);
