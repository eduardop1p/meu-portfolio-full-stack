/* eslint-disable */

import styled from 'styled-components';

import * as colors from '../../colors';

export const LoaderContainer = styled.div`
  position: absolute;
  background-color: ${colors.color3};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  touch-action: none;
  cursor: default;
  z-index: 3;
  top: 0;
  left: 0;

  & > div {
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    width: 25px;
    height: 25px;
    border: 3px solid ${colors.color1};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
`;
