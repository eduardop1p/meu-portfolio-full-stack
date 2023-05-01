/* eslint-disable */

import { createGlobalStyle } from 'styled-components';

import * as colors from '../colors';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    outline: none;

    &::selection{
      background-color: ${colors.color3};
      color: ${colors.color1};
    }
  }

  body{
    background-color: ${colors.color1};
    max-width: 2500px;
    margin: 0 auto;

    /* width */
    ::-webkit-scrollbar {
      width: 3px;

    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: ${colors.color1};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.color4};
      border-radius: 2rem;
    }
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }

  img{
    color: ${colors.color1};
  }



`;

export default GlobalStyles;
