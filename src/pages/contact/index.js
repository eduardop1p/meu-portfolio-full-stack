/* eslint-disable */
import { useSelector } from 'react-redux';

import Main, { BgActiveRouter, ContactContainer } from '../styled';

export default function Contact() {
  const { darkMode } = useSelector(state => state.darkMode);

  return (
    <Main>
      <BgActiveRouter data-dark-mode={darkMode} />
      <ContactContainer>Contact</ContactContainer>
    </Main>
  );
}
