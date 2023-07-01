import './App.css';
import React, { useEffect } from "react";
import Footer from './components/fooetr/footer';
import NavBar from './components/navbar/navbar';
import cardio from './cardio.svg';
import Weight from './weight.svg';
import yoga from './yoga.svg';
import biceps from './biceps.svg';
import { Carousel } from '3d-react-carousal';
import RCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { getArticles } from './_DATAS/articles' ;
import { Loader } from '@googlemaps/js-api-loader';



let slides = [
  <img src="https://www.womenfitness.net/wp/wp-content/uploads/2017/03/Svava-Sigbertsdottir.jpeg" alt="2" />,
  <img src="https://th.bing.com/th/id/R.bc5e80929bebfc8ff69ce1d493f63666?rik=RyGMV0k6bNhQbA&pid=ImgRaw&r=0" alt="3" />,
  <img src="https://th.bing.com/th/id/R.ea59793a7b82f598fd0469a56a176f37?rik=q20Uw8OJdiIArw&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1302%2f0275%2fproducts%2fSimeon_Panda_Focus_Poster_2_1200x630.jpg%3fv%3d1463745955&ehk=QQTJqlt3YgrxYSuA7%2fadXxMtjXHeug%2fdR8nqRQc%2bBPs%3d&risl=&pid=ImgRaw&r=0" alt="4" />,
];

const callback = function (index) {
  return index ;
}

const loader = new Loader({
  apiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 12,
    lng: 6
  },
  zoom: 4
};

