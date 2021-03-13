import React from 'react';

import './styles.scss';

export const Thumbnail = ({ url, source, caption, alt }, key) => (
  <div className="thumbnail col-lg-4 col-sm-6 mt-lg-5 mt-sm-2 p-2" key={key}>
    <a className="thumbnail-box" href={url}>
      <img className="img-fluid" src={source} alt={alt} />
      <div className="thumbnail-box-caption">
        <div className="thumbnail-box-caption-content">
          <div className="construction-category text-faded">{caption}</div>
        </div>
      </div>
    </a>
  </div>
);
