import React from 'react'
import './Portfolio.css'

export const Portfolio = () => {
  return (
    <section id='portfolio' className="portfolio_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center mb-4">
                    <span className='subtitle'>My Complete projects</span>
                    <h2>My Latest Projects</h2>
                    <p>
                        The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.
                        <br className='d-none d-md-block'></br>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                        </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card p-0">
                        <span className='portfolio-card1'></span>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card p-0">
                        <span className='portfolio-card2'></span>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card p-0">
                        <span className='portfolio-card3'></span>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card p-0">
                        <span className='portfolio-card4'></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