// Promise
loader
  .load()
  .then((google) => {
    new google.maps.Map(document.getElementById("cont-map"), mapOptions);
  })
  .catch(err => { const mute = err });

  
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const headshotResp = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const App = () =>{


  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let articles = getArticles() ;



  return (
    <div className="App">
      {/* SECTIONS IN EVERY PART*/}

       {/* HEADSHOT*/}

   
      <div className='headshot'>
        <RCarousel responsive={headshotResp} >
          <div id='headshotImg-cont'>
            <img src='https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
          </div>
          <div id='headshotImg-cont'>
            <img src='https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
          </div>
          <div id='headshotImg-cont'>
            <img src='https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
          </div>
        </RCarousel>
        {/* HEADSHOT */}
        <div className='header-text ' data-aos="fade-up" >
          <h2 className='font-sans text-white font-bold text-4xl px-1 m5 md:text-3xl' > Shape Your Body Today </h2>
          <button className='text-white bg-blue-500 hover:bg-blue-700 rounded py-2 px-4 lg:text-base '><Link to={'/pricings'}> Get Started </Link></button>
        </div>
        <div id='nav'>        
      <NavBar />
      </div>
      </div>

      {/* PROGRAMS  SECTION*/}

      <section className='container'>

        <h3 className='text-black-500 font-sans font-bold head'> Our Programs </h3>
        <div className='info-text text-base font-extralight '>
          Skyfit programs are designed for universal scalability, making it the perfect application for any committed individual regardless of experience.v
        </div>

        {/* CONTENT box */}
        <div className='flex  block w-auto md:block '>
          <div className='grid grid-cols-2 gap-4  px-4 py-5  w-1/2 m-2 md:grid-cols-1 w-full '>
            <div className='block px-2 py-2 ' data-aos="fade-right">
              <div className='prog-img-holder'>
                {/* ImaGE */}
                <img src={biceps} alt='/' />
              </div>
              <h4 className='font-bold text-gray p-2 '> Body Building </h4>
              <div className='font-extralight text-base '>
                Alternate between several exercises that target different muscle groups all at the same time with a minimum amount of rest.
              </div>
            </div>

            <div className='block px-2 py-2 ' data-aos="fade-right" >
              <div className='prog-img-holder'>
                {/* ImaGE */}
                <img src={Weight} alt='/' />
              </div>
              <h4 className='font-bold text-gray p-2 '>Weight Lifting </h4>
              <div className='font-extralight text-base'>
                Alternate between several exercises that target different muscle groups all at the same time with a minimum amount of rest.
              </div>
            </div>

            <div className='block px-2 py-2 ' data-aos="fade-right">
              <div className='prog-img-holder'>
                {/* ImaGE */}
                <img src={cardio} alt='/' />
              </div>
              <h4 className='font-bold text-gray p-2 '> Cardio </h4>
              <div className='font-extralight text-base'>
                Alternate between several exercises that target different muscle groups all at the same time with a minimum amount of rest.
              </div>
            </div>

            <div className='block px-2 py-2 ' data-aos="fade-right" >
              <div className='prog-img-holder'>
                {/* ImaGE */}
                <img src={yoga} alt='/' />
              </div>
              <h4 className='font-bold text-gray p-2 '> Yoga </h4>
              <div className='font-extralight text-base'>
                Alternate between several exercises that target different muscle groups all at the same time with a minimum amount of rest.
              </div>
            </div>
          </div>

          {/* CONTENT BOX */}

          <div className='content-img-holder ' id='content-img-holder' data-aos="zoom-in">
            {/* people gathering images */}
          </div>
        </div>

      </section><br /><br />

      {/*INVITE YOUR FRIENDS  SECTION */}

      <section className='invite text-center'>
        <h3 className='font-bold text-3xl text-center m-8'> Invite Your Friends </h3>
        <button className='text-white text-center inline-block bg-blue-500 hover:bg-blue-700 rounded py-2 px-4 lg:font-size-small'> invite </button>
      </section><br /><br />

      {/* BLOG */}

      <section className='text-center blog'>
        <h2 className='font-bold text-3xl m-5 md:text-lg'> Blog </h2>
        <h5 className=' block text-base font-extralight md:w-full ' id='blog-info'>We offer a variety of Lessons  to enlighten you. Our program is designed to bring you additional benefits of a well-rounded program. In each of the tutorial. our focus is building consistency over time, and then increasing intensity relative to the individual.  </h5>

        {/* ARTICLE CONTAINER */}
        <div className='grid grid-cols-3 gap-3 text-lg place-content-center m-10 md:grid-cols-1 gap-2 w-full m-0  bm:grid-cols-1 gap-2 w-full m-0  ' id='blog-cont-box'>

              <div className=" shadow-md rounded-lg max-w-md mb-5 mt-10 blog-card1 bm:mx-auto my-auto " id='blog-cards' data-aos="zoom-in">
                
                <div className="p-2 ">
                  <a href="#">
                    <h5 className="text-red-300 font-bold tracking-tight mb-2">How much of your body is involved in your typical workout routine? If you’re like most average gym-goers</h5>
                  </a>
                  <p className="font-normal text-gray-700 mb-3 " id='blog-info-text'>Creatine closely follows whey protein in the list of most popular sports nutrition products. It’s convenient, it’s backed up byresearch and it’s a valuable part of nutrition .</p>
                  <a className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                   href="https://www.healthline.com/nutrition/creatine-safety-and-side-effects#bottom-line">
                    Read more
                  </a>
                </div>
              </div>

              <div className=" shadow-md rounded-lg max-w-md mb-5 mt-10 blog-card2 bm:mx-auto my-auto " id='blog-cards' data-aos="zoom-in">
                
                <div className="p-2 ">
                  <a href="#">
                    <h5 className="text-red-300 font-bold tracking-tight mb-2">Creatine Supplements 101: Benefits, Side Effects And More</h5>
                  </a>
                  <p className="font-normal text-gray-700 mb-3 " id='blog-info-text'>How much of your body is involved in your typical workout routine.</p>
                  <a className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                   href="https://www.omnilit.com/tl/sport/need-full-body-workout-routine-get/">
                    Read more
                  </a>
                </div>
              </div>

              <div className=" shadow-md rounded-lg max-w-md mb-5 mt-10 blog-card3 bm:mx-auto my-auto " id='blog-cards' data-aos="zoom-in">
                
                <div className="p-2 ">
                  <a href="#">
                    <h5 className="text-red-300 font-bold tracking-tight mb-2">Yoga as a potential therapy for cardiovascular disease</h5>
                  </a>
                  <p className="font-normal text-gray-700 mb-3 " id='blog-info-text'>It’s important to give your entire body a workout, one way or another</p>
                  <a className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                   href="https://www.kurzweilai.net/yoga-as-a-potential-therapy-for-cardiovascular-disease-and-metabolic-syndrome">
                    Read more
                  </a>
                </div>
              </div>

        </div>
        <Link to={'/Blog'}>
        <button className='text-white bg-blue-500 hover:bg-blue-700 rounded py-2 px-4 lg:font-size-small blog-btn'> See More </button>
          </Link>
      </section>

      {/* ARTICLE CONTAINER */}

      <section className='coach'>
        <h2 className='font-bold text-3xl m-10 md:text-lg'> OUR EXPERT TRAINERS </h2>
        <p className='text-center  font-extralight ti:text-xs'> Meet our team of seasoned trainers and instructors who will ensure you get the best support for your body goals.</p>
        <br /><br />
        <div className='coach-height'>
          <Carousel slides={slides} autoplay={true} interval={3000} onSlideChange={callback} />
          <br /><br />
          <div className='text-center  mt-10'>
            <button className='text-center text-white rounded hover:bg-blue-700 bg-blue-600 px-2 py-4 md:text-sm px-1 py-2'> Check Our Coaches Out</button>
          </div>
        </div>
      </section> <br /> <br />

      {/* TESTIMONIALS */}

      <section className='h-100 mb-20 mt-20 block test-cont md:text-center sm:p-0 m-0 ' id='test-sect'>
        <h2 className='font-bold text-3xl m-10 md:text-center md:text-lg'> WHAT OUR CUSTOMERS SAY ABOUT US </h2>
        <div className='text-center pt-20'>{/* container */}

          <RCarousel responsive={responsive} >
            <div className='p-2 w-100 card '>{/* card */}
              <div className=' text-center md:text-xs' id='test-card'>{/* info */}
                Skyfit is a gym founded on the pursuit of self-improvement. Our gym is architecturally designed to give you the best atmosphere for a satisfactory workout and a beautiful view of the city of Lagos and waterfront.
              </div>
              <div className='card-image'>{/* image */}
                <img src='https://th.bing.com/th/id/OIP.LsLz2OAqoWs4qeG0AXsuygAAAA?pid=ImgDet&rs=1' alt='/' className='' />
              </div>
            </div>

            <div className='p-2 w-100 card '>{/* card */}
              <div className='  text-center md:text-xs' id='test-card' >{/* info */}
                Skyfit is a gym founded on the pursuit of self-improvement. Our gym is architecturally designed to give you the best atmosphere for a satisfactory workout and a beautiful view of the city of Lagos and waterfront.
              </div>
              <div className='card-image'>{/* image */}
                <img src='https://th.bing.com/th/id/OIP.DdcYYLjdwGMCcWbdrh3NDgAAAA?pid=ImgDet&rs=1' alt='/' className='' />
              </div>
            </div>

            <div className='p-2 w-100 card'>{/* card */}
              <div className=' text-center md:text-xs' id='test-card' >{/* info */}
                Skyfit is a gym founded on the pursuit of self-improvement. Our gym is architecturally designed to give you the best atmosphere for a satisfactory workout and a beautiful view of the city of Lagos and waterfront.
              </div>
              <div className='card-image'>{/* image */}
                <img src='https://th.bing.com/th/id/OIP.XFx_LNHBQ9rAUpxUmuoJ6gHaHa?pid=ImgDet&rs=1' alt='/' className='' />
              </div>
            </div>

          </RCarousel>

        </div>
      </section>


      {/* CONTACT */}

      <section className='mt-10 mb-10 container' id='contact'>

        <div className='grid grid-cols-2 gap-2 md:grid grid-cols-1 gap-1 '>

          <div className='p-10 text-center'>{/* infos */}
            <h2 className='font-bold text-3xl m-10 md:text-lg '>GET IN TOUCH </h2><br />
            <h5 className=''> +234 817 269 9901 <br /><br />  etfit@skyfitnessng.com </h5>
          </div>


          <div className='cont-map ' id='cont-map'>
            {/* google api for map of upstate new york location */}
          </div>

        </div>
      </section>


      {/* FOOTER  */}
      <Footer />
    </div>
  );
}

export default App;
