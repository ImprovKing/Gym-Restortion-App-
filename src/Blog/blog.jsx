import React  , {useEffect } from 'react';
import Footer from '../components/fooetr/footer';
import NavBar from '../components/navbar/navbar';
import './blog.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { getArticles } from '../_DATAS/articles';


function Blog() {

  let articles = getArticles() ;

    //useEffect
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    <div className='App'>
      <NavBar /><br /><br />
      <div className='pt-10 container'>
        <h2 className='font-bold p-10 text-center text-white text-4xl md:text-3xl p-5'> Blog </h2>

        <div className='product-cont mt-10 p-5 h-full md:place-content-center'>

          {/* Blog Cards */}

          {
            articles.map((article) => (
                <a href={article.link} key={article.id} >
              <div className='product-card p-5 mb-5 mt-10 grid grid-cols-2 gap-0 sm:grid-cols-1 gap-0 p-0 'data-aos="zoom-in" data-aos-duration="1000" >
                <div className='product-img-holder' id='product-img-holder'>
                  <img src={article.mainImg} alt='/' />
                </div>
                <div className='text-left'>
                  <h3 className='font-bold text-2xl mt-5'>{article.title}</h3><br />
                  <div className=''>
                   {article.shortTitle}
                  </div>
                </div>
              </div>
              </a>
            ))
          }

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog;