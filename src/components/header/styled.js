/* eslint-disable */

import styled from 'styled-components';

import * as colors from '../../colors';

const HeaderContainer = styled.header`
  position: fixed;
  right: 2rem;
  top: 1rem;
  height: 60%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1200px) {
    height: fit-content;
  }

  & > nav {
    display: flex;
    flex-direction: column;
    width: fit-content;

    & > :not(:last-child) {
      margin-bottom: 1.25rem;
    }

    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: ${colors.color4};
      position: relative;
      transition: background 0.25s ease-in-out;

      &[data-dark-mode='false'] {
        background-color: ${colors.color5};
      }

      &.nav-link-active {
        background-color: ${colors.color3};

        & > [data-dark-mode='false'] {
          fill: ${colors.color1};
        }
      }

      & > div {
        width: 50px;
        height: 50px;
        display: flex;
        overflow: hidden;
        align-items: center;
        position: absolute;
        padding-left: 2rem;
        z-index: -1;
        right: 0;
        border-radius: 2.2rem;
        background-color: ${colors.color3};
        visibility: hidden;
        opacity: 0;
        transition: width 0.25s ease-in-out, visibility 0.25s ease-in-out, opacity 0.25s ease-in-out;

        & > h1 {
          text-transform: uppercase;
          color: ${colors.color1};
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 1px;
        }
      }

      &:hover {
        background-color: ${colors.color3};

        & > div {
          opacity: 1;
          visibility: visible;
        }

        & > [data-dark-mode='false'] {
          fill: ${colors.color1};
        }
      }

      &[href='/']:hover {
        & > div {
          width: 135px;
        }
      }

      &[href='/sobre']:hover {
        & > div {
          width: 140px;
        }
      }

      &[href='/portfolio']:hover {
        & > div {
          width: 180px;
        }
      }

      &[href='/contato']:hover {
        & > div {
          width: 170px;
        }
      }

      & > svg {
        transition: fill 0.25s ease-in-out;

        &[data-dark-mode='false'] {
          fill: ${colors.color6};
        }
      }
    }
  }
`;

export const MobileNavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.color4};

  &[data-dark-mode='false'] {
    background-color: ${colors.color1};
  }

  & > nav {
    display: flex;
    padding: 8px;
    width: 100%;
    justify-content: space-around;

    /* & > :not(:last-child) {
      margin-right: 1.25rem;
    } */

    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 45px;
      border-radius: 100%;
      background-color: ${colors.color17};
      position: relative;
      transition: background 0.25s ease-in-out;

      &[data-dark-mode='false'] {
        background-color: ${colors.color5};

        & > svg {
          fill: ${colors.color6};
        }
      }

      &.nav-link-active {
        background-color: ${colors.color3};

        & > [data-dark-mode='false'] {
          fill: ${colors.color1};
        }
      }

      &:hover {
        background-color: ${colors.color3};

        & > [data-dark-mode='false'] {
          fill: ${colors.color1};
        }
      }

      & > svg {
        width: 17px;
        height: 17px;
      }
    }
  }
`;

export default HeaderContainer;
