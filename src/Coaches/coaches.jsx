import React, { useEffect } from 'react';
import Footer from '../components/fooetr/footer';
import NavBar from '../components/navbar/navbar';
import './coaches.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { getAllCoaches } from '../_DATAS/coach';

function Coaches() {

    let Coaches = getAllCoaches();
    //useEffect
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='App'>
            <NavBar /> <br /> <br />
            <div className='pt-10 container' >
                <h2 className='font-bold p-10 text-white text-4xl md:text-3xl p-5'> Coaches </h2>

                {/* Coaches Lists */}
                <div className='container '>

                    {/* Coach Card */}
                    {
                        Coaches.map((coach) => (
                            <a key={coach.id}>
                                <div className='coach-card mt-10 grid grid-cols-2 gap-2 p-10 text-center lg:grid-cols-1 gap-2 md:p-2' >
                                    <div className='img-holder1' id='img-holder' data-aos="zoom-in-up">
                                        <img src={coach.image} alt='/' />
                                        {/* Coach Image */}
                                    </div>
                                    <div className='coach-info ' data-aos="zoom-out" >
                                        <h2 className='font-bold text-white text-3xl text-center'>{coach.name} </h2>
                                        <p className='text-center font-extralight'>{coach.category} </p>
                                        <div className='m-5 text-center sm:text-sm '>
                                           {coach.about}
                                        </div>
                                        <button className='text-white bg-blue-500 hover:bg-blue-700 rounded py-2 px-4 lg:text-base'> Book Coach</button>
                                    </div>
                                </div>
                            </a>   
                        ))
                    }


                </div>

            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Coaches;