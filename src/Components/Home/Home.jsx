import React from 'react';
import './home.css';
import profile from '../../assets/home/profile.jpg';
import Typed from 'typed.js';
import { useEffect,useRef } from 'react';


export const Home = () => {

    //create ref element
    const el = useRef(null);

    useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ['Web Developer','Coder','Designer'],
        typeSpeed: 100,
        backDelay:150,
        startDelay:200,
        backSpeed:100,
        smartBackspace:true,
        showCursor:false,
        loop:true,
    });
    return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

    return (
        <section id='home'>
            {/* managing background animation here */}
            <div className='banner_img'>

            </div>
            <div className='container'>
                <div className='banner_outer'>
                    <div className='col'>
                        <h5 className='name'>I'm <span className='multitext'>Tahreem Zaheer</span></h5>
                        <h3 className='title'>
                            I'm a <span ref={el}> Web Developer </span>
                        </h3>
                        <p>
                            I am a web designer and developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                        <div className='btn-wrapper'>
                            <a className='btn' href='/'>Download Resume</a>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='sub_banner_image'>
                            <img src={profile} alt='Tahreem Zaheer' />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
