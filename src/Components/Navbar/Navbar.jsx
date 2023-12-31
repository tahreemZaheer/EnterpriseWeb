import React, {useState,useEffect} from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Navbar() {
  //font Awesome Icon 
  const menuIcon = <FontAwesomeIcon icon={faBars} />

  //Mobile Menu State
  const [sidenav,setSideNav] = useState(false);
  //SideNav
    const sideNavShow =()=>{
      setSideNav(!sidenav);
    }

    //Desktop Fixed Menu
    const [sticky, setSticky] = useState(false);
    //Fix Navbar
    useEffect(()=>{
      const handleScroll = ()=>{
        setSticky(window.scrollY > 20);
      }

      window.addEventListener('scroll', handleScroll);
      return()=> window.removeEventListener('scroll',handleScroll);  //removing event listener 
    })

  return (
    <header id='site_header' className={`${sticky ? "sticky" : ''}`}>
      <div className='container'>
        <nav className='navbar' id='navbar'>
          <div className='navbar_brand'>
            <a href='/' >
              <h4>Trident Services</h4>
            </a>
          </div>

          <div className='navbar_toggler' onClick={sideNavShow}>  {/** add icon from font awesome react */}
            {menuIcon}
          </div>
          <div className={`menuItems ${sidenav === true ? 'active' : ''}`}>
            <ul>
              <li>
                <Link  to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="services">
                  Services
                </Link>
              </li>
              <li>
                <Link to="portfolio" >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
    </header>
  )
}
