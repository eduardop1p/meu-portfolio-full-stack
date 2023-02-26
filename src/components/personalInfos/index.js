/* eslint-disable */

// aqui falta colocar um cv pra download

import cvDawnload from '../../assets/img/31c8b9e24be5ad81c96331dcd7f26153.jpg';
import { ButtonContainer } from '../../pages/styled';
import PersonalInfosContainer from './styled';

export default function PersonalInfos({ darkMode }) {
  return (
    <PersonalInfosContainer>
      <div className="personal-infos">
        <h3 data-dark-mode={darkMode}>Informações pessoais</h3>
        <div className="infos" data-dark-mode={darkMode}>
          <div>
            <div>
              <h4>Primeiro nome:</h4>
              <h4>Eduardo</h4>
            </div>
            <div>
              <h4>Idade:</h4>
              <h4>{new Date().getFullYear() - 2002}</h4>
            </div>
            <div>
              <h4>Freelance:</h4>
              <h4 className="available">Disponível</h4>
            </div>
            <div>
              <h4>Celular:</h4>
              <h4>{'(99) 98532-9861'}</h4>
            </div>
            <div>
              <h4>GitHub:</h4>
              <a href="https://github.com/eduardop1p" target="_blank" className="link-github">
                github.com/eduardop1p
              </a>
            </div>
          </div>
          <div>
            <div>
              <h4>Segundo nome:</h4>
              <h4>Lavoura</h4>
            </div>
            <div>
              <h4>Nacionalidade:</h4>
              <h4>Brasileira</h4>
            </div>
            <div>
              <h4>Endereço:</h4>
              <h4>Colinas - Ma, Bairro Trizidela, Rua Delfina Ribeiro, Nº 222</h4>
            </div>
            <div>
              <h4>Email:</h4>
              <h4>eduardop1p87@gmail.com</h4>
            </div>
            <div>
              <h4>Idiomas:</h4>
              <h4>Portugues - nativo, Ingles - intermediário, Espanhol - Básico</h4>
            </div>
          </div>
        </div>
        <a
          className="download-cv"
          href={cvDawnload}
          download="cv-eduardo-lavoura-dev-full-stack.png"
        >
          <ButtonContainer data-dark-mode={darkMode} strokeWidth1rem>
            Download cv
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
            </span>
          </ButtonContainer>
        </a>
      </div>
      <div className="experience-projects-customers-won" data-dark-mode={darkMode}>
        <div>
          <h2>2+</h2>
          <h3>Anos de experiência</h3>
        </div>
        <div>
          <h2>10+</h2>
          <h3>Projetos completos</h3>
        </div>
        <div>
          <h2>16+</h2>
          <h3>Clientes felizes</h3>
        </div>
        <div>
          <h2>0+</h2>
          <h3>Prêmios ganhos</h3>
        </div>
      </div>
    </PersonalInfosContainer>
  );
}
