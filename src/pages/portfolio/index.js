/* eslint-disable */

import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Skeleton } from '@mui/material';

import mflixAppProject from '../../assets/projectsImgs/mflix-app-project.png';
import movie from '../../assets/projectsImgs/movie.png';
import api from '../../assets/projectsImgs/api.png';
import apiServer from '../../assets/projectsImgs/api-server.png';
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
  const projects = useRef([
    {
      name: 'Mflix app',
      imgUrl: movie,
      projectType: 'Web app',
      languages: ['HTML', 'CSS', 'JavaScript', 'React', 'Styled components'],
      cliente: 'Projeto pessoal',
      link: 'https://mflix-app.vercel.app',
    },
    {
      name: 'Api mflix server',
      imgUrl: api,
      projectType: 'API',
      languages: ['NodeJs', 'Express', 'MongoDb'],
      cliente: 'Projeto pessoal',
      link: 'https://mflix-server.vercel.app',
    },
    {
      name: 'Meu protfólio',
      imgUrl: portfolio,
      projectType: 'Web site',
      languages: ['HTML', 'CSS', 'JavaScript', 'React', 'Styled components'],
      cliente: 'Projeto pessoal',
      link: 'https://eduardo-lavoura.vercel.app',
    },
    {
      name: 'Calculadora de descontos',
      imgUrl: discount,
      projectType: 'Web app',
      languages: ['HTML', 'CSS', 'JavaScript'],
      cliente: 'Projeto pessoal',
      link: 'https://eduardop1p.github.io/calculadora-de-desconto/',
    },
    {
      name: 'Landing page do usuário',
      imgUrl: landingPage,
      projectType: 'Web site',
      languages: ['HTML', 'CSS', 'JavaScript'],
      cliente: 'Projeto pessoal',
      link: 'https://eduardop1p.github.io/manage-landing-page/',
    },
    {
      name: 'Rastreador de endereços ip',
      imgUrl: '',
      projectType: 'Web app',
      languages: ['HTML', 'CSS', 'JavaScript'],
      cliente: 'Projeto pessoal',
      link: 'https://eduardop1p.github.io/IP-Address-Tracker-Rastreador-de-Enderecos-IP/',
    },
    {
      name: 'Card resumo de pedido',
      imgUrl: mflixAppProject,
      projectType: 'Web site',
      languages: ['HTML', 'CSS'],
      cliente: 'Projeto pessoal',
      link: 'https://eduardop1p.github.io/FrontEnd-card-resumo-de-pedido/',
    },
    {
      name: 'Form simples de login',
      imgUrl: '',
      projectType: 'Web site',
      languages: ['HTML', 'CSS', 'JavaScript'],
      cliente: 'Projeto pessoal',
      link: 'https://eduardop1p.github.io/form-simples-facul/',
    },
  ]).current;

  let projectDetails = useRef(null);

  const { darkMode } = useSelector(state => state.darkMode);

  function handleClickOnProject(event, link) {
    projectDetails.current = event.currentTarget;
    event.currentTarget.classList.add('an-portfolio-details');
    const nextElementSibling = event.currentTarget.nextElementSibling;
    const iframeNextElementSibling = nextElementSibling.querySelector('iframe');
    iframeNextElementSibling.src = link;
    nextElementSibling.classList.add('active-portfolio-details');
    iframeNextElementSibling.onload = () => iframeNextElementSibling.nextElementSibling.remove();
  }

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
              <div key={project.name}>
                <div
                  onClick={event => handleClickOnProject(event, project.link)}
                  className="on-project"
                >
                  <img src={project.imgUrl} alt={project.name} />
                  <div className="project-details">
                    <h2>{project.name}</h2>
                  </div>
                </div>
                <PortfolioDetailsContainer
                  onClick={event => {
                    if (event.target === event.currentTarget) {
                      projectDetails.current.classList.remove('an-portfolio-details');
                      event.currentTarget.classList.remove('active-portfolio-details');
                    }
                  }}
                >
                  <div className="portfolio-details-and-close" data-dark-mode={darkMode}>
                    <div
                      className="close-portfolio-details"
                      title="Fechar"
                      onClick={event => {
                        projectDetails.current.classList.remove('an-portfolio-details');
                        event.currentTarget.parentElement.parentElement.classList.remove(
                          'active-portfolio-details'
                        );
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                        <path d="M249 862.566 193.434 807l231-231-231-231L249 289.434l231 231 231-231L766.566 345l-231 231 231 231L711 862.566l-231-231-231 231Z" />
                      </svg>
                    </div>
                    <div className="details">
                      <h1>{project.name}</h1>
                      <div className="info">
                        <div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                              <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                            </svg>
                            <h2>Projeto: {project.projectType}</h2>
                          </div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                            </svg>
                            <h2>
                              Linguagens: {project.languages.map(language => language).join(', ')}
                            </h2>
                          </div>
                        </div>
                        <div>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              data-dark-mode={darkMode}
                            >
                              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                            </svg>
                            <h2>Cliente: {project.cliente}</h2>
                          </div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                            </svg>
                            <h2>
                              Acessar:{' '}
                              <a href={project.link} target="_blank">
                                {project.link.replace('https://', '')}
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="site-iframe">
                        <iframe
                          loading="lazy"
                          className={project.projectType === 'API' ? 'api-iframe-color-fff' : null}
                        ></iframe>
                        <Skeleton
                          sx={{ bgcolor: 'grey.900' }}
                          variant="rectangular"
                          animation="wave"
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </div>
                  </div>
                </PortfolioDetailsContainer>
              </div>
            ))}
          </div>
        </div>
      </PortfolioContainer>
    </Main>
  );
}
