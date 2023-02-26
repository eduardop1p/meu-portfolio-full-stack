/* eslint-disable */

import AboutTitlesContainer from './styled';

export default function AboutTitles({ darkMode }) {
  return (
    <AboutTitlesContainer>
      <h1 data-dark-mode={darkMode}>Resumo</h1>
      <h2 data-dark-mode={darkMode}>
        Sobre <span>Mim</span>
      </h2>
    </AboutTitlesContainer>
  );
}
