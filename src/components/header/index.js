/* eslint-disable */

import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { darkModeSuccess, darkModeFailure } from '../../redux/modules/darkMode/actions';
import HeaderContainer from './styled';

export default function Header() {
  const dispatch = useDispatch();

  const { darkMode } = useSelector(state => state.darkMode);

  return (
    <HeaderContainer>
      <div
        className="darkmode"
        onClick={() =>
          darkMode ? dispatch(darkModeFailure({ darkMode: false })) : dispatch(darkModeSuccess())
        }
        title={darkMode ? 'Light mode' : 'Dark mode'}
        data-dark-mode={darkMode}
      >
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="light-mode">
            <path d="M479.774 768Q400 768 344 711.774t-56-136Q288 496 344.226 440t136-56Q560 384 616 440.226t56 136Q672 656 615.774 712t-136 56ZM84 612q-15.3 0-25.65-10.289Q48 591.421 48 576.211 48 561 58.35 550.5 68.7 540 84 540h96q15.3 0 25.65 10.289 10.35 10.29 10.35 25.5Q216 591 205.65 601.5 195.3 612 180 612H84Zm696 0q-15.3 0-25.65-10.289-10.35-10.29-10.35-25.5Q744 561 754.35 550.5 764.7 540 780 540h96q15.3 0 25.65 10.289 10.35 10.29 10.35 25.5Q912 591 901.65 601.5 891.3 612 876 612h-96ZM480.211 312Q465 312 454.5 301.65 444 291.3 444 276v-96q0-15.3 10.289-25.65 10.29-10.35 25.5-10.35Q495 144 505.5 154.35 516 164.7 516 180v96q0 15.3-10.289 25.65-10.29 10.35-25.5 10.35Zm0 696Q465 1008 454.5 997.65 444 987.3 444 972v-96q0-15.3 10.289-25.65 10.29-10.35 25.5-10.35Q495 840 505.5 850.35 516 860.7 516 876v96q0 15.3-10.289 25.65-10.29 10.35-25.5 10.35ZM242 389l-50-51q-11-10-11-24.5t11-25.5q10.435-11 25.217-11Q232 277 242 288l51 50q11 10.941 11 25.529 0 14.589-11 25.53Q283 400 268 400t-26-11Zm476 475-51-50q-11-10.667-11-25.333Q656 774 667 763q10-11 25-11t26 11l50 51q11 10 11 24.5T768.478 864Q757 875 743 875q-14 0-25-11Zm-51.059-475Q656 379 656 364t11-26l51-50q11-11 25-10.5t25 10.543Q779 299 779 313t-11 25l-50 51q-10.941 11-25.529 11-14.589 0-25.53-11ZM192 864q-11-10.435-11-25.217Q181 824 192 814l50-51q10.667-10 25.333-10Q282 753 293 763q11 11 10.542 25.667Q303.083 803.333 293 814l-51 50q-10 11-24.5 11T192 864Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="dark-mode">
            <path d="M517 636Zm14 372H416l12-11.5q12-11.5 26.316-25.062 14.316-13.563 26.5-24.5L493 936h45q87 0 160-45t112-122q-83-5-158.5-39.5T517 636q-60-60-94-135t-40-159q-79 42-123 120.319-44 78.32-44 169.606V639l-10.753 5.015q-10.754 5.014-23.747 10.485-12.993 5.471-23.747 10.485L147 670q-2-15-2.5-26.555-.5-11.554-.5-22.146 0-140.58 89.064-247.941Q322.128 265.998 460 240q-17 97 14.5 190T576 593q66 66 155 91t181 8q-24 139-132.065 227.5T531 1008Zm-267-73h156q25 0 42.5-17.5T480 875q0-22-14-38.5T430 817l-40-7-15-38q-14.087-34.833-44.275-55.417Q300.538 696 264.312 696 214 696 179 730.5T144 816q0 50 35 84.5t85 34.5Zm0 73q-79.68 0-135.84-56.226t-56.16-136Q72 736 128.16 680T264 624q60 0 109.5 32.5T443 746q47 8 78 45t31 85q0 54.686-38.657 93.343Q474.686 1008 420 1008H264Z" />
          </svg>
        )}
      </div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link-active' : null)}
          data-dark-mode={darkMode}
        >
          <div>
            <h1>Home</h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-dark-mode={darkMode}>
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) => (isActive ? 'nav-link-active' : null)}
          data-dark-mode={darkMode}
        >
          <div>
            <h1>Sobre</h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-dark-mode={darkMode}>
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? 'nav-link-active' : null)}
          data-dark-mode={darkMode}
        >
          <div>
            <h1>Portfólio</h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-dark-mode={darkMode}>
            <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
          </svg>
        </NavLink>
        <NavLink
          to="/contato"
          className={({ isActive }) => (isActive ? 'nav-link-active' : null)}
          data-dark-mode={darkMode}
        >
          <div>
            <h1>Contato</h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-dark-mode={darkMode}>
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
