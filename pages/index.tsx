import { useState } from 'react';
import Head from 'next/head';

/** views */
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
      {isLogin ? <MainView_Logged /> : <MainView_NotLogged />}
    </div>
  );
}

export default Home;
