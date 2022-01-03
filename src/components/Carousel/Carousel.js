import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';


const CarouselComponent = () => {
  return (
    <>
     <Carousel>
      <div>
        <img src="https://www.colourgraphics.com/media/catalog/product/cache/3bad2bb84f147adafcb658fb1cc96a22/b/u/business-card-printing.jpg" alt="business cards" />
        <p className="legend">Business Cards</p>
      </div>

      <div>
        <img src="https://i2.wp.com/graphicnova.com/wp-content/uploads/2018/09/Vision-Modern-Business-Card-Template-1.jpg?fit=1500%2C1125&ssl=1" alt="business cards" />
        <p className="legend">Business Cards</p>
      </div>
      
      <div>
        <img src="https://images.creativetemplate.net/wp-content/uploads/2019/11/Creative-Modern-Business-Card-0-600x400.jpg" alt="business cards" />
        <p className="legend">Business Cards</p>
      </div>
      </Carousel>
      </>
  );
};

export default CarouselComponent;