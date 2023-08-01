import React from 'react'
import './Portfolio.css'

export const Portfolio = () => {
  return (
    <section id='portfolio' className="portfolio_wrapper">
        <div className="container">
            <div className="row">                
                <div className="title_heading">                    
                    <h3>My Latest Projects</h3>
                    <p>The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.</p>
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
