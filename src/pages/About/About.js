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
            Are you looking to enhance or improve your property? Thinking of extending your home or converting your current loft space to add more room? In today’s uncertain market at least you can be sure of one thing by improving your property it will only add value.
          </p>
          <p>
          Val Dim constraction Ltd can take care of various building projects including extending your property to maximise it’s potential or converting your current loft into a more habitable space. You may be thinking of up grading your kitchen or bathroom.
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
