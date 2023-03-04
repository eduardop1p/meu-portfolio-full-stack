/* eslint-disable */

import styled, { keyframes } from 'styled-components';

import * as colors from '../colors';

const slideUpAnimation = keyframes`
  0% {
    transform: translateY(5rem);
  }
  100% {
    transform: translateY(0);
  }
`;

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
  transition: background 0.25s ease-in-out;

  &[data-dark-mode='false'] {
    background-color: ${colors.color14};
  }
`;

export const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${slideUpAnimation};
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
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  width: fit-content;
  cursor: pointer;
  position: relative;
  z-index: 2;
  overflow: hidden;
  border-radius: 2.2rem;
  padding: 1rem 4.37rem 1rem 2.18rem;
  border: 1px solid ${colors.color3};
  background-color: transparent;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.color1};
  transition: color 0.25s ease-in-out;

  &[data-dark-mode='false'] {
    color: ${colors.color6};
  }

  &::before {
    content: '';
    z-index: -1;
    background-color: ${colors.color3};
    position: absolute;
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
    z-index: 1;
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

    & > svg > path {
      stroke: ${colors.color1};
      stroke-width: ${strokeWidth1rem => (strokeWidth1rem ? '1rem' : '2rem')};
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
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.color8};
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &.active-resume-me {
    visibility: visible;
    opacity: 1;

    & > .resume-and-close > .resume > .about {
      animation-name: ${slideUpAnimation};
      animation-duration: 0.8s;
      animation-timing-function: ease-in-out;
    }
  }

  & > .resume-and-close {
    border-radius: 10px;
    border: 2px solid ${colors.color7};
    background-color: ${colors.color2};
    width: 900px;
    height: calc(100% - 10rem);
    position: relative;
    transition: background 0.25s ease-in-out;

    &[data-dark-mode='false'] {
      background-color: ${colors.color1};
      border: 2px solid ${colors.color15};
    }

    & > .close-resume {
      position: absolute;
      top: -3.5rem;
      right: -2rem;
      width: 45px;
      height: 45px;
      border-radius: 100%;
      background-color: transparent;
      border: 3px solid ${colors.color1};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      & > svg {
        fill: ${colors.color1};
        width: 25px;
        height: 25px;

        & > path {
          stroke: ${colors.color1};
          stroke-width: 2rem;
        }
      }
    }

    & > .resume {
      overflow: hidden scroll;
      background-color: inherit;
      border-radius: 10px;
      width: 100%;
      height: 100%;

      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background-color: ${colors.color12};
        border-radius: 0 10px 10px 0;
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${colors.color11};
        border: 1px solid ${colors.color12};
        border-radius: 2rem;
      }

      &[data-dark-mode='false'] {
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${colors.color15};
          border: none;
        }
      }

      & > .about {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        & > :nth-child(n + 2) {
          margin-bottom: 4rem;
        }
      }
    }
  }
`;

export const TitlePagesContainer = styled.section`
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

export const AboutContainer = styled.section`
  background-color: ${colors.color2};
  width: 100%;
  height: 100vh;
  overflow: hidden visible;
  transition: background 0.25s ease-in-out;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${colors.color12};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.color11};
    border: 3px solid ${colors.color12};
    border-radius: 2rem;
  }

  &[data-dark-mode='false'] {
    background-color: ${colors.color1};

    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.color15};
      border: none;
    }
  }

  & > .about {
    background-color: inherit;
    width: calc(100% - 12.5rem);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    animation-name: ${slideUpAnimation};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;

    & > :nth-child(n + 2) {
      margin-bottom: 5rem;
    }
  }
`;

export const PortfolioContainer = styled.section`
  background-color: ${colors.color2};
  width: 100%;
  height: 100vh;
  overflow: hidden visible;
  transition: background 0.25s ease-in-out;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${colors.color12};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.color11};
    border: 3px solid ${colors.color12};
    border-radius: 2rem;
  }

  &[data-dark-mode='false'] {
    background-color: ${colors.color1};

    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.color15};
      border: none;
    }
  }

  & > .portfolio {
    background-color: inherit;
    width: calc(100% - 12.5rem);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    animation-name: ${slideUpAnimation};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;

    & > .projects {
      @keyframes projectsAnimation {
        0% {
          transform: translateX(-5rem);
          column-gap: 5px;
        }
        100% {
          transform: translateX(0);
          column-gap: 2rem;
        }
      }

      display: grid;
      grid-template: repeat(3, 230px) / repeat(3, 1fr);
      gap: 2rem;

      animation-name: projectsAnimation;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;

      & > div {
        background-color: ${colors.color9};
        border-radius: 10px;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover,
        &.an-portfolio-details {
          & > .project-details {
            opacity: 1;

            & > h2 {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        & > img {
          width: 40%;
          height: auto;
          position: absolute;
          object-fit: contain;
          z-index: 1;
        }

        & > .project-details {
          background-color: ${colors.color3};
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          position: absolute;
          opacity: 0;
          z-index: 2;
          transition: opacity 0.4s ease-in-out;

          & > h2 {
            font-size: 1.25rem;
            font-weight: 500;
            width: 70%;
            line-height: 1.2;
            text-align: center;
            color: ${colors.color1};
            text-transform: uppercase;
            transform: translateY(-20px);
            opacity: 0;
            transition: transform 0.5s ease-in-out, opacity 0.7s ease-in-out;
          }
        }
      }

      /* & > img {
        width: 400px;
        height: auto;
      } */
    }
  }
`;

export const PortfolioDetailsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.color8};
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &.active-portfolio-details {
    visibility: visible;
    opacity: 1;
  }

  & > .portfolio-details-and-close {
    border-radius: 10px;
    border: 2px solid ${colors.color7};
    background-color: ${colors.color2};
    width: 680px;
    height: calc(100% - 10rem);
    position: relative;
    transition: background 0.25s ease-in-out;

    &[data-dark-mode='false'] {
      background-color: ${colors.color1};
      border: 2px solid ${colors.color15};
    }

    & > .close-portfolio-details {
      position: absolute;
      top: -3.5rem;
      right: -2rem;
      width: 45px;
      height: 45px;
      border-radius: 100%;
      background-color: transparent;
      border: 3px solid ${colors.color1};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      & > svg {
        fill: ${colors.color1};
        width: 25px;
        height: 25px;

        & > path {
          stroke: ${colors.color1};
          stroke-width: 2rem;
        }
      }
    }

    & > .details {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > h1 {
        color: ${colors.color3};
        text-transform: uppercase;
        font-size: 2rem;
        margin-bottom: 1.7rem;
      }

      & > .info {
        display: flex;
        justify-content: space-between;
        width: 100%;

        & > div {
          display: flex;
          flex-direction: column;

          & > :not(:last-child) {
            margin-bottom: 5px;
          }

          & > h2 {
            color: ${colors.color1};
            font-size: 0.95rem;
            font-weight: 500;
            font-family: 'Open Sans', sans-serif;
          }
        }
      }
    }
  }
`;

export const ContactContainer = styled.section``;

export default Main;
