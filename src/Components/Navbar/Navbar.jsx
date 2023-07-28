import React, {useState,useEffect} from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';


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
              {/* <img src={logo} alt='Logo' /> * add logo */}
            </a>
          </div>

          <div className='navbar_toggler' onClick={sideNavShow}>  {/** add icon from font awesome react */}
            {menuIcon}
          </div>
          <div className={`menuItems ${sidenav === true ? 'active' : ''}`}>
            <ul>
              <li>
                <Link activeClass="active" to="/" spy={true} smooth={true} >
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true} >
                  Services
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true} >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className='container'>
        <Outlet/>
      </div>
    </header>
  )
}
