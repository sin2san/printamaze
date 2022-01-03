import styled from 'styled-components';

export const FeatureContainer = styled.div`
  height: 100vh;
  max-height: 400px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureButton = styled.button`
  text-transform: normal;
  letter-spacing: -0.05em;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0.6rem 3rem;
  border: 2px solid #fff;
  border-radius: 50px;
  background: transparent;
  color: #fff;
  transition: 0.2s ease-out;
  margin-top: 15px;
  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;






