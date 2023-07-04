import React  from 'react';
import Footer from '../components/fooetr/footer';
import NavBar from '../components/navbar/navbar';
import './productDetail.css' ;
import { useParams } from 'react-router-dom';
import { getProductsId } from '../_DATAS/products';

function ProductDetails() {

 
    let params = useParams() ;
    let productDetails = getProductsId( parseInt (params.productId , 10))  ;
    return (
        <div className='App'>
            <NavBar /><br /> 
            <div className='pt-10 container'>

                <div className='p-5 mb-5 mt-5 sm:grid-cols-1 p-0 ' id='prod-det-cont'>
                    <div className='grid grid-cols-2 w-full  gap-3 p-10 bm:grid-cols-1 p-5'>
                        <div className='prd-img-container' id='prd-img-container'>
                            <img src={productDetails.image} alt='' />
                        </div>
                        <div className='prod-info p-5 w-full md:p-3 sm:p-1'>
                            <h2 className='font-bold text-3xl  mt-5 sm:text-md'> {productDetails.name}</h2><br />
                            <h3 className='font-bold text-3xl  mt-5 sm:text-md text-2xl'> {productDetails.price} </h3><br /> <br />
                            <div className='other-info'>
                              
                            </div>
                            <button id='det-btn'> 
                            <button className="bg-black rounded text-white px-2 py-4"> Buy Now </button>
                            </button>
                        </div>
                    </div>                   
                </div>

                <div className='container p-10 md:p-2'>
                    Description : <br />
                    <p className='p-5 md:text-sm p-2'>
                       { productDetails.description}
                    </p> 
                </div>
                
            </div>

            <Footer />
        </div>
    )
}

export default ProductDetails;