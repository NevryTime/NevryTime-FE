import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

import ChangePassWordView from '@/src/views/changePassWordView';
import ChangeNickView from '@/src/views/changeNickView';
import WithDrawlView from '@/src/views/withDrawlView';

const Container = styled.div`
  ${({ theme }) => theme.containers.mainContainer}
`;

const FooterSection = styled.div`
  width: 100%;
  bottom: 0;
`;

function SubPage() {
  const router = useRouter();

  return (
    <Container>
      <Header />
      {router.asPath === '/my-page/password' ? (
        <ChangePassWordView />
      ) : router.asPath === '/my-page/nick' ? (
        <ChangeNickView />
      ) : router.asPath === '/my-page/with-drawl' ? (
        <WithDrawlView />
      ) : (
        ''
      )}
      <FooterSection>
        <Footer />
      </FooterSection>
    </Container>
  );
}

export default SubPage;
