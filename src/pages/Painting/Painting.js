import React from 'react';
import { Gallery } from '../../components';
import SimpleReactLightbox from 'simple-react-lightbox';
import { getImages, painting_ } from '../../utils/images';

export const Painting = () => {
  const painting = getImages(painting_, 'painting')

  return (
    <div className="container mb-5">
      <section className="painting">
        <div className="container-fluid p-0">
          <SimpleReactLightbox>
            <Gallery images={painting} />
          </SimpleReactLightbox>
        </div>
      </section>
    </div>
  )
}
