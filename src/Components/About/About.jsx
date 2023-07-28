import React from 'react';
import './About.css';
import about from '../../assets/about/about.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';

export const About = () => {

    //font Awesome Icon 
    const businessTimeIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const chartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const truckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const userClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const HouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const PhoneIcon = <FontAwesomeIcon icon={faPhone} />




    return (
        <>
            <section id='about'>
                <div className='container'>
                    <div className='title_heading'>
                        <h3>We Provides Shortage Remarkable Ideas!</h3>
                        <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>

                    </div>
                    <div className='about_box_wrapper'>
                        <div className='about_box'>
                            <div className="about_icon">
                                {businessTimeIcon}
                            </div>
                            <div className="about_content">
                                <h5>Development</h5>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan sit accusa.</p>
                            </div>
                        </div>
                        <div className='about_box'>
                            <div className="about_icon green_icon">
                                {chartPieIcon}
                            </div>
                            <div className="about_content">
                                <h5>Integration</h5>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan sit accusa.</p>
                            </div>
                        </div>
                        <div className='about_box'>
                            <div className="about_icon blue_icon">
                                {truckFastIcon}
                            </div>
                            <div className="about_content">
                                <h5>Branding</h5>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan sit accusa.</p>
                            </div>
                        </div>
                    </div>

                    <div className="about_box_details">
                        <div className="about_col">
                            <div className="about_img">
                                <img src={about} alt='about image' className='about_main' />
                            </div>
                            <a href="/">
                            <div className="img_info_box"id="outline_box">
                        <h6 className="img_info_title">
                        GET A PRICE QUOTE TODAY!
                        </h6>
                        <p>Nemo enim ipsam oluptatem quia oluptas <br/>sit aspernatur aut odit aut fugit.</p>
                        {PhoneIcon} <span>1-800-654-3210</span>
                    </div>
                    </a>
                        </div>
                        <div className="about_col more_space">
                            <h2>
                                I create products not just art
                            </h2>
                            <p>
                                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <div className="grid_info">
                                <div className="icon">
                                    {userClockIcon}
                                </div>
                                <div className="detail">
                                    <h4>

                                        Web Ui Design

                                    </h4>
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                                    </p>

                                </div>
                            </div>
                            <div className="grid_info">
                                <div className="icon green_icon">{HouseLaptopIcon}</div>
                                <div className="detail">
                                    <h4>Mobile Ui Design</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                                </div>
                            </div>
                            
                            <div className="grid_info">
                                <div className="icon blue_icon">{HouseLaptopIcon}</div>
                                <div className="detail">
                                    <h4>Branding Design</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
