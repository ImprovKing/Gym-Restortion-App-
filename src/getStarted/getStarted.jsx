import React from "react";
import Footer from '../components/fooetr/footer';
import NavBar  from '../components/navbar/navbar';
import '../getStarted/start.css' ;
import { getPrices } from '../_DATAS/price';

function GetStarted() {

    let prices = getPrices() ;
    return (
        <div className='App'>
            <NavBar /><br /> <br />
            <div className='pt-10'>
                <section className='mb-32 text-gray-800'>
                <h2 class="text-3xl font-bold text-white text-center mb-12">Pricing</h2>
                    
                    <div className='grid grid-cols-3 gap-4 ip:grid-cols-1 mx-auto my-auto ' id='price-cont'>

                        {
                            prices.map((plans) => (
                                <div className="rounded " id='price-card'>
                                    <div className="p-6 text-center">
                                        <div className="text-2xl mb-6 text-center">
                                            <p className="uppercase mb-4 font-3xl text-sm">
                                                <strong>{plans.name}</strong>
                                            </p><br />
                                            <strong>{plans.price}</strong>
                                            <small class="text-gray-500 text-sm">/$8 per month</small>
                                        </div>
                                        <div className='text-extralight text-sm text-left p-5'>
                                            <p className='p-2'> {plans.feature1} </p>
                                            <p className='p-2'>{plans.feature2}</p>
                                            <p className='p-2'> {plans.feature3} </p>
                                            <p className='p-2'> {plans.feature4}</p>
                                            <p className='p-2'> {plans.feature5}</p>
                                        </div><br /> 
                                <div id='pay-btn'>
                                    <button className="bg-black rounded text-white px-2 py-4"> Buy Now</button>
                                </div>     
                                    </div>
                                </div>   
                            ))
                        }
                

                    </div>
                </section>

            </div>    
            <Footer />
        </div>
    )
}

export default GetStarted;