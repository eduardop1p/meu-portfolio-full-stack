/* eslint-disable */

import styled from 'styled-components';

import lapd from '../../assets/img/sirmione.png';
import * as colors from '../../colors';

export const HeaderContainer = styled.header`
  background-image: url(${lapd});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    background-size: cover;
    z-index: -1;
  }

  & > :first-child {
    display: flex;
    flex-direction: column;
    width: calc(100% - 10rem);

    & > h1 {
      color: ${colors.color1};
      font-size: 3rem;
      font-weight: 700;
    }

    & > h2 {
      font-size: 1.5rem;
      margin-top: 1.2rem;
      margin-bottom: 0.5rem;
      color: ${colors.color3};
      font-weight: 400;
      font-family: 'Raleway', sans-serif;

      & > span {
        color: ${colors.color1};
        border-bottom: 2px solid ${colors.color4};
        padding-bottom: 4px;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
      }
    }

    & > nav {
      display: flex;
      margin-top: 2.2rem;

      & > :not(:last-child) {
        margin-right: 2rem;
      }

      & > a {
        font-size: 1rem;
        color: ${colors.color3};
        position: relative;
        font-weight: 400;
        padding-bottom: 4px;
        transition: color 0.3s ease-in-out;

        &.nav-link-active {
          color: ${colors.color1};

          &::before {
            content: '';
            width: 50%;
            height: 2px;
            background-color: ${colors.color4};
            bottom: -4px;
            visibility: visible;
            position: absolute;
          }
        }

        &::before {
          content: '';
          width: 0;
          height: 2px;
          background-color: ${colors.color4};
          bottom: -4px;
          position: absolute;
          visibility: hidden;
          transition: width 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }

        &:hover {
          color: ${colors.color1};

          &::before {
            width: 50%;
            visibility: visible;
          }
        }
      }
    }

    & > :nth-child(n + 4) {
      margin-top: 40px;
    }

    & > .social-links-header {
      display: flex;

      & > :not(:last-child) {
        margin-right: 10px;
      }

      & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: ${colors.color5};
        color: ${colors.color1};
        border-radius: 5px;
        transition: background 0.3s ease-in-out;

        &:hover {
          background-color: ${colors.color4};
        }

        & > svg {
          width: 20px;
          height: 20px;
          fill: ${colors.color1};
        }
      }
    }

    & > a {
      background-color: ${colors.color6};
      color: ${colors.color1};
      font-size: 1rem;
      font-weight: 400;
      width: fit-content;
      border-radius: 5px;
      padding: 1rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: ${colors.color1};
        color: ${colors.color6};
      }
    }
  }

  & > .nav-fixed {
    background-color: ${colors.color7};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    position: fixed;
    width: 100%;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    & > div {
      width: calc(100% - 10rem);
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > a > h1 {
        font-size: 2.25rem;
        color: ${colors.color1};
        margin-right: 2rem;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: ${colors.color4};
        }
      }
    }
  }

  & > .about {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 1rem;
    width: 48px;
    height: 48px;

    & > a {
      width: 100%;
      height: 100%;

      & > svg {
        @keyframes downAnimation {
          0% {
            transform: translateY(5px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(5px);
          }
        }

        animation-name: downAnimation;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        fill: ${colors.color1};
        transition: fill 0.3s ease-in-out;

        &:hover {
          fill: ${colors.color4};
        }
      }
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  margin-top: ${({ noMarginTop }) => (noMarginTop ? 0 : '2.2rem')};

  & > :not(:last-child) {
    margin-right: 2rem;
  }

  & > a {
    font-size: 1rem;
    color: ${colors.color3};
    position: relative;
    font-weight: 400;
    padding-bottom: 4px;
    transition: color 0.3s ease-in-out;

    &.nav-link-active {
      color: ${colors.color1};

      &::before {
        content: '';
        width: 50%;
        height: 2px;
        background-color: ${colors.color4};
        bottom: -4px;
        visibility: visible;
        position: absolute;
      }
    }

    &::before {
      content: '';
      width: 0;
      height: 2px;
      background-color: ${colors.color4};
      bottom: -4px;
      position: absolute;
      visibility: hidden;
      transition: width 0.3s ease-in-out, visibility 0.3s ease-in-out;
    }

    &:hover {
      color: ${colors.color1};

      &::before {
        width: 50%;
        visibility: visible;
      }
    }
  }
`;
