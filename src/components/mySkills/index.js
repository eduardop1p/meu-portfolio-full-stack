/* eslint-disable */

import { useState, useRef } from 'react';

import MySkillsContainer, { SkillPercentageTitle } from './styled';
import styledComponentsImg from '../../assets/img/styled-components.png';

export default function MySkills({ darkMode, aboutRouter }) {
  const mySkills = useRef([
    {
      name: 'Html',
      percentage: 100,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'Css',
      percentage: 95,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'Java',
      percentage: 90,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
    },
    {
      name: 'TypeScript',
      percentage: 90,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'JavaScript',
      percentage: 90,
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
    },
    {
      name: 'NodeJs',
      percentage: 85,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    },
    {
      name: 'NestJs',
      percentage: 85,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg',
    },
    {
      name: 'React',
      percentage: 85,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'NextJS',
      percentage: 85,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
    },
    { name: 'Styled components', percentage: 85, img: styledComponentsImg },
    {
      name: 'Express',
      percentage: 80,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
    },
    {
      name: 'MongoDb',
      percentage: 70,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
    },
    {
      name: 'Mysql',
      percentage: 55,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
    },
    {
      name: 'Python',
      percentage: 25,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'Tailwind css',
      percentage: 25,
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
    },
  ]).current;

  return (
    <MySkillsContainer mySkills={mySkills}>
      <h2 data-dark-mode={darkMode}>Minhas principais skills</h2>
      <div className={aboutRouter ? 'my-skills-100-grid' : 'my-skills'}>
        {mySkills.map(skill => (
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
