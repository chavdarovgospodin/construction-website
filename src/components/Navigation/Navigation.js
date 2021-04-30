import React from 'react';
import { useLocation } from 'react-router-dom';
import CONSTANTS from '../../utils/constants';

import './styles.scss';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <div className="navbar-brand">
          <span className="first">V.</span>
          <span className="second">C.</span>
          <span className="third">S.</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li
              className={`nav item ${
                location.pathname === '/' ? 'active' : ''
              }`}
            >
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li
              className={`nav item ${
                location.pathname === '/services' ? 'active' : ''
              }`}
            >
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li
              className={`nav item ${
                location.pathname === '/about' ? 'active' : ''
              }`}
            >
              <a className="nav-link" href="/about">
                About us
              </a>
            </li>
            <li
              className={`nav item ${
                location.pathname === '/gallery' ? 'active' : ''
              }`}
            >
              <a className="nav-link" href="/gallery">
                Gallery
              </a>
            </li>
            <li
              className={`nav item ${
                location.pathname === '/contact' ? 'active' : ''
              }`}
            >
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item__phone">
              <a className="nav-link" href={`tel:${CONSTANTS.PHONE}`}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone-alt"
                  className="svg-inline--fa fa-phone-alt fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                  ></path>
                </svg>
                Call us at {CONSTANTS.PHONE}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
