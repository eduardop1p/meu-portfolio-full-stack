/* eslint-disable */

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import mflixAppProject from '../../assets/projectsImgs/mflix-app-project.png';
import Main, {
  BgActiveRouter,
  PortfolioContainer,
  TitlePagesContainer,
  PortfolioDetailsContainer,
} from '../styled';

export default function Portfolio() {
  const [projectDetailsShow, setProjectDetailsShow] = useState(false);

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
            <div onClick={() => setProjectDetailsShow(!projectDetailsShow)}>
              <div className="project-details">
                <h2>Lorem ipsum</h2>
              </div>
            </div>
            <div onClick={() => setProjectDetailsShow(!projectDetailsShow)}>
              <div className="project-details">
                <h2>Lorem ipsum</h2>
              </div>
            </div>
            <div onClick={() => setProjectDetailsShow(!projectDetailsShow)}>
              <div className="project-details">
                <h2>Lorem ipsum</h2>
              </div>
            </div>
            <div onClick={() => setProjectDetailsShow(!projectDetailsShow)}>
              <div className="project-details">
                <h2>Lorem ipsum</h2>
              </div>
            </div>
            <div onClick={() => setProjectDetailsShow(!projectDetailsShow)}>
              <div className="project-details">
                <h2>Lorem ipsum</h2>
              </div>
            </div>
            <div onClick={() => setProjectDetailsShow(!projectDetailsShow)}>
              <div className="project-details">
                <h2>Lorem ipsum</h2>
              </div>
            </div>
            <div onClick={() => setProjectDetailsShow(!projectDetailsShow)}>
              <div className="project-details">
                <h2>Lorem ipsum</h2>
              </div>
            </div>
            <div onClick={() => setProjectDetailsShow(!projectDetailsShow)}>
              <div className="project-details">
                <h2>Lorem ipsum</h2>
              </div>
            </div>
            <div onClick={() => setProjectDetailsShow(!projectDetailsShow)}>
              <div className="project-details">
                <h2>Lorem ipsum</h2>
              </div>
            </div>
            {/* <img src={mflixAppProject} alt="mflix-app-project" /> */}
          </div>
          <PortfolioDetailsContainer
            onClick={event =>
              event.target === event.currentTarget && setProjectDetailsShow(!projectDetailsShow)
            }
            className={projectDetailsShow ? 'active-portfolio-details' : null}
          >
            <div className="portfolio-details-and-close" data-dark-mode={darkMode}>
              <div
                className="close-portfolio-details"
                title="Fechar"
                onClick={() => setProjectDetailsShow(!projectDetailsShow)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                  <path d="M249 862.566 193.434 807l231-231-231-231L249 289.434l231 231 231-231L766.566 345l-231 231 231 231L711 862.566l-231-231-231 231Z" />
                </svg>
              </div>
            </div>
          </PortfolioDetailsContainer>
        </div>
      </PortfolioContainer>
    </Main>
  );
}
