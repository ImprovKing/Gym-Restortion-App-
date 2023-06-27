import React , { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import "./navbar.css" ;


function NavBar() {
      //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


    return (
        <div >
            <nav >
                <input type={'checkbox'} className="openSidebarMenu" id="openSidebarMenu" />
                <label htmlFor="openSidebarMenu" className="sidebarIconToggle" data-aos="fade-left">
                    <div className="spinner diagonal part-1"></div>
                    <div className="spinner horizontal"></div>
                    <div className="spinner diagonal part-2"></div>
                </label>

                <div id="sidebarMenu" >
                    <ul className="sidebarMenuInner">
                        <li className='font-extralight hover:text-red-500'>
                            <Link to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li className='font-extralight hover:text-red-500'>
                            <Link to={'/Coaches'}>
                                Coaches
                            </Link>
                        </li>
                        <li className='font-extralight hover:text-red-500'>
                            <Link to={'/Products'}>
                                Products
                            </Link>
                        </li>
                        <li className='font-extralight hover:text-red-500'>
                            <Link to={'/Blog'}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;