import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaForumbee } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { BsCart4 } from 'react-icons/bs';

export const Nav = styled.nav`
    background: rgba(0, 0, 0, 0.4);
    height: 80px;
    display: flex;
    font-weight: 700;
    padding-left: 8px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`;

export const NavLink = styled(Link)`
    margin-top: 16px;
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #d4d700;
      transform: translate(1px, 1px);
    }
`;

export const NavIcon = styled.div`
@media screen and (max-width: 540px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  z-index: 1;
}
  
`;

export const Bars = styled(FaForumbee)`
@media screen and (max-width: 540px) {
  font-size: 2rem;
  transform: translate(-50%, 50%);
  z-index: 1;
  &:hover {
    color: #926c15;
  }
}
`;

export const SearchBar = styled(BsSearch)`
  font-size: 3rem;
  transform: translate(-50%, 50%);
  padding: 0 10px;
  color: #fff;
  &:hover {
    color: #d4d700;
  }
`;

export const LoginUser = styled(BiUser)`
  font-size: 3rem;
  transform: translate(-50%, 50%);
  padding: 0 10px;
  color:#fff;
  &:hover {
    color: #d4d700;
    z-index: 1;
  }
`;

export const AddToCart = styled(BsCart4)`
  font-size: 3rem;
  transform: translate(-50%, 50%);
  padding: 0 10px;
  color: #fff;
  &:hover {
    color: #d4d700;
  }
`;



