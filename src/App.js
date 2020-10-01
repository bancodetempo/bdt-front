import React from 'react';
import 'index.css';
import Router from 'components/Router';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import styled from 'styled-components';
import BackgroundImage from 'img/background.png';

const WholeScreen = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const Container = styled.section`
  background-image: url("${BackgroundImage}");
  background-color: #000000;
  background-size: cover;
  background-repeat: no-repeat;
  height: 88%;
`;
const App = () => {
  return (
    <WholeScreen>
      <Container>
        <Header />
        <Router />
      </Container>
      <Footer />
    </WholeScreen>
  );
};

export default App;
