import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
  url(https://images.pexels.com/photos/2983401/pexels-photo-2983401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  height: 100vh;
  background-position: center center;
  background-size: cover;
`;

export const HeaderContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0 calc((113vw - 1300px) / 2);
`;

export const HeaderItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 500px;
  color: #fff;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeaderH1 = styled.h1`
  font-size: clamp(2rem, 7vw, 4rem);
  margin-bottom: 1rem;
  filter: drop-shadow(0px 0px 10px rgba(0,0,0, 0.4));
  letter-spacing: -0.5px;
  margin-top: 22rem;
  text-transform: uppercase;
`;

export const HeaderP = styled.p`
  font-size: clamp(1rem, 1.5vw, 2rem);
  margin-bottom: 2rem;
`;

export const HeaderBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #926c15;
  border-radius: 40px;
  color: #926c15;
  font-weight: 500;
  transition: 0.2s ease-out;
  &:hover {
    border: 2px solid rgba(255, 255, 255, 0.8);
    background: #926c15;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
  }
`;