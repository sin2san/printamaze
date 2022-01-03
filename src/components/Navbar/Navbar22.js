import React, { useState } from 'react';
import { Nav, NavLink, NavIcon, Bars, SearchBar, LoginUser, AddToCart} from './NavbarElements';
import { Link } from 'react-router-dom';
import { Modal } from '../Form/Modal'

const Navbar = ({ toggle }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

    return (
        <>
        <Nav>
            <NavLink to='/'>
               PrintAmaze
            </NavLink>
            <NavIcon>
                <LoginUser title="Login/Register" onClick={openModal} />
                <Modal showModal={showModal} setShowModal={setShowModal} />

                <Link to="/Searchbar" >
                  <SearchBar />
                </Link>
                <Link to="/AddToCart">
                  <AddToCart />
                </Link>
              <Bars onClick={toggle}/>
            </NavIcon>
        </Nav>
        </>
    );
};

export default Navbar;
