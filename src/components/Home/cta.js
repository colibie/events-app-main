import React from 'react';
import { Link } from 'react-router-dom';
const CTA = (props) => (

    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h3>Call To Action</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className="cta-btn"><Link to='/addEvent'>Budget Now </Link> </button>
        </div>

      </div>
    </section>
);

export default CTA;