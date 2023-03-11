/* eslint-disable */
import { useSelector } from 'react-redux';

import Main, { BgActiveRouter, ContactContainer, TitlePagesContainer } from '../styled';

export default function Contact() {
  const { darkMode } = useSelector(state => state.darkMode);

  return (
    <Main>
      <BgActiveRouter data-dark-mode={darkMode} />
      <ContactContainer data-dark-mode={darkMode}>
        <div className="contact">
          <TitlePagesContainer>
            <h1 data-dark-mode={darkMode}>Contato</h1>
            <h2 data-dark-mode={darkMode}>
              Entrar em <span>Contato</span>
            </h2>
          </TitlePagesContainer>
          <div className="contact-and-info">
            <div>
              <h1>Fale comigo!</h1>
              <p>
                Sinta-se à vontade para entrar em contato comigo. Estou sempre aberto a discutir
                novos projetos, ideias criativas ou oportunidades para fazer parte de suas visões.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </ContactContainer>
    </Main>
  );
}
