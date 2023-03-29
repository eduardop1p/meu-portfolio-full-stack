/* eslint-disable */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

// aqui falta colocar uma foto minha na thumb

import AboutTitles from '../../components/aboutTitles';
import PersonalInfos from '../../components/personalInfos';
import MySkills from '../../components/mySkills';
import ExperienceEducation from '../../components/experienceEducation';
import myPhoto from '../../assets/img/31c8b9e24be5ad81c96331dcd7f26153.jpg';
import * as actions from '../../redux/modules/resume/actions';

import Main, {
  HomeContainer,
  BgActiveRouter,
  ButtonContainer,
  BgsHomeContainer,
  ResumeMe,
} from '../styled';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { darkMode } = useSelector(state => state.darkMode);
  const [resumeShow, setResumeShow] = useState(false);

  const breakpoint700 = useMediaQuery({ maxWidth: 700 });

  function manageResume() {
    if (breakpoint700) {
      navigate('/sobre');
      return;
    }
    setResumeShow(!resumeShow);
    if (resumeShow) dispatch(actions.resumeSuccess({ resumeActive: true }));
    dispatch(actions.resumeFailure());
  }

  return (
    <Main>
      <BgActiveRouter data-dark-mode={darkMode} />
      <BgsHomeContainer>
        <div className="bg-yellow"></div>
        <div className="bg-dark" data-dark-mode={darkMode}></div>
      </BgsHomeContainer>
      <HomeContainer data-dark-mode={darkMode}>
        <div className="photo-and-more-information">
          <img data-dark-mode={darkMode} src={myPhoto} alt="my-photo" />
          <div className="more-information">
            <h1 data-dark-mode={darkMode}>
              <span>EDUARDO LAVOURA</span> DESENVOLVEDOR WEB
            </h1>
            <p data-dark-mode={darkMode}>
              Sou profissional em desenvolvimento web full-stack, focado em criar experiências
              limpas e fáceis de usar. Sou apaixonado por criar um software excelente que melhore a
              vida das pessoas ao meu redor.
            </p>
            <SocialLink darkMode={darkMode} />

            <ButtonContainer data-dark-mode={darkMode} onClick={manageResume}>
              Mais Sobre Mim
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="home-arrow"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </span>
            </ButtonContainer>
            <ResumeMe
              onClick={event => event.target === event.currentTarget && setResumeShow(!resumeShow)}
              className={resumeShow ? 'active-resume-me' : null}
            >
              <div className="resume-and-close" data-dark-mode={darkMode}>
                <div
                  className="close-resume"
                  title="Fechar"
                  onClick={() => setResumeShow(!resumeShow)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
                    <path d="M249 862.566 193.434 807l231-231-231-231L249 289.434l231 231 231-231L766.566 345l-231 231 231 231L711 862.566l-231-231-231 231Z" />
                  </svg>
                </div>
                <div className="resume" data-dark-mode={darkMode}>
                  <div className="about">
                    <AboutTitles darkMode={darkMode} />
                    <PersonalInfos darkMode={darkMode} />
                    <MySkills darkMode={darkMode} />
                    <ExperienceEducation darkMode={darkMode} />
                  </div>
                </div>
              </div>
            </ResumeMe>
          </div>
        </div>
      </HomeContainer>
    </Main>
  );
}

function SocialLink({ darkMode }) {
  const breakpoint500 = useMediaQuery({ maxWidth: 500 });

  function Link1() {
    return (
      <a href="https://github.com/eduardop1p" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-dark-mode={darkMode}>
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      </a>
    );
  }

  function Link2() {
    return (
      <a href="https://www.linkedin.com/in/eduardo-oliveira-947a191b6/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-dark-mode={darkMode}>
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </svg>
      </a>
    );
  }

  function Link3() {
    return (
      <a href="https://www.instagram.com/yfg.lavoura/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-dark-mode={darkMode}>
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </a>
    );
  }

  function Link4() {
    return (
      <a href="mailto:eduardop1p87@gmail.com">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-dark-mode={darkMode}>
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
      </a>
    );
  }

  function Link5() {
    return (
      <a href="tel:99985329861">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-dark-mode={darkMode}>
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
        </svg>{' '}
      </a>
    );
  }

  return (
    <div className="social-links">
      {breakpoint500 ? (
        <>
          <div>
            <Link1 />
            <Link2 />
            <Link3 />
          </div>
          <div>
            <Link4 />
            <Link5 />
          </div>
        </>
      ) : (
        <>
          <Link1 />
          <Link2 />
          <Link3 />
          <Link4 />
          <Link5 />
        </>
      )}
    </div>
  );
}
