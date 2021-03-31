import React from 'react';
import 'index.css';
import Router from './components/Router';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import styled from 'styled-components';
import BackgroundImage from 'img/background.png';

const WholeScreen = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.section`
  background-image: url("${BackgroundImage}");
  background-color: #8FDFF4;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 81%;
  display: flex;
  align-items: center;
`;

const App = () => {
  return (
    <WholeScreen>
      <Header />
      <Main>
        <Router />
      </Main>
      <Footer />
    </WholeScreen>
  );
};

export default App;
