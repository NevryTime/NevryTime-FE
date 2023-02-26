import Head from 'next/head';

/* 페이지 컴포넌트 */
import FirstView from '../src/components/views/FirstViewPage';

function Home() {
  return (
    <div>
      <Head>
        <title>CloneFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstView />
    </div>
  );
}

export default Home;
