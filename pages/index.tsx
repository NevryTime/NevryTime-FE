import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

/** views */
import Header from '../src/components/Header';
import BoardCategories from '@/src/components/BoardCategories';
import Footer from '../src/components/Footer';
import MainView_Logged from '../src/views/mainView-logged';
import MainView_NotLogged from '../src/views/mainView-notLogged';

const Container = styled.div`
  ${({ theme }) => theme.containers.mainContainer}
`;

const FooterSection = styled.div`
  width: 100%;
  bottom: 0;
`;

function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <Head>
        <title>네브리타임</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLogin ? (
        <>
          <Header />
          <BoardCategories />
          <MainView_Logged />
          <FooterSection>
            <Footer />
          </FooterSection>
        </>
      ) : (
        <MainView_NotLogged />
      )}
    </Container>
  );
}

export default Home;
