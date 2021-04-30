import React from 'react';
import paintingImage from '../../assets/images/painting.jpg';

import './styles.scss';

export const About = () => (
  <div className="about">
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-5">
          <div className="main_w_title">
            <h2>
              Who <br className="title_br" /> We Are?
            </h2>
            <h6>All About US</h6>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
            qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
            qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      <div className="col-md-7 mb-5">
        <div className="who_we_image">
          <img src={paintingImage} alt="" />
        </div>
      </div>
        </div>
    </div>
  </div>
);
