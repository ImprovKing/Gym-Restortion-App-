import React from 'react';
import NavBar from '../components/navbar/navbar';
import '../App.css' ;

function Error() {
    return (
        <div className='App h-full' id='error'>
            <NavBar /><br /><br />
            <h1 className='mx-auto my-auto w-1/2 pt-20 text-center font-8xl font-bold '>
 
                404!  , Page Not Found 

            </h1>    
        </div>
    )
}

export default Error;