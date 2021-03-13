import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

import './styles.scss';

export const Gallery = ({ images }) => (
  <SRLWrapper>
    <div
      className="row gallery-item mb-5 wow fadeInDown"
      data-wow-iteration="1"
      data-wow-offset="80"
      data-wow-delay="0.1s"
    >
      {images.map((image, index) => {
        return (
          <div className="col-lg-4 col-sm-6 mt-lg-5 mt-sm-2 p-2" key={index}>
            <div className="thumbnail-box">
              <img src={image.source} alt={image.alt} />
            </div>
          </div>
        );
      })}
    </div>
  </SRLWrapper>
);
