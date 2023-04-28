import { useState } from 'react';
import { useSession } from 'next-auth/react';
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
  const { data: session } = useSession();

  return (
    <Container>
      <Head>
        <title>네브리타임</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session?.user?.accessToken ? (
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
