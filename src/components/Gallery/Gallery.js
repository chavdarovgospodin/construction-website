import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import LazyLoad from 'react-lazy-load';

import './styles.scss';

const options = {
  settings: {
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: false,
    size: '50px'
  },
  caption: {
    showCaption: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

export const Gallery = ({ images }) => (
  <SRLWrapper options = {options}>
    <div
      className="row gallery-item"
      // data-wow-iteration="1"
      // data-wow-offset="0.1"
      // data-wow-delay="0.1s"
    >
      {images.map((image, index) => {
        return (
          <div className="col-lg-4 col-sm-6 mt-lg-5 mt-sm-2 p-2" key={index}>
            <div className="thumbnail-box">
            <LazyLoad height={400}>
                <img src={image.source} alt={image.alt} />
                </LazyLoad>
            </div>
          </div>
        );
      })}
    </div>
  </SRLWrapper>
);
