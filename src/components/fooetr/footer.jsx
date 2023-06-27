import React , {useEffect} from 'react';
import "./footer.css" 
import logo from './logo.svg' ;
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

function Footer() {

      //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


    return (
        <footer className='mt-20'>
            <div className='img-container font-bold text-center pl-5 pt-5 text-red-500 text-3xl sm:text-lg '>
                <Link to={'/'} >
                <img src={logo} alt='/'  data-aos='zoom-in' data-aos-duration='1000' />
                </Link><br />
                <p className='text-blue-500 text-2xl text-center'> Restoration GYM </p>
            </div>    

            <div className='grid grid-cols-3 gap-3 cotainer mt-20 md:grid-cols-1'>
                <div className='p-10 text-center md:p-5'> 
                    <h3 className='font-bold text-white md:text-sm'> About Sky Fitness Gym </h3><br />
                    <div className='text-base font-extralight md:text-xs  '>
                    Skyfit is a gym founded on the pursuit of self-improvement. Our gym is architecturally designed to give you the best atmosphere for a satisfactory workout and a beautiful view of the city of Lagos and waterfront.
                    </div>
                </div>    
                <div className='p-10 text-center md:mx-auto my-auto block'>
                    <h3 className='font-bold text-center text-white md:text-sm'> Follow Us on Socials </h3><br />
                    <div className='grid grid-cols-4 text-center md:grid-cols-4 gap-1 '>
                            <img src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png' alt='' id='inner-block'/>

                            <img src='https://1000logos.net/wp-content/uploads/2021/04/Twitter-logo-500x281.png' alt='' id='inner-block'/>

                            <img src='https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-500x281.png' alt='' id='inner-block'/>

                            <img src='https://1000logos.net/wp-content/uploads/2021/04/YouTube-logo-500x281.png' alt='' id='inner-block'/>

                    </div>
                </div>    
                <div className='p-10 text-center'>
                    <h3 className='font-bold text-white md:text-sm'> Visit the Gym </h3><br />
                    <div className='text-base font-extralight md:text-xs'>Oriental Hotel, 3, Lekki-Epe expressway, Victoria Island, Lagos
                    </div>
                </div>    
            </div>
        </footer>
    )
}

export default Footer;