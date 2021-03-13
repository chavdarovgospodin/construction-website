import React from 'react';
import { Thumbnail } from './Thumbnail/Thumbnail';
import { thumbnails } from '../../utils/images';


export const Thumbnails = () => (
  <div className="thumbnails">
    <div className="container mb-5">
      <section className="p-0">
        <div className="container-fluid p-0">
          <div className="row no-gutters popup-gallery">
            {thumbnails.map((thumbnail, index) => {
              return <Thumbnail {...thumbnail} key={index} />;
            })}
          </div>
        </div>
      </section>
    </div>
  </div>
);
