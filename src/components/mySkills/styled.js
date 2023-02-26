/* eslint-disable */

import styled from 'styled-components';

import * as colors from '../../colors';

const MySkillsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > h2 {
    text-transform: uppercase;
    font-size: 1.7rem;
    font-weight: 600;
    color: ${colors.color1};
    margin-bottom: 2rem;
    transition: color 0.25s ease-in-out;

    &[data-dark-mode='false'] {
      color: ${colors.color6};
    }
  }

  & > .my-skills {
    display: grid;
    grid-template: repeat(2, auto) / repeat(4, auto);
    grid-column-gap: 4.5rem;
    grid-row-gap: 3rem;
  }
`;

export const SkillPercentageTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > div {
    box-shadow: inset 0 0 0 8px ${colors.color16};
    background-color: ${colors.color2};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    width: 120px;
    height: 120px;
    transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

    &[data-dark-mode='false'] {
      background-color: ${colors.color1};
      box-shadow: inset 0 0 0 8px ${colors.color5};

      & > span {
        color: ${colors.color6};
      }
    }

    &::before {
      content: '';
      position: absolute;
      background-image: conic-gradient(
        from 0deg,
        ${colors.color3} ${({ percentageSkill }) => `${percentageSkill}%`},
        transparent 0
      );
      border-radius: 100%;
      width: 100%;
      height: 100%;
      z-index: 2;
    }

    & > span {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 102px;
      height: 102px;
      z-index: 3;
      background-color: inherit;
      border-radius: 100%;
      font-size: 1.5rem;
      color: ${colors.color1};
      font-weight: 600;
      transition: color 0.25s ease-in-out;
    }
  }

  & > h2 {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
    color: ${colors.color1};
    font-weight: 500;
    text-transform: uppercase;
    transition: color 0.25s ease-in-out;

    &[data-dark-mode='false'] {
      color: ${colors.color6};
    }
  }
`;

export default MySkillsContainer;
