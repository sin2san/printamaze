import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './header.css';





import {
  HeaderContainer,
  HeaderContent,
  HeaderItems,
  HeaderH1,
  HeaderP,
  HeaderBtn
} from './HeaderComponents';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <HeaderContainer className="HeaderContainer">
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeaderContent>
        <HeaderItems>
          <HeaderH1 className="h1">Excellent Printing world</HeaderH1>
          <HeaderP className="p">Design helps us to stand out</HeaderP>
          <Link to='/Modal'>
          <HeaderBtn className="head-btn">Order Now</HeaderBtn>
          </Link>
        </HeaderItems>
      </HeaderContent>
    </HeaderContainer>
    </>
  );
};

export default Header;