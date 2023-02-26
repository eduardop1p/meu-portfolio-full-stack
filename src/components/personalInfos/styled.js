/* eslint-disable */

import styled from 'styled-components';

import * as colors from '../../colors';

const PersonalInfosContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > .personal-infos {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;

    & > h3 {
      margin-bottom: 1.4rem;
      font-size: 1.65rem;
      color: ${colors.color1};
      text-transform: uppercase;
      font-weight: 600;
      transition: color 0.25s ease-in-out;

      &[data-dark-mode='false'] {
        color: ${colors.color6};
      }
    }

    & > .infos {
      display: flex;
      justify-content: space-between;

      & > :first-child {
        margin-right: 2rem;
      }

      &[data-dark-mode='false'] > div h4,
      &[data-dark-mode='false'] > div a {
        color: ${colors.color6};
      }

      & > div {
        display: flex;
        flex-direction: column;

        & > :not(:last-child) {
          margin-bottom: 1.25rem;
        }

        & > div {
          display: flex;
          flex-direction: column;

          & > :first-child {
            opacity: 0.8;
          }

          & > h4,
          & > a {
            font-family: 'Open Sans', sans-serif;
            font-weight: 500;
            color: ${colors.color1};
            font-size: 0.94rem;
            transition: color 0.25s ease-in-out;

            &.link-github {
              text-decoration: underline;
              font-weight: 400;
            }

            &.available {
              color: ${colors.color10};
            }
          }
        }
      }
    }

    & > .download-cv {
      width: fit-content;
    }
  }

  & > .experience-projects-customers-won {
    display: grid;
    grid-template: repeat(2, 155px) / repeat(2, minmax(200px, 270px));
    gap: 1.88rem;

    /*
      & > :nth-child(-n + 2) {
        margin-bottom: 1.88rem;
      }

      & > :nth-child(odd) {
        margin-right: 1.88rem;
      }
    */

    &[data-dark-mode='false'] > div {
      border: 1px solid ${colors.color14};

      & > h3 {
        color: ${colors.color6};
      }
    }

    & > div {
      background-color: transparent;
      border: 1px solid ${colors.color7};
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: border 0.25s ease-in-out;

      & > h2 {
        font-size: 3.12rem;
        font-weight: 700;
        color: ${colors.color3};
        margin-right: 2rem;
        margin-bottom: 2px;
        line-height: 1;
      }

      & > h3 {
        font-size: 15px;
        font-weight: 500;
        opacity: 0.8;
        color: ${colors.color1};
        font-family: 'Open Sans', sans-serif;
        text-transform: uppercase;
        position: relative;
        padding-left: 2.8rem;
        margin: 0 2rem;
        transition: color 0.25s ease-in-out;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 13px;
          width: 30px;
          height: 2px;
          background-color: ${colors.color13};
          opacity: 0.8;
        }
      }
    }
  }
`;

export default PersonalInfosContainer;
