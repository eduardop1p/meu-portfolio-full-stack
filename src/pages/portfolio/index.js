/* eslint-disable */

import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import mflixAppProject from '../../assets/projectsImgs/mflix-app-project.png';
import movie from '../../assets/projectsImgs/movie.png';
import api from '../../assets/projectsImgs/api.png';
import portfolio from '../../assets/projectsImgs/portfolio.png';
import discount from '../../assets/projectsImgs/desconto.png';
import landingPage from '../../assets/projectsImgs/landing-page.png';

import Main, {
  BgActiveRouter,
  PortfolioContainer,
  TitlePagesContainer,
  PortfolioDetailsContainer,
} from '../styled';

export default function Portfolio() {
  const [projectDetailsShow, setProjectDetailsShow] = useState(false);
  const [projectDetailsInfo, setProjectDetailsInfo] = useState(null);

  const projects = useRef([
    { name: 'Mflix app', imgUrl: movie, projectType: 'Web app', languages: ['HTML', 'CSS'] },
    { name: 'Api mflix server', imgUrl: api, projectType: '', languages: [] },
    { name: 'Meu protfólio', imgUrl: portfolio, projectType: '', languages: [] },
    { name: 'Calculadora de descontos', imgUrl: discount, projectType: '', languages: [] },
    { name: 'Landing page do usuário', imgUrl: landingPage, projectType: '', languages: [] },
    { name: 'Rastreador de endereços ip', imgUrl: '', projectType: '', languages: [] },
    { name: 'Card resumo de pedido', imgUrl: mflixAppProject, projectType: '', languages: [] },
    { name: 'Form simples de login', imgUrl: '', projectType: '', languages: [] },
  ]).current;

  let projectDetails = useRef(null);

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
            {projects.map(project => (
              <div
                key={project.name}
                onClick={event => {
                  projectDetails.current = event.currentTarget;
                  event.currentTarget.classList.add('an-portfolio-details');
                  setProjectDetailsShow(!projectDetailsShow);
                  setProjectDetailsInfo(project);
                }}
              >
                <img src={project.imgUrl} alt={project.name} />
                <div className="project-details">
                  <h2>{project.name}</h2>
                </div>
              </div>
            ))}
          </div>

          <PortfolioDetailsContainer
            onClick={event => {
              if (event.target === event.currentTarget) {
                projectDetails.current.classList.remove('an-portfolio-details');
                setProjectDetailsShow(!projectDetailsShow);
              }
            }}
            className={projectDetailsShow ? 'active-portfolio-details' : null}
          >
            <div className="portfolio-details-and-close" data-dark-mode={darkMode}>
              <div
                className="close-portfolio-details"
                title="Fechar"
                onClick={() => {
                  projectDetails.current.classList.remove('an-portfolio-details');
                  setProjectDetailsShow(!projectDetailsShow);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                  <path d="M249 862.566 193.434 807l231-231-231-231L249 289.434l231 231 231-231L766.566 345l-231 231 231 231L711 862.566l-231-231-231 231Z" />
                </svg>
              </div>
              {projectDetailsInfo && (
                <div className="details">
                  <h1>{projectDetailsInfo.name}</h1>
                  <div className="info">
                    <div>
                      <h2>Projeto: {projectDetailsInfo.projectType}</h2>
                      <h2>
                        Linguagens:{' '}
                        {projectDetailsInfo.languages.map(language => language).join(', ')}
                      </h2>
                    </div>
                    <div>
                      <h2>title 3</h2>
                      <h2>title 4</h2>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </PortfolioDetailsContainer>
        </div>
      </PortfolioContainer>
    </Main>
  );
}
