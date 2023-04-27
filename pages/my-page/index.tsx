import React from 'react';
import styled from 'styled-components';

/** components */
import MyPageView from '@/src/views/myPageView';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import CommonLayout from '@/src/views/commonLayout';

const FooterSection = styled.div`
  width: 100%;
  bottom: 0;
`;

const Container = styled.div``;

const LayoutContainer = styled.div`
  width: 1125px;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
`;

function myPage() {
  return (
    <Container>
      <Header />
      <LayoutContainer>
        <MyPageView />
        <CommonLayout />
      </LayoutContainer>
      <FooterSection>
        <Footer />
      </FooterSection>
    </Container>
  );
}

export default myPage;
