import React from 'react';
import Service from '../../components/Service';
import * as services from '../../utils/services';

import './styles.scss';

export const Services = () => {
  return (
    <div className="container services">
      <h1 className="mt-5">Services we provide</h1>
      <div className="row">
        <Service services={services.Kitchens} serviceName="Kitchens" />
        <Service serviceName="Tiling and Flooring" />
        <Service services={services.Painting} serviceName="Painting and Decorating" />
        <Service services={services.Bathrooms} serviceName="Bathrooms" />
        <Service services={services.Gardens} serviceName="Gardens" />
        <Service serviceName="Extensions" />
      </div>
    </div>
  );
};
