import React from 'react';

const Portfolio = () => (
  <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title">
        <span>Portfolio</span>
        <h2>Portfolio</h2>
        <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
      </div>
      <div className="top-content">
        <div className="container-fluid">
          <div id="carousel-example" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner portfolio-container row w-100 mx-auto" role="listbox" data-aos="fade-up" data-aos-delay="150">
              <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 portfolio-item filter-web active">
                <img src="/img/portfolio/portfolio-2.jpg" className="img-fluid mx-auto d-block" alt=""></img>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
              <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 portfolio-item filter-card">
                <img src="/img/portfolio/portfolio-4.jpg" className="img-fluid mx-auto d-block" alt=""></img>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
              <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 portfolio-item filter-card">
                <img src="/img/portfolio/portfolio-7.jpg" className="img-fluid mx-auto d-block" alt=""></img>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
              <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 portfolio-item filter-card">
                <img src="/img/portfolio/portfolio-8.jpg" className="img-fluid mx-auto d-block" alt=""></img>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
              <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 portfolio-item filter-card">
                <img src="/img/portfolio/portfolio-9.jpg" className="img-fluid mx-auto d-block" alt=""></img>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
              <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 portfolio-item filter-web">
                <img src="/img/portfolio/portfolio-2.jpg" className="img-fluid mx-auto d-block" alt=""></img>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
              <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 portfolio-item filter-web">
                <img src="/img/portfolio/portfolio-2.jpg" className="img-fluid mx-auto d-block" alt=""></img>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

            </div>
            <a className="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Portfolio;