/* eslint-disable */

import styled from 'styled-components';

import * as colors from '../colors';

const Main = styled.main`
  width: 100%;
  overflow: hidden;
`;

export const BgActiveRouter = styled.div`
  @keyframes bgActiveRouterAnimation {
    0% {
      height: 100vh;
    }
    100% {
      height: 0;
    }
  }

  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 5;
  width: 100%;
  z-index: 5;
  background-color: ${colors.color4};
  animation-name: bgActiveRouterAnimation;
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
  touch-action: none;
`;

export const HomeContainer = styled.section`
  @keyframes homeContainerAnimation {
    0% {
      transform: translateY(5rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: homeContainerAnimation;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;

  & > .photo-and-more-information {
    display: flex;
    align-items: center;
    margin: 2.5rem;

    & > img {
      height: calc(100vh - 5rem);
      max-width: 455px;
      object-fit: cover;
      box-shadow: 0 0 7px rgb(0 0 0 / 90%);
      border-radius: 2rem;
    }

    & > .more-information {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-left: 5rem;

      & > h1 {
        font-size: 3.15rem;
        color: ${colors.color1};
        font-weight: 700;
        padding-left: 4.5rem;
        position: relative;
        line-height: 1.2;
        transition: color 0.25s ease-in-out;

        &[data-dark-mode='false'] {
          color: ${colors.color6};
        }

        &::before {
          content: '';
          position: absolute;
          width: 2.5rem;
          height: 4px;
          background-color: ${colors.color3};
          border-radius: 10px;
          top: 1.87rem;
          left: 0;
        }

        & > span {
          font-size: inherit;
          display: block;
          color: ${colors.color3};
          font-weight: inherit;
        }
      }

      & > p {
        font-family: 'Open Sans', sans-serif;
        color: ${colors.color1};
        font-size: 1rem;
        line-height: 2rem;
        margin: 0.65rem 0;
        transition: color 0.25s ease-in-out;

        &[data-dark-mode='false'] {
          color: ${colors.color6};
        }
      }

      & > .social-links {
        display: flex;

        & > :not(:last-child) {
          margin-right: 10px;
        }

        & > a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 57px;
          height: 57px;
          border-radius: 100%;
          background-color: transparent;
          border: 1px solid ${colors.color3};
          transition: background 0.25s ease-in-out;

          & > svg {
            transition: fill 0.25s ease-in-out;

            &[data-dark-mode='false'] {
              fill: ${colors.color6};
            }
          }

          &:hover {
            background-color: ${colors.color3};

            & > [data-dark-mode='false'] {
              fill: ${colors.color1};
            }
          }
        }
      }

      & > button {
        margin-top: 1.88rem;
        width: fit-content;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border-radius: 2.2rem;
        padding: 1rem 4.38rem 1rem 2.8rem;
        border: 1px solid ${colors.color3};
        background-color: transparent;
        font-size: 1rem;
        font-weight: 600;
        color: ${colors.color1};
        transition: color 0.25s ease-in-out;

        &[data-dark-mode='false'] {
          color: ${colors.color6};
        }

        &::before {
          content: '';
          background-color: ${colors.color3};
          position: absolute;
          z-index: -1;
          width: 0;
          height: 100%;
          visibility: hidden;
          top: 0;
          right: 0;
          transition: width 0.25s ease-in-out, visibility 0.25s ease-in-out;
        }

        &:hover {
          &::before {
            width: 100%;
            visibility: visible;
          }

          &[data-dark-mode='false'] {
            color: ${colors.color1};
          }
        }

        & > span {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          width: 57px;
          height: 57px;
          border-radius: 100%;
          background-color: ${colors.color3};
          top: 0;
          right: 0;
        }
      }
    }
  }
`;

export const BgsHomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;

  & > .bg-yellow {
    position: fixed;
    background-color: ${colors.color3};
    clip-path: polygon(0 0, 21.5% 0, 53.5% 100%, 0% 100%);
    width: 50%;
    height: 100%;
    z-index: -2;
  }

  & > .bg-dark {
    position: fixed;
    background-color: ${colors.color2};
    width: 100%;
    height: 100%;
    z-index: -3;
    transition: background 0.25s ease-in-out;

    &[data-dark-mode='false'] {
      background-color: ${colors.color1};
    }
  }
`;

export const ResumeMe = styled.div`
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.color8};

  & > div {
    border-radius: 10px;
    border: 2px solid ${colors.color7};
    width: 900px;
    background-color: ${colors.color2};
    height: calc(100% - 10rem);
  }
`;

export const AboutContainer = styled.section``;

export const PortfolioContainer = styled.section``;

export const ContactContainer = styled.section``;

export default Main;
