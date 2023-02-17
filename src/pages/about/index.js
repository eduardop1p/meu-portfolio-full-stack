/* eslint-disable */

import { Element } from 'react-scroll';

import { AboutContainer } from '../styled';

export default function About() {
  return (
    <Element name="sobre">
      <AboutContainer>
        <h2>SOBRE</h2>
        <h1>SAIBA MAIS SOBRE MIM</h1>
        <div>
          <img src="" alt="my-photo" />
          <div className="about">
            <h3>Desenvolvedor web Full Stack</h3>
          </div>
        </div>
      </AboutContainer>
    </Element>
  );
}
