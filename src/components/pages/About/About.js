import React from 'react';
import Navbar from '../../Navbar/Navbar';

import './About.css';

function About() {
    return (
        <>
        <div className="header">
         <Navbar />
            <h2 className="about-h2">About Us</h2>
        </div>
       
        <section class="card-product1">
           <img src="https://images.pexels.com/photos/5727002/pexels-photo-5727002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="about" />
           <div class="card-product1-infos">
             <h2>Our History</h2>
             <p>PrintAmaze has provided quality printing services to the NYC area and beyond since 1896! We specialize in commercial offset printing and digital printing services to cover all your needs. From brochures to banners, we are your one-stop print shop.
                PrintAmaze has provided quality printing services to the NYC area and beyond since 1896! We specialize in commercial offset printing and digital printing services to cover all your needs. From brochures to banners, we are your one-stop print shop.
                PrintAmaze has provided quality printing services to the NYC area and beyond since 1896! We specialize in commercial offset printing and digital printing services to cover all your needs. From brochures to banners, we are your one-stop print shop.
             </p>
             <button>More Info</button>
           </div>
        </section>
        </>

    )
}

export default About;
