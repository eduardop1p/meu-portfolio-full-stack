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
    {
      name: 'Mflix app',
      imgUrl: movie,
      link: 'https://mflix-app.vercel.app',
      projectType: 'Web app',
      languages: ['HTML', 'CSS', 'JavaScript', 'React', 'Styled components'],
    },
    {
      name: 'Api mflix server',
      imgUrl: api,
      link: 'https://mflix-server.vercel.app',
      projectType: 'API',
      languages: ['NodeJs', 'Express', 'MongoDb'],
    },
    {
      name: 'Meu protfólio',
      imgUrl: portfolio,
      link: 'https://eduardo-lavoura.vercel.app',
      projectType: 'Web site',
      languages: ['HTML', 'CSS', 'JavaScript', 'React', 'Styled components'],
    },
    {
      name: 'Calculadora de descontos',
      imgUrl: discount,
      link: 'https://eduardop1p.github.io/calculadora-de-desconto/',
      projectType: 'Web app',
      languages: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Landing page do usuário',
      imgUrl: landingPage,
      link: 'https://eduardop1p.github.io/manage-landing-page/',
      projectType: 'Web site',
      languages: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Rastreador de endereços ip',
      imgUrl: '',
      link: 'https://eduardop1p.github.io/IP-Address-Tracker-Rastreador-de-Enderecos-IP/',
      projectType: 'Web app',
      languages: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Card resumo de pedido',
      imgUrl: mflixAppProject,
      link: 'https://eduardop1p.github.io/FrontEnd-card-resumo-de-pedido/',
      projectType: 'Web site',
      languages: ['HTML', 'CSS'],
    },
    {
      name: 'Form simples de login',
      imgUrl: '',
      link: 'https://eduardop1p.github.io/form-simples-facul/',
      projectType: 'Web site',
      languages: ['HTML', 'CSS', 'JavaScript'],
    },
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
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                          <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                        </svg>
                        <h2>Projeto: {projectDetailsInfo.projectType}</h2>
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                        </svg>
                        <h2>
                          Linguagens:{' '}
                          {projectDetailsInfo.languages.map(language => language).join(', ')}
                        </h2>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h2>title 3</h2>
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                        </svg>
                        <h2>
                          Acessar:{' '}
                          <a href={projectDetailsInfo.link} target="_blank">
                            {projectDetailsInfo.link.replace('https://', '')}
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="site-iframe">
                    <iframe src={projectDetailsInfo.link}></iframe>
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
