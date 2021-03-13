import React from 'react';

import './styles.scss';

export const Header = () => (
  <div className="header">
    <div className="container">
      <div className="pull-left">
        <a href="/">
          <span>Val</span>
          <span>Constuction Services</span>
        </a>
        <a href="#" target="_blank">
          <i className="fa fa-map-marker" />
          1234 Cafficic, California
        </a>
        <a href="mailto:webmaster@example.com">
          <i className="fa fa-envelope" />
          webmaster@example.com
        </a>
      </div>
      <div className="pull-right">
        <ul className="header_social">
          <li>
            <a href="#">
              <i className="fa fa-facebook-square" target="_blank" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
