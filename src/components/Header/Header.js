import React from 'react';
import CONSTANTS from '../../utils/constants';

import './styles.scss';

export const Header = () => (
  <div className="header">
    <div className="container">
      <div className="pull-left">
        <a href="/">
          <span>Val</span>
          <span>Constuction Services</span>
        </a>
        <a href={CONSTANTS.ADDRESS.link} target="_blank">
          <i className="fa fa-map-marker" />
          {CONSTANTS.ADDRESS.text}
        </a>
        <a href={`mailto:${CONSTANTS.EMAIL}`}>
          <i className="fa fa-envelope" />
          {CONSTANTS.EMAIL}
        </a>
      </div>
      <div className="pull-right">
        <ul className="header_social">
          <li>
            <a href={CONSTANTS.FACEBOOK} target='_blank'>
              <i className="fa fa-facebook-square" target="_blank" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
