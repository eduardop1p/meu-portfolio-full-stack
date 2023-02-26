/* eslint-disable */

import { useSelector } from 'react-redux';

import AboutTitles from '../../components/aboutTitles';
import PersonalInfos from '../../components/personalInfos';
import MySkills from '../../components/mySkills';
import ExperienceEducation from '../../components/experienceEducation';

import Main, { BgActiveRouter, AboutContainer } from '../styled';

export default function About() {
  const { darkMode } = useSelector(state => state.darkMode);

  return (
    <Main>
      <BgActiveRouter data-dark-mode={darkMode} />
      <AboutContainer data-dark-mode={darkMode}>
        <div className="about">
          <AboutTitles darkMode={darkMode} />
          <PersonalInfos darkMode={darkMode} />
          <MySkills darkMode={darkMode} aboutRouter />
          <ExperienceEducation darkMode={darkMode} />
        </div>
      </AboutContainer>
    </Main>
  );
}
