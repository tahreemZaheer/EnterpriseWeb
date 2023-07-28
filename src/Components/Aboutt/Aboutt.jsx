import React from 'react'
import './About.css'
import about from '../../assets/about/about.png';
import { Footer } from '../Footer/Footer';
export const Aboutt = () => {
    return (
        <>
            <section id="about" className='about-wrapper'>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                        <div className="about_img">
                            <img src={about} alt='about image' className='img-fluid rounded-5' />
                            </div>
                        </div>
                        <div className="col-lg-7 ps-lg-5 text-center text-lg-start">
                            <div className="my-3 mb-lg-0">
                                <span className='subtitle'>I create products not just art</span>
                                <h2>About Me</h2>
                                <p>
                                    Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="pt-4">
                                <>
                                    <ul className="nav nav-pills justify-content-between justify-content-lg-between mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="pills-skill-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-skill"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-skill"
                                                aria-selected="true"
                                            >
                                                Skills
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-awards-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-awards"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-awards"
                                                aria-selected="false"
                                            >
                                                Awards
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-experience-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-experience"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-experience"
                                                aria-selected="false"
                                            >
                                                Experience
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-education-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-education"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-education"
                                                aria-selected="false"
                                                education=""
                                            >
                                                Education
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="pills-skill"
                                            role="tabpanel"
                                            aria-labelledby="pills-skill-tab"
                                            tabIndex={0}
                                        >
                                            <div className="single-progress">
                                                <h6>Project Management</h6>
                                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar" style={{ width: "95%" }}></div>
                                                </div>
                                                <span className='label'>95%</span>

                                            </div>

                                            <div className="single-progress">
                                                <h6>Problem Solving</h6>
                                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar" style={{ width: "65%" }}></div>
                                                </div>
                                                <span className='label'>65%</span>

                                            </div>
                                            <div className="single-progress">
                                                <h6>Development</h6>
                                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar" style={{ width: "85%" }}></div>
                                                </div>
                                                <span className='label'>85%</span>

                                            </div>

                                            <div className="single-progress">
                                                <h6>Communication Skills</h6>
                                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar" style={{ width: "90%" }}></div>
                                                </div>
                                                <span className='label'>90%</span>

                                            </div>

                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-awards"
                                            role="tabpanel"
                                            aria-labelledby="pills-awards-tab"
                                            tabIndex={0}
                                        >
                                            <ul className='text-start ps-0'>
                                                <li>
                                                    <a href='/'>Awards.com<span> Winner</span> </a>2019-2020                                                    
                                                    
                                                </li>
                                                <li>
                                                    <a href='/'>CSS Design Awards<span> Winner</span> </a>2019-2020                                                    
                                                    
                                                </li>
                                                <li>
                                                    <a href='/'>Design Nominees<span> site of the day</span> </a>2019-2020                                                    
                                                    
                                                </li>
                                                <li>
                                                    <a href='/'>Awards.com<span> Winner</span></a> 2019-2020                                                    
                                                   
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-experience"
                                            role="tabpanel"
                                            aria-labelledby="pills-experience-tab"
                                            tabIndex={0}
                                        >
                                            <ul className='text-start ps-0'>
                                                <li>
                                                    <a href='/'>Sr.Front-end Engineer<span>- Google</span></a> 2018- Current                                                    
                                                    
                                                </li>
                                                <li>
                                                    <a href='/'>Front-end Engineer<span>- Microsoft</span> </a>2017-2018                                                    
                                                    
                                                </li>
                                                <li>
                                                    <a href='/'>Software Engineer<span>- Alibaba</span> </a>2013-2014                                                    
                                                    
                                                </li>
                                                <li>
                                                    <a href='/'>Software Engineer<span>- AbcTexh</span> </a>2012-2013                                                    
                                                    
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-education"
                                            role="tabpanel"
                                            aria-labelledby="pills-education-tab"
                                            tabIndex={0}
                                        >
                                            <ul className='text-start ps-0'>
                                            <li>
                                                    <a href='/'>User Experience Design<span>- Udemy</span></a> 2020                                                    
                                                    
                                                </li>
                                                <li>
                                                    <a href='/'>BS In Software Engineering<span>- Jinnah University For Women</span> </a>2017-2014                                                    
                                                    
                                                </li>
                                                <li>
                                                    <a href='/'>Diploma In Website Development<span>- Aptech</span></a> 2013-2014                                                    
                                                    
                                                </li>
                                                <li>
                                                    <a href='/'>Interaction Design<span>- Udemy</span> </a>2014                                                    
                                                    
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </>
    )
}
