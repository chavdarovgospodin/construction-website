import React from 'react';
import PhoneModal from '../PhoneModal';
import CONSTANTS from '../../utils/constants';

import './styles.scss';

export const Header = ({ breakPoint }) => (
    <div className="header">
      <div className="container">
        <div className="pull-left">
          <a href="/">
            <span>VAL DIM</span>
            <span>CONSTRUCTION LTD</span>
          </a>
          {breakPoint !== 'mobile' && (
            <>
              <a href={CONSTANTS.ADDRESS.link} target="_blank">
                <i className="fa fa-map-marker" />
                {CONSTANTS.ADDRESS.text}
              </a>
              <a href={`mailto:${CONSTANTS.EMAIL}`}>
                <i className="fa fa-envelope" />
                {CONSTANTS.EMAIL}
              </a>
            </>
          )}
          {breakPoint === 'mobile' && <div className="mb-3 mt-2"><PhoneModal/></div>}
        </div>
        {breakPoint !== "mobile" && (
          <div className="pull-right">
            <ul className="header_social">
              <li>
                <a href={CONSTANTS.FACEBOOK} target='_blank'>
                  <i className="fa fa-facebook-square" target="_blank" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
)
