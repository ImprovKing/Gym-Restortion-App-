import React , {useEffect  } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/fooetr/footer';
import NavBar from '../components/navbar/navbar';
import './product.css' ;
import AOS from "aos";
import "aos/dist/aos.css"; 
import {getProducts} from '../_DATAS/products' ;


function Products() {

      //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let product = getProducts() ;
  


    return (
        <div className='App'>
            <NavBar /><br /> <br />
            <div className='pt-10 container'>
            <h2 className='font-bold p-10 text-white text-4xl md:text-3xl p-5'> Products </h2>

            <div className='product-cont mt-10 p-5 h-full md:place-content-center'>

                {/* Product Cards */}
                {
                    product.map((Item) => (
                        <NavLink to={`/product/${Item.id}`} key={Item.id}>
                        <div className='product-card p-5 mb-5 mt-10 grid grid-cols-2 gap-0 md:grid-cols-1 gap-0 p-0 place-content-center'>
                            <div className='product-img-holder' id='product-img-holder' data-aos="zoom-in" >
                                <img src={Item.image} alt='/' />    
                            </div>
                            <div className='text-left' data-aos="fade-right">
                                <h3 className='font-bold text-2xl mt-5'>{Item.name}</h3><br />
                                <div className=''>
                                {Item.shortdec} 
                                </div>
                            </div>
                        </div>
                        </NavLink>
                    ))
                }               
            </div>
            </div>

            
        <Footer />
        </div>
    )
}

export default Products;