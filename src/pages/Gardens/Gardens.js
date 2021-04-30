import React from 'react';
import { Gallery } from '../../components';
import SimpleReactLightbox from 'simple-react-lightbox';
import { gardens } from '../../utils/images';

export const Gardens = () => (
  <div className="container mb-5">
    <section className="kitchens">
      <div className="container-fluid p-0">
        <SimpleReactLightbox>
          <Gallery images={gardens} />
        </SimpleReactLightbox>
      </div>
    </section>
  </div>
);
