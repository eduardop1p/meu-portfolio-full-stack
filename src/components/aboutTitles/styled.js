/* eslint-disable */

import styled from 'styled-components';

import * as colors from '../../colors';

const AboutTitlesContainer = styled.div`
  margin: 7rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & > h1 {
    color: ${colors.color9};
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: 800;
    font-size: 6.87rem;
    position: absolute;
    z-index: 1;
    transition: color 0.25s ease-in-out;

    &[data-dark-mode='false'] {
      color: ${colors.color5};
    }
  }

  & > h2 {
    color: ${colors.color1};
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3.5rem;
    position: absolute;
    z-index: 2;
    transition: color 0.25s ease-in-out;

    &[data-dark-mode='false'] {
      color: ${colors.color6};
    }

    & > span {
      color: ${colors.color3};
    }
  }
`;

export default AboutTitlesContainer;
