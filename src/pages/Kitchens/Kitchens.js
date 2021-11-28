import React from 'react';
import { Gallery } from '../../components';
import SimpleReactLightbox from 'simple-react-lightbox';
import { getImages, kitchens_ } from '../../utils/images';

export const Kitchens = () => {
  const kitchens = getImages(kitchens_, 'kitchen');

  return (
    <div className="container mb-5">
      <section className="kitchens">
        <div className="container-fluid p-0">
        <SimpleReactLightbox>
          <Gallery images={kitchens} />
        </SimpleReactLightbox>
      </div>
    </section>
  </div>
  )
};
