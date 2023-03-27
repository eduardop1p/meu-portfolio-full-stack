/* eslint-disable */

import styled from 'styled-components';

import * as colors from '../../colors';

const DarkModeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  cursor: pointer;
  background-color: ${colors.color4};
  transition: background 0.25s ease-in-out, fill 0.25s ease-in-out;

  &[data-dark-mode='false'] {
    background-color: ${colors.color5};
  }

  & > svg {
    width: 25px;
    height: 25px;
  }

  & > .light-mode {
    fill: ${colors.color1};
  }

  & > .dark-mode {
    fill: ${colors.color6};
  }
`;

export default DarkModeContainer;
