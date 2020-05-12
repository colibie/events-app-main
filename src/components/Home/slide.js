import React from 'react';
import B from '../img/sergio-souza-zPBFtMTBapk-unsplash.jpg';
import './slide.css';
import { Link } from "react-router-dom";

const Slide = () => (
  <div className="myCarousel">
    <div className="inner">
      <div className="item c-item active">
        <img
          className="c-item d-block w-100"
          src={B}
          alt="First slide"
        />
        <div className="carousel-caption c-caption">
          <h1 className="c-h1">Figure out, what it Costs</h1>
          <p className="c-p">we save you the trouble of budgeting</p>
          <button className="btn-get-started"><Link to='/addEvent'>Budget Now </Link> </button>
        </div>
      </div>
    </div>
  </div>
);

export default Slide;