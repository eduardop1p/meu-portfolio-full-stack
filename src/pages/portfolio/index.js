/* eslint-disable */

import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Skeleton } from '@mui/material';

import * as actions from '../../redux/modules/hideDarkMode/actions';
import movie from '../../assets/projectsImgs/movie.png';
import api from '../../assets/projectsImgs/api.png';
import discount from '../../assets/projectsImgs/discount.png';
import landingPage from '../../assets/projectsImgs/landingpage.png';
import cardResume from '../../assets/projectsImgs/card-resumo.png';
import formSimple from '../../assets/projectsImgs/form-simples.png';
import ipTracker from '../../assets/projectsImgs/ip-tracker.png';
import portfolioImg from '../../assets/projectsImgs/potfolio.png';
import mygrid from '../../assets/projectsImgs/mygrid.png';
import criptoMining from '../../assets/projectsImgs/cripto-mining.png';
import policyPornonly from '../../assets/projectsImgs/policy-pornonly.png';
import pornonly from '../../assets/projectsImgs/pornonly.png';
import pornonlyApi from '../../assets/projectsImgs/pornonly-api.png';
import veloApp from '../../assets/projectsImgs/velo-app.png';
import storeVape from '../../assets/projectsImgs/store-vape.png';
import claro from '../../assets/projectsImgs/claro.png';
import starlink from '../../assets/projectsImgs/starlink.png';
import placamp from '../../assets/projectsImgs/placamp.png';
import magalu from '../../assets/projectsImgs/magalu.png';
import trust from '../../assets/projectsImgs/trust.png';
import amarielly from '../../assets/projectsImgs/amarielly.png';
import cresol from '../../assets/projectsImgs/cresol.png';
import ml from '../../assets/projectsImgs/ml.png';
import banese from '../../assets/projectsImgs/banese.png';
import unicred from '../../assets/projectsImgs/unicred.png';
import kraken from '../../assets/projectsImgs/kraken.png';
import propeller from '../../assets/projectsImgs/propeller.png';
import javaApiRest from '../../assets/projectsImgs/java-api-rest.png';
import socketServer from '../../assets/projectsImgs/socket-server.png';

import { color5 } from '../../colors';
import Main, {
  BgActiveRouter,
  PortfolioContainer,
  TitlePagesContainer,
  PortfolioDetailsContainer,
} from '../styled';

export default function Portfolio() {
  const dispatch = useDispatch();

  const projects = [
    {
      name: 'API REST com JAVA',
      imgUrl: javaApiRest,
      projectType: 'API REST construida com Java e Spring WEB',
      languages: ['JAVA', 'Spring WEB', 'H2 Data Base'],
      repositorie: 'https://github.com/eduardop1p/web-service-spring-boot-jpa',
    },
    {
      name: 'Propeller',
      imgUrl: propeller,
      projectType: 'Propeller login',
      languages: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypesScript',
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'SocketIO',
      ],
      repositorie: 'https://github.com/eduardop1p/propeller',
      link: 'https://propeller-three.vercel.app/',
    },
    {
      name: 'Servidor SocketIo',
      imgUrl: socketServer,
      projectType: 'SocketIo server',
      languages: ['JavaScript', 'NodeJs', 'SocketIo'],
      repositorie: 'https://github.com/eduardop1p/propeller-server',
    },
    {
      name: 'Kraken',
      imgUrl: kraken,
      projectType: 'Kraken login',
      languages: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypesScript',
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'Next intl',
        'SocketIO',
      ],
      repositorie: 'https://github.com/eduardop1p/kraken',
      link: 'https://kraken-fake.vercel.app/',
    },
    {
      name: 'Unicred',
      imgUrl: unicred,
      projectType: 'Clone landing page Unicred',
      languages: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypesScript',
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'SocketIO',
      ],
      repositorie: 'https://github.com/eduardop1p/unicred',
      link: 'https://unicred.vercel.app/',
    },
    {
      name: 'Banese',
      imgUrl: banese,
      projectType: 'Clone landing page Banese',
      languages: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypesScript',
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'SocketIO',
      ],
      repositorie: 'https://github.com/eduardop1p/banese',
      link: 'https://banese.vercel.app/',
    },
    {
      name: 'Mercado Livre',
      imgUrl: ml,
      projectType: 'Clone página do produto mercado livre',
      languages: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypesScript',
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'MongoDB',
      ],
      repositorie: 'https://github.com/eduardop1p/mp',
      link: 'https://mercadolivre-br.vercel.app/',
    },
    {
      name: 'Cresol',
      imgUrl: cresol,
      projectType: 'Página de login da cresol',
      languages: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypesScript',
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'SocketIO',
      ],
      repositorie: 'https://github.com/eduardop1p/cresol',
      link: 'https://cresol-three.vercel.app/',
    },
    {
      name: 'Amarielly store',
      imgUrl: amarielly,
      projectType: 'Página do produto',
      languages: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypesScript',
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'MongoDB',
      ],
      repositorie: 'https://github.com/eduardop1p/mini-game',
      link: 'https://amarielly.vercel.app/',
    },
    {
      name: 'Trust wallet',
      imgUrl: trust,
      projectType: 'Clone do site Trust',
      languages: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypesScript',
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'MongoDB',
      ],
      repositorie: 'https://github.com/eduardop1p/trust',
      link: 'https://trustwallett.vercel.app/',
    },
    {
      name: 'Magazine Luiza',
      imgUrl: magalu,
      projectType: 'Clone do site Magazine Luiza',
      languages: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypesScript',
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'MongoDB',
      ],
      repositorie: 'https://github.com/eduardop1p/magalu',
      link: 'https://magazine-luiza.vercel.app/',
    },
    {
      name: 'Placamp',
      imgUrl: placamp,
      projectType: 'Site de vendas para placas de veículos',
      languages: ['HTML5', 'CSS3', 'JavaScript', 'TypesScript', 'NextJs', 'ReactJs', 'TailwindCSS'],
      repositorie: 'https://github.com/eduardop1p/placamp',
      link: 'https://placamp.vercel.app/',
    },
    {
      name: 'Starlink (Incompleto)',
      imgUrl: starlink,
      projectType: 'Clone da Starlink',
      languages: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypesScript',
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'MongoDB',
      ],
      repositorie: 'https://github.com/eduardop1p/starlink',
      link: 'https://starlink-theta.vercel.app/',
    },
    {
      name: 'Claro',
      imgUrl: claro,
      projectType: 'Promoções da claro',
      languages: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypesScript',
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'MongoDB',
      ],
      repositorie: 'https://github.com/eduardop1p/claro',
      link: 'https://clarooficialpromocoes.vercel.app/',
    },
    {
      name: 'King vapes (Incompleto)',
      imgUrl: storeVape,
      projectType: 'Loja de vapes',
      languages: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypesScript',
        'NextJs',
        'ReactJs',
        'TailwindCSS',
        'MongoDB',
      ],
      repositorie: 'https://github.com/eduardop1p/store-vape',
      link: 'https://store-vape.vercel.app/',
    },
    {
      name: 'Velo (Incompleto)',
      imgUrl: veloApp,
      projectType: 'Realizar investimentos em cryptos',
      languages: ['HTML5', 'CSS3', 'JavaScript', 'TypesScript', 'NextJs', 'ReactJs', 'TailwindCSS'],
      repositorie: 'https://github.com/eduardop1p/velo-app',
      link: 'https://velo-app-pi.vercel.app/',
    },
    {
      name: 'Pornonly (Offline)',
      imgUrl: pornonly,
      projectType: 'Site adulto',
      languages: ['HTML5', 'CSS3', 'JavaScript', 'TypesScript', 'NextJs', 'ReactJs'],
      repositorie: 'https://github.com/eduardop1p/pornonly-app',
      link: 'https://pornonly.xyz',
    },
    {
      name: 'Politicas pornonly (Offline)',
      imgUrl: policyPornonly,
      projectType: 'Politicas do site adulto',
      languages: ['HTML5', 'CSS3', 'JavaScript', 'TypesScript', 'NextJs', 'ReactJs'],
      repositorie: 'https://github.com/eduardop1p/pornonly-policys',
      link: 'https://policy.pornonly.xyz',
    },
    {
      name: 'API Pornonly upload midia e CRUD (Offline)',
      imgUrl: pornonlyApi,
      projectType: 'API Rest full',
      languages: ['JavaScript', 'NodeJs', 'MongoDB', 'ExpressJs'],
      repositorie: 'https://github.com/eduardop1p/pornonly-api',
      link: 'https://server.pornonly-api.shop/',
    },
    {
      name: 'Mflix app de filmes e series (Abandonado)',
      imgUrl: movie,
      projectType: 'Infomações de filmes e series',
      languages: ['HTML5', 'CSS3', 'JavaScript', 'ReactJs'],
      repositorie: 'https://github.com/eduardop1p/mflix-app',
      link: 'https://mflix-app.vercel.app',
    },
    {
      name: 'Cripto mining (Incompleto)',
      imgUrl: criptoMining,
      projectType: 'Investimentos em cryptos',
      languages: ['HTML5', 'CSS3', 'JavaScript', 'ReactJs', 'NextJs'],
      repositorie: 'https://github.com/eduardop1p/cryptomining',
      link: 'https://x-project-blush.vercel.app/',
    },
    {
      name: 'Grid com modal',
      imgUrl: mygrid,
      projectType: 'Galeria',
      languages: ['HTML5', 'CSS3', 'JavaScript', 'ReactJs'],
      repositorie: 'https://github.com/eduardop1p/grid-modal-react',
      link: 'https://grid-modal-react.vercel.app/',
    },
    {
      name: 'API com CRUD de usuário completo (Offline)',
      imgUrl: api,
      projectType: 'API REST',
      languages: ['NodeJs', 'ExpressJs', 'MongoDb', 'MulterJs'],
      repositorie: 'https://github.com/eduardop1p/api-rest-crud-usuario-completo',
      link: 'https://mflix-server.vercel.app',
    },
    {
      name: 'Meu protfólio',
      imgUrl: portfolioImg,
      projectType: 'Portfolio pessoal',
      languages: ['HTML5', 'CSS3', 'JavaScript', 'ReactJs'],
      repositorie: 'https://github.com/eduardop1p/meu-portfolio-full-stack',
      link: 'https://eduardo-lavoura.vercel.app',
    },
    {
      name: 'Calculadora de descontos',
      imgUrl: discount,
      projectType: 'Calculadora',
      languages: ['HTML5', 'CSS3', 'JavaScript'],
      repositorie: 'https://github.com/eduardop1p/calculadora-de-desconto',
      link: 'https://eduardop1p.github.io/calculadora-de-desconto/',
    },
    {
      name: 'Landing page do usuário',
      imgUrl: landingPage,
      projectType: 'Informações de um serviço',
      languages: ['HTML5', 'CSS3', 'JavaScript'],
      repositorie: 'https://github.com/eduardop1p/manage-landing-page',
      link: 'https://eduardop1p.github.io/manage-landing-page/',
    },
    {
      name: 'Rastreador de endereços ip',
      imgUrl: ipTracker,
      projectType: 'Rastreador de ip',
      languages: ['HTML5', 'CSS3', 'JavaScript'],
      repositorie: 'https://github.com/eduardop1p/IP-Address-Tracker-Rastreador-de-Enderecos-IP',
      link: 'https://eduardop1p.github.io/IP-Address-Tracker-Rastreador-de-Enderecos-IP/',
    },
    {
      name: 'Card resumo de pedido',
      imgUrl: cardResume,
      projectType: 'Pedido',
      languages: ['HTML5', 'CSS3'],
      repositorie: 'https://github.com/eduardop1p/FrontEnd-card-resumo-de-pedido',
      link: 'https://eduardop1p.github.io/FrontEnd-card-resumo-de-pedido/',
    },
    {
      name: 'Form simples de login',
      imgUrl: formSimple,
      projectType: 'Formulário',
      languages: ['HTML5', 'CSS3', 'JavaScript'],
      repositorie: 'https://github.com/eduardop1p/form-simples-facul',
      link: 'https://eduardop1p.github.io/form-simples-facul/',
    },
  ];

  let projectDetails = useRef(null);

  const { darkMode } = useSelector(state => state.darkMode);

  function handleClickOnProject(event, link) {
    dispatch(actions.hideDarkModeSuccess({ hideDarkMode: true }));
    projectDetails.current = event.currentTarget;
    event.currentTarget.classList.add('an-portfolio-details');
    const nextElementSibling = event.currentTarget.nextElementSibling;
    const iframeNextElementSibling = nextElementSibling.querySelector('iframe');
    nextElementSibling.classList.add('active-portfolio-details');
    if (iframeNextElementSibling.src) return;
    iframeNextElementSibling.src = link;
    iframeNextElementSibling.onload = () =>
      iframeNextElementSibling.nextElementSibling &&
      iframeNextElementSibling.nextElementSibling.remove();
  }

  return (
    <Main>
      <BgActiveRouter data-dark-mode={darkMode} />
      <PortfolioContainer data-dark-mode={darkMode}>
        <div className="portfolio" data-dark-mode={darkMode}>
          <TitlePagesContainer>
            <h1 data-dark-mode={darkMode}>Projetos</h1>
            <h2 data-dark-mode={darkMode}>
              Meu <span>Portfólio</span>
            </h2>
          </TitlePagesContainer>
          <div className="projects" data-dark-mode={darkMode}>
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
                      dispatch(actions.hideDarkModeFailure());
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
                        dispatch(actions.hideDarkModeFailure());
                      }}
                      data-dark-mode={darkMode}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                        <path d="M249 862.566 193.434 807l231-231-231-231L249 289.434l231 231 231-231L766.566 345l-231 231 231 231L711 862.566l-231-231-231 231Z" />
                      </svg>
                    </div>
                    <div className="details" data-dark-mode={darkMode}>
                      <h1>{project.name}</h1>
                      <div className="info" data-dark-mode={darkMode}>
                        <div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                              <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                            </svg>
                            <h2>
                              Projeto: <span> {project.projectType}</span>
                            </h2>
                          </div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                            </svg>
                            <h2 className="">
                              Principais tecnologias:{' '}
                              <span>{project.languages.map(language => language).join(', ')}</span>
                            </h2>
                          </div>
                        </div>
                        <div>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                            <h2>
                              Repositório:{' '}
                              <a href={project.repositorie} target="_blank">
                                {project.repositorie.replace('https://', '')}
                              </a>
                            </h2>
                          </div>
                          {project.link && (
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
                          )}
                        </div>
                      </div>
                      {project.link ? (
                        <div className="site-iframe" data-dark-mode={darkMode}>
                          <iframe
                            loading="lazy"
                            className={
                              project.projectType === 'API' ? 'api-iframe-color-fff' : null
                            }
                          ></iframe>
                          <Skeleton
                            sx={{ bgcolor: darkMode ? '#202020' : color5 }}
                            variant="rectangular"
                            animation="wave"
                            width="100%"
                            height="100%"
                          />
                        </div>
                      ) : (
                        <img src={project.imgUrl} className="site-iframe" />
                      )}
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
