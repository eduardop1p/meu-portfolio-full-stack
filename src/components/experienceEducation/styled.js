/* eslint-disable */

import styled from 'styled-components';

import * as colors from '../../colors';

const ExperienceEducationContainer = styled.div`
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

  & > .experience-education {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 2.5rem);

    & > :first-child {
      margin-right: 4rem;
    }

    & > .experience,
    & > .education {
      display: flex;
      flex-direction: column;

      & > :not(:last-child) {
        margin-bottom: 1.5rem;
      }

      & > div {
        border-left: 1px solid ${colors.color16};
        position: relative;
        transition: boder 0.25s ease-in-out;

        &[data-dark-mode='false'] {
          border-left: 1px solid ${colors.color15};

          & > :last-child {
            & > h3 {
              background-color: ${colors.color5};
              color: ${colors.color6};
              font-weight: 700;
            }

            & > h1 {
              color: ${colors.color6};
            }

            & > p {
              color: ${colors.color6};
            }
          }
        }

        & > :first-child {
          background-color: ${colors.color3};
          border-radius: 100%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -2px;
          left: -20px;

          & > svg {
            width: 15px;
            height: 15px;
            fill: ${colors.color1};
          }
        }

        & > :last-child {
          margin-left: 2.25rem;

          & > h3 {
            padding: 2px 10px;
            background-color: ${colors.color16};
            color: ${colors.color1};
            border-radius: 20px;
            opacity: 0.8;
            font-size: 0.75em;
            font-weight: 600;
            width: fit-content;
            text-transform: uppercase;
            font-family: 'Open Sans', sans-serif;
          }

          & > h1 {
            color: ${colors.color1};
            font-size: 1.2rem;
            font-weight: 500;
            text-transform: uppercase;
            margin: 0.5rem 0;
          }

          & > p {
            color: ${colors.color1};
            opacity: 0.8;
            font-size: 0.85rem;
            font-weight: 400;
            font-family: 'Open Sans', sans-serif;
          }
        }
      }
    }
  }
`;

export default ExperienceEducationContainer;
