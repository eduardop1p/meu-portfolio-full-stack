/* eslint-disable */

import { useState, useRef } from 'react';
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
  const projects = useRef([
    { name: 'Project 1' },
    { name: 'Project 2' },
    { name: 'Project 3' },
    { name: 'Project 4' },
    { name: 'Project 5' },
    { name: 'Project 6' },
  ]).current;

  let projectDetails = useRef(null);

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
            {projects.map(project => (
              <div
                key={project.name}
                onClick={event => {
                  projectDetails.current = event.currentTarget;
                  event.currentTarget.classList.add('an-portfolio-details');
                  setProjectDetailsShow(!projectDetailsShow);
                }}
              >
                <div className="project-details">
                  <h2>{project.name}</h2>
                </div>
              </div>
            ))}
            {/* <img src={mflixAppProject} alt="mflix-app-project" /> */}
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
            </div>
          </PortfolioDetailsContainer>
        </div>
      </PortfolioContainer>
    </Main>
  );
}
