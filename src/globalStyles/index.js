/* eslint-disable */

import { createGlobalStyle } from 'styled-components';

import * as colors from '../colors';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    line-height: 1;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }

  img{
    color: ${colors.color1};
  }

  body{
    background-color: ${colors.color8};

    /* width */
    ::-webkit-scrollbar {
      width: 3px;

    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: ${colors.color8};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.color4};
      border-radius: 2rem;
    }
  }
`;

export default GlobalStyles;
