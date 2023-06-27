import React , {useEffect , useState } from 'react';

function Btn() {
    
  // The back-to-top button is hidden at the beginning
  //showButton is the variable while the setShowButton
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll" , () => {
        if(window.pageYOffset > 300 ){
            setShowButton(true) ;
        }
        else{
            setShowButton(false) ;
        }
    }) ;
  } , []) ;

  const scrollToTop = () =>{
    window.scrollTo({
        top : 0 ,
        behavior : 'smooth' , 
    })
  }

    return (
        <div >

        </div>
    )
}

export default Btn;