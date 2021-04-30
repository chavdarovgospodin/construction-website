import React from 'react';

import './styles.scss';

export const Service = ({ services, serviceName }) => {
  return (
    <section className="services col-md-4 mt-5 mb-5">
      <hr/>
      <div className="service-name">
        <h2>{serviceName}</h2>
      </div>
      <ul>
        {services && services.map((service, index) => {
          return (
            <li className="service-item" key={index}>
              <span>{service}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
