import React from 'react'
import './service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket,faDesktop,faPaintBrush,faPen,faQuidditch,faTabletAlt} from '@fortawesome/free-solid-svg-icons';

export const Services = () => {

 //font Awesome Icon 
 const faDesktopIcon = <FontAwesomeIcon icon={faDesktop} />
 const faPaintBrushIcon = <FontAwesomeIcon icon={faPaintBrush} />
 const faRocketIcon = <FontAwesomeIcon icon={faRocket} />
 const wordpressIcon = <FontAwesomeIcon icon={faPen} />
 const faQuidditchIcon = <FontAwesomeIcon icon={faQuidditch} />
 const faTabletAltIcon = <FontAwesomeIcon icon={faTabletAlt} />


  return (
    <>
    <div id="services">
      <div className="container">
        <div className="title_heading">
          <h3>
          I am Specialized in
          </h3>
          <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>

        <div className="service_wrapper">
          <div className="service_box">
             <div className="service_icon blue_icon">{faDesktopIcon}</div>
             <h4 className='number'>01</h4>
             <div className="service_content">
              <h5>Website Development</h5>
              <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.</p>
              <a href='/' className='read'>Read More</a>
             </div>
          </div>


          <div className="service_box">
             <div className="service_icon ">{faQuidditchIcon}</div>
             <h4 className='number'>02</h4>
             <div className="service_content">
              <h5>UI/UX Design</h5>
              <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.</p>
              <a href='/' className='read'>Read More</a>
             </div>
          </div>


          <div className="service_box">
             <div className="service_icon green_icon">{wordpressIcon}</div>
             <h4 className='number'>03</h4>
             <div className="service_content">
              <h5>Wordpress Design</h5>
              <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.</p>
              <a href='/' className='read'>Read More</a>
             </div>
          </div>



          <div className="service_box">
             <div className="service_icon green_icon">{faRocketIcon}</div>
             <h4 className='number'>04</h4>
             <div className="service_content">
              <h5>SEO Optimization</h5>
              <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.</p>
              <a href='/' className='read'>Read More</a>
             </div>
          </div>



          <div className="service_box">
             <div className="service_icon  blue_icon">{faTabletAltIcon}</div>
             <h4 className='number'>05</h4>
             <div className="service_content">
              <h5>Apps Development</h5>
              <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.</p>
              <a href='/' className='read'>Read More</a>
             </div>
          </div>



          <div className="service_box">
             <div className="service_icon">{faPaintBrushIcon}</div>
             <h4 className='number'>06</h4>
             <div className="service_content">
              <h5>Graphic Design</h5>
              <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem, dolor set.</p>
              <a href='/' className='read'>Read More</a>
             </div>
          </div>


        </div>
      </div>
      </div>
      </>
  )
}
