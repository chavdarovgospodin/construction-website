import React from 'react';
import { Gallery } from '../../components';
import SimpleReactLightbox from 'simple-react-lightbox';
import { getImages, bathrooms_ } from '../../utils/images';

export const Bathrooms = () => {
  const bathrooms = getImages(bathrooms_, 'bath')

  return (
    <div className="container mb-5">
      <section className="bathrooms">
        <div className="container-fluid p-0">
          <SimpleReactLightbox>
            <Gallery images={bathrooms} />
          </SimpleReactLightbox>
        </div>
      </section>
    </div>
  )
}
