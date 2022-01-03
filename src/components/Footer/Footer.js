import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import '../../components/Navbar/Navbar.css';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        <div className="footer-single-item">
          <h4 className="head4">About us</h4>
          <p>Our fantastic team of professional designers is here to help. Committed to producing high-quality but low-cost goods graphic design merchandise.</p>
        </div>
        <div className="footer-single-item">
          <h4 className="head4">Contact us</h4>
          <ul className="footer-list">
            <li className="footer-single-list"><Link>+65 82469048</Link></li>
            <li className="footer-single-list"><Link>enquiry@printamaze.co.uk</Link></li>
            <li className="footer-single-list">BLK 55, Chai Chee Drive, London 460055</li>
          </ul>
        </div>
        <div className="footer-single-item">
          <h4 className="head4">Customer service</h4>
          <ul className="footer-list">
            <li className="footer-single-list">Help center</li>
            <li className="footer-single-list">Delivery offers</li>
            <li className="footer-single-list">Scam warnings</li>
            <li className="footer-single-list">Track order</li>
          </ul>
        </div>
        <div className="footer-single-item">
          <h4 className="head4">Follow us</h4>
          <ul className="footer-social-media">
            <li className="footer-single-social-media"><i className="fab fa-facebook"></i></li>
            <li className="footer-single-social-media"><i className="fab fa-instagram"></i></li>
            <li className="footer-single-social-media"><i className="fab fa-linkedin"></i></li>
            <li className="footer-single-social-media"><i class="fab fa-twitter"></i></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
      <div className="hr"></div>
        <div className="footer-copyright-content">
        <p>Copyright &copy; 2021 TRInno | All rights reserved</p>
        <p>Solution by <Link>TRInno.com</Link></p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;