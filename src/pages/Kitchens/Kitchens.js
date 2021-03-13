import React from 'react';
import { Gallery } from '../../components';
import SimpleReactLightbox from 'simple-react-lightbox';
import { kitchens } from '../../utils/images';

export const Kitchens = () => (
  <div className="container">
    <section className="kitchens">
      <div className="container-fluid p-0">
        <SimpleReactLightbox>
          <Gallery images={kitchens} />
        </SimpleReactLightbox>
      </div>
    </section>
  </div>
);
