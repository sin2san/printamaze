import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
  color: #aaa;
  font-family: "Open Sans", Sans-serif;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: #fff;
`;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: center;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  &:hover {
    color: #d4d700;
    transform: translate(1px, 1px); 
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  &:hover {
    color: #d4d700;
    transform: scale(1.5);
    transition: 0.2s ease-in-out;
  }
`;