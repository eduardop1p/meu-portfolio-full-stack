/* eslint-disable */

import { useState, useRef } from 'react';

import MySkillsContainer, { SkillPercentageTitle } from './styled';
import styledComponentsImg from '../../assets/img/styled-components.png';
import prettierImg from '../../assets/img/prettier.png';
import apolloImg from '../../assets/img/apollo.png';
import pm2Img from '../../assets/img/pm2-v4.png';

export default function MySkills({ darkMode, aboutRouter }) {
  const frontEndSkills = [
    {
      name: 'Html5',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'Css3',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
    },
    {
      name: 'TypeScript',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'ReactJs',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'NextJS',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'TailwindCSS',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
    },
    { name: 'Styled components', img: styledComponentsImg },
    {
      name: 'Vitest',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
    },
    { name: 'Prettier', img: prettierImg },
    {
      name: 'ESLint',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg',
    },
    {
      name: 'ViteJs',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    },
    {
      name: 'Apollo',
      img: apolloImg,
    },
    {
      name: 'GraphQL',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
    },
    {
      name: 'SocketIo client',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
    },
  ];

  const baxkEndSkills = [
    {
      name: 'JavaScript',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
    },
    {
      name: 'TypeScript',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'NodeJs',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    },
    {
      name: 'ExpressJs',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    },
    {
      name: 'NestJs',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg',
    },
    {
      name: 'SocketIo server',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
    },
    {
      name: 'Java',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
    },
    {
      name: 'Spring boot',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    },
  ];

  const dataBasesSkills = [
    {
      name: 'MongoDb',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'PostgreSQL',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    },
    {
      name: 'MySQL',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
    },
  ];

  const devOpsSkills = [
    {
      name: 'Linux',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    },
    {
      name: 'Bash',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg',
    },
    {
      name: 'Nginx',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg',
    },
    {
      name: 'Tomcat',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original-wordmark.svg',
    },
    {
      name: 'Pm2',
      img: pm2Img,
    },
    {
      name: 'AWS',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
    {
      name: 'Heroku',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original-wordmark.svg',
    },
    {
      name: 'Vercel',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg',
    },
  ];

  const controlVersionSkills = [
    {
      name: 'Git',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg',
    },
    {
      name: 'GitHub',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    },
  ];

  const toolsSkills = [
    {
      name: 'VS Code',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    },
    {
      name: 'Intellij',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg',
    },
    {
      name: 'Insomnia',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg',
    },
  ];

  return (
    <MySkillsContainer>
      <h1 data-dark-mode={darkMode}>Minhas principais skills</h1>
      <h2>Front End</h2>
      <div className={`my-skills-100-grid`}>
        {frontEndSkills.map(skill => (
          <SkillPercentageTitle percentageSkill={skill.percentage} key={skill.name}>
            {/* <div data-dark-mode={darkMode}>
              <span>{skill.percentage}%</span>
            </div> */}
            <img
              width={80}
              height={80}
              style={{ textAlign: 'center', objectFit: 'contain' }}
              src={skill.img}
            />
            <h2 data-dark-mode={darkMode}>{skill.name}</h2>
          </SkillPercentageTitle>
        ))}
      </div>
      <h2>Back End</h2>
      <div className={`my-skills-100-grid`}>
        {baxkEndSkills.map(skill => (
          <SkillPercentageTitle percentageSkill={skill.percentage} key={skill.name}>
            {/* <div data-dark-mode={darkMode}>
              <span>{skill.percentage}%</span>
            </div> */}
            <img
              width={80}
              height={80}
              style={{ textAlign: 'center', objectFit: 'contain' }}
              src={skill.img}
            />
            <h2 data-dark-mode={darkMode}>{skill.name}</h2>
          </SkillPercentageTitle>
        ))}
      </div>
      <h2>Banco de dados</h2>
      <div className={`my-skills-100-grid`}>
        {dataBasesSkills.map(skill => (
          <SkillPercentageTitle percentageSkill={skill.percentage} key={skill.name}>
            {/* <div data-dark-mode={darkMode}>
              <span>{skill.percentage}%</span>
            </div> */}
            <img
              width={80}
              height={80}
              style={{ textAlign: 'center', objectFit: 'contain' }}
              src={skill.img}
            />
            <h2 data-dark-mode={darkMode}>{skill.name}</h2>
          </SkillPercentageTitle>
        ))}
      </div>
      <h2>DevOps</h2>
      <div className={`my-skills-100-grid`}>
        {devOpsSkills.map(skill => (
          <SkillPercentageTitle percentageSkill={skill.percentage} key={skill.name}>
            {/* <div data-dark-mode={darkMode}>
              <span>{skill.percentage}%</span>
            </div> */}
            <img
              width={80}
              height={80}
              style={{ textAlign: 'center', objectFit: 'contain' }}
              src={skill.img}
            />
            <h2 data-dark-mode={darkMode}>{skill.name}</h2>
          </SkillPercentageTitle>
        ))}
      </div>
      <h2>Ferramentas de Controle de Versão</h2>
      <div className={`my-skills-100-grid`}>
        {controlVersionSkills.map(skill => (
          <SkillPercentageTitle percentageSkill={skill.percentage} key={skill.name}>
            {/* <div data-dark-mode={darkMode}>
              <span>{skill.percentage}%</span>
            </div> */}
            <img
              width={80}
              height={80}
              style={{ textAlign: 'center', objectFit: 'contain' }}
              src={skill.img}
            />
            <h2 data-dark-mode={darkMode}>{skill.name}</h2>
          </SkillPercentageTitle>
        ))}
      </div>
      <h2>Ferramentas</h2>
      <div className={`my-skills-100-grid`}>
        {toolsSkills.map(skill => (
          <SkillPercentageTitle percentageSkill={skill.percentage} key={skill.name}>
            {/* <div data-dark-mode={darkMode}>
              <span>{skill.percentage}%</span>
            </div> */}
            <img
              width={80}
              height={80}
              style={{ textAlign: 'center', objectFit: 'contain' }}
              src={skill.img}
            />
            <h2 data-dark-mode={darkMode}>{skill.name}</h2>
          </SkillPercentageTitle>
        ))}
      </div>
    </MySkillsContainer>
  );
}
