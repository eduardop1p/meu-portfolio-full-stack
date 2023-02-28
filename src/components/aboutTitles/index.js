/* eslint-disable */

import { TitlePagesContainer } from '../../pages/styled';

export default function AboutTitles({ darkMode }) {
  return (
    <TitlePagesContainer>
      <h1 data-dark-mode={darkMode}>Resumo</h1>
      <h2 data-dark-mode={darkMode}>
        Sobre <span>Mim</span>
      </h2>
    </TitlePagesContainer>
  );
}
