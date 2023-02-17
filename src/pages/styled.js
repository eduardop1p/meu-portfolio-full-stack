/* eslint-disable */

import styled from 'styled-components';

import * as colors from '../colors';

const Main = styled.main`
  margin: 0 auto;
  width: calc(100% - 10rem);

  & > div > section {
    margin-top: 2rem;
  }
`;

export const AboutContainer = styled.section`
  & > h2 {
    color: ${colors.color9};
    letter-spacing: 2px;
    font-size: 0.9rem;
    position: relative;
    margin-bottom: 20px;
    font-weight: 500;

    &::after {
      content: '';
      position: absolute;
      margin-left: 10px;
      width: 120px;
      height: 2px;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${colors.color4};
    }
  }

  & > h1 {
    color: ${colors.color1};
    font-size: 2.25rem;
    font-weight: 700;
  }

  & > div {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    & > .about {
      margin-left: 2rem;

      & > h3 {
        font-weight: 700;
        font-size: 1.6rem;
        color: ${colors.color4};
        font-family: 'Raleway', sans-serif;
      }
    }
  }
`;

export const ResumeContainer = styled.section`
  color: ${colors.color1};
  width: 100%;
  height: 1200px;
`;

export const ServicesContainer = styled.section`
  color: ${colors.color1};
  width: 100%;
  height: 1200px;
`;

export const PortfolioContainer = styled.section`
  color: ${colors.color1};
  width: 100%;
  height: 1200px;
`;

export const ContactContainer = styled.section`
  color: ${colors.color1};
  width: 100%;
  height: 1200px;
`;

export default Main;
