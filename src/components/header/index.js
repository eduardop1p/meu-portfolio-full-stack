/* eslint-disable */

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import HeaderContainer, { MobileNavContainer } from './styled';
import DarkMode from '../darkModeComponent/index';

export default function Header() {
  const { darkMode } = useSelector(state => state.darkMode);

  const breakpoint1200 = useMediaQuery({ maxWidth: 1200 });

  return (
    <HeaderContainer>
      <DarkMode />
      {!breakpoint1200 ? (
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
      ) : (
        <MobileNav darkMode={darkMode} />
      )}
    </HeaderContainer>
  );
}

function MobileNav({ darkMode }) {
  return (
    <MobileNavContainer data-dark-mode={darkMode}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link-active' : null)}
          data-dark-mode={darkMode}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-dark-mode={darkMode}>
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) => (isActive ? 'nav-link-active' : null)}
          data-dark-mode={darkMode}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-dark-mode={darkMode}>
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? 'nav-link-active' : null)}
          data-dark-mode={darkMode}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-dark-mode={darkMode}>
            <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
          </svg>
        </NavLink>
        <NavLink
          to="/contato"
          className={({ isActive }) => (isActive ? 'nav-link-active' : null)}
          data-dark-mode={darkMode}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-dark-mode={darkMode}>
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
        </NavLink>
      </nav>
    </MobileNavContainer>
  );
}
