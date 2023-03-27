/* eslint-disable */

import ExperienceEducationContainer from './styled';

export default function ExperienceEducation({ darkMode }) {
  return (
    <ExperienceEducationContainer>
      <h2 data-dark-mode={darkMode}>Experiência & Educação</h2>
      <div className="experience-education">
        <div className="experience">
          <div data-dark-mode={darkMode}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-dark-mode={darkMode}
              >
                <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
              </svg>
            </div>
            <div>
              <h3>10/2022 - Atualmente</h3>
              <h1>Freelance como Desenvolvedor web</h1>
              <p>
                Atualização de pacotes em servidores, desenvolvendo novas funcionalidades para
                sistema existentes, correções de bugs em aplicações, desenvolvimento de novas
                aplicações
              </p>
            </div>
          </div>
          <div data-dark-mode={darkMode}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-dark-mode={darkMode}
              >
                <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
              </svg>
            </div>
            <div>
              <h3>2021 - Atualmente</h3>
              <h1>Desenvolvedor web - Projetos pessoais</h1>
              <p>
                Coloco em pratica todo meu conhecimento desenvolvendo aplicações web com as
                tecnologias atuais
              </p>
            </div>
          </div>
        </div>
        <div className="education">
          <div data-dark-mode={darkMode}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-dark-mode={darkMode}
              >
                <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
              </svg>
            </div>
            <div>
              <h3>2020 - Atualmente</h3>
              <h1>Analise e desenvolvimento de sistemas - Pitágoras unopar</h1>
              <p>Curso superior de tecnologo, estou cursando o último semestre no momento</p>
            </div>
          </div>
          <div data-dark-mode={darkMode}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-dark-mode={darkMode}
              >
                <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
              </svg>
            </div>
            <div>
              <h3>2021 - 07/2022</h3>
              <h1>Desenvolvedor Full Stack - Luiz otávio Miranda</h1>
              <p>Curso completo de desenvolvimento web Full Stack do básico ao avançado</p>
            </div>
          </div>
        </div>
      </div>
    </ExperienceEducationContainer>
  );
}
