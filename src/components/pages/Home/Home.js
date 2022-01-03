import React from 'react';
import Header from '../../Header/Header';
import { productData, productDataTwo } from '../../Products/data';
import Products from '../../Products/Products';
import Feature from '../../Feature/Feature';
import Footer from '../../Footer/Footer';
import Carousel from '../../Carousel/Carousel';
import Team from '../../Team/Team';

function Home() {
    return (
      <React.Fragment>
        <Header/>
        <Products heading='Choose your Favorite' data={productData} />
        <Feature />
        <Products heading='Choose your Design' data={productDataTwo} />
        <Team />
        <Footer />
    </React.Fragment> 
    )
}

export default Home;
