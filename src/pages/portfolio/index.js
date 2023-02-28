/* eslint-disable */

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Main, { BgActiveRouter, PortfolioContainer, TitlePagesContainer } from '../styled';

export default function Portfolio() {
  const { darkMode } = useSelector(state => state.darkMode);

  return (
    <Main>
      <BgActiveRouter data-dark-mode={darkMode} />
      <PortfolioContainer data-dark-mode={darkMode}>
        <div className="portfolio">
          <TitlePagesContainer>
            <h1 data-dark-mode={darkMode}>Projetos</h1>
            <h2 data-dark-mode={darkMode}>
              Meu <span>Portfólio</span>
            </h2>
          </TitlePagesContainer>
          <div className="projects">
            <iframe src="https://mflix-app.vercel.app"></iframe>
          </div>
        </div>
      </PortfolioContainer>
    </Main>
  );
}
