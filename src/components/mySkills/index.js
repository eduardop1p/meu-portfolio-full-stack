/* eslint-disable */

import { useState, useRef } from 'react';

import MySkillsContainer, { SkillPercentageTitle } from './styled';

export default function MySkills({ darkMode, aboutRouter }) {
  const mySkills = useRef([
    { name: 'Html', percentage: 100 },
    { name: 'Css', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Styled components', percentage: 85 },
    { name: 'NodeJs', percentage: 80 },
    { name: 'Express', percentage: 80 },
    { name: 'MongoDb', percentage: 70 },
    { name: 'Mysql', percentage: 55 },
    { name: 'Python', percentage: 25 },
    { name: 'Tailwind css', percentage: 25 },
  ]).current;

  return (
    <MySkillsContainer mySkills={mySkills}>
      <h2 data-dark-mode={darkMode}>Minhas principais skills</h2>
      <div className={aboutRouter ? 'my-skills-100-grid' : 'my-skills'}>
        {mySkills.map(skill => (
          <SkillPercentageTitle percentageSkill={skill.percentage} key={skill.name}>
            <div data-dark-mode={darkMode}>
              <span>{skill.percentage}%</span>
            </div>
            <h2 data-dark-mode={darkMode}>{skill.name}</h2>
          </SkillPercentageTitle>
        ))}
      </div>
    </MySkillsContainer>
  );
}
