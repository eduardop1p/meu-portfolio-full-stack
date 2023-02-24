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
  margin-top: 1.88rem;
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
        ::-webkit-scrollbar-track {
          background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${colors.color15};
          border: 1px solid ${colors.color15};
        }
      }

      & > .about {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        & > :nth-child(n + 2) {
          margin-bottom: 3rem;
        }

        & > .about-titles {
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
        }

        & > .personal-infos-container {
          display: flex;
          justify-content: space-between;

          & > .personal-infos {
            display: flex;
            flex-direction: column;
            margin-right: 3rem;

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
            grid-template: repeat(2, 155px) / repeat(2, 190px);
            grid-gap: 1.88rem;

            /*
            & > :nth-child(-n + 2) {
              margin-bottom: 1.88rem;
            }

            & > :nth-child(odd) {
              margin-right: 1.88rem;
            } */

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
        }
      }
    }
  }
`;

export const MySkillsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > h2 {
    text-transform: uppercase;
    font-size: 1.7rem;
    font-weight: 600;
    color: ${colors.color1};
    margin-bottom: 1rem;
  }

  & > .my-skills {
    display: grid;
    grid-template: repeat(2, 120px) / repeat(4, 120px);
    grid-gap: 2rem;

    & > div {
      box-shadow: inset 0 0 0 9px ${colors.color16};
      background-color: ${colors.color2};
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        background-image: conic-gradient(
          from 0deg,
          ${colors.color3} ${({ htmlPercentage }) => `${htmlPercentage}%`},
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
        width: 100px;
        height: 100px;
        z-index: 3;
        background-color: inherit;
        border-radius: 100%;
        font-size: 1.5rem;
        color: ${colors.color1};
        font-weight: 500;
      }
    }
  }
`;

export const AboutContainer = styled.section``;

export const PortfolioContainer = styled.section``;

export const ContactContainer = styled.section``;

export default Main;
