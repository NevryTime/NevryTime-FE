import React from 'react';
import styled from 'styled-components';

/** components */
import MyPageView from '@/src/views/myPageView';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const Container = styled.div`
  ${({ theme }) => theme.containers.mainContainer}
`;

const FooterSection = styled.div`
  width: 100%;
  bottom: 0;
`;

function myPage() {
  return (
    <Container>
      <Header />
      <MyPageView />
      <FooterSection>
        <Footer />
      </FooterSection>
    </Container>
  );
}

export default myPage;
