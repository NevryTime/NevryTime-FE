import { useState } from 'react';
import Head from 'next/head';

/** views */
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import MainView_Logged from '../src/views/mainView-logged';
import MainView_NotLogged from '../src/views/mainView-notLogged';

function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Head>
        <title>네브리타임</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLogin ? (
        <>
          <Header />
          <MainView_Logged />
          <Footer />
        </>
      ) : (
        <>
          <MainView_NotLogged />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
