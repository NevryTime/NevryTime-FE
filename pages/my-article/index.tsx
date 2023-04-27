import React from 'react';
import styled from 'styled-components';

/** components */
import MyArticleView from '@/src/views/myArticleView';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import CommonRightLayout from '@/src/views/common/commonRightLayout';

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

function myArticle() {
  return (
    <Container>
      <Header />
      <LayoutContainer>
        <MyArticleView />
        <CommonRightLayout />
      </LayoutContainer>
      <FooterSection>
        <Footer />
      </FooterSection>
    </Container>
  );
}

export default myArticle;
