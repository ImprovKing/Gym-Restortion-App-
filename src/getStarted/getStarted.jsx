import React, { useState } from "react";
import Footer from '../components/fooetr/footer';
import NavBar  from '../components/navbar/navbar';
import '../getStarted/start.css' ;
import { getPrices } from '../_DATAS/price';
import GooglePayButton from "@google-pay/button-react";

function GetStarted() {

    const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"]
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example"
              }
            }
          }
        ],
        merchantInfo: {
          merchantId: "12345678901234567890",
          merchantName: "Demo Merchant"
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: "100.00",
          currencyCode: "USD",
          countryCode: "US"
        }
      };

      const [buttonColor, setButtonColor] = useState("default");
      const [buttonType, setButtonType] = useState("pay");
      const [buttonSizeMode, setButtonSizeMode] = useState("fill");
      const [buttonWidth, setButtonWidth] = useState(-80);
      const [buttonHeight, setButtonHeight] = useState(40);

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
                                        <GooglePayButton
                                        environment="TEST"
                                        buttonColor={buttonColor}
                                        buttonType={buttonType}
                                        buttonSizeMode={buttonSizeMode}
                                        paymentRequest={paymentRequest}
                                        onLoadPaymentData={paymentRequest => {
                                            console.log("load payment data", paymentRequest);
                                        }}
                                        style={{ width: buttonWidth, height: buttonHeight }}
                                        />
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