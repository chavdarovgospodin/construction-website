import React from 'react';
import { Gallery } from '../../components';
import SimpleReactLightbox from 'simple-react-lightbox';
import { getImages, gardens_ } from '../../utils/images';

export const Gardens = () => {
  const gardens = getImages(gardens_, 'garden');

  return (
    <div className="container mb-5">
      <section className="gardens">
        <div className="container-fluid p-0">
          <SimpleReactLightbox>
            <Gallery images={gardens} />
          </SimpleReactLightbox>
        </div>
      </section>
    </div>
  )
}
