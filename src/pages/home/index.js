/* eslint-disable */

import Header from '../../components/header';
import Main from '../styled';
import About from '../about';
import Resume from '../resume';
import Services from '../services';
import Portfolio from '../portfolio';
import Contact from '../contact';

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <About />
        <Resume />
        <Services />
        <Portfolio />
        <Contact />
      </Main>
    </>
  );
}
