import React from 'react';
import styled from 'styled-components';

/** components */
import MyCommentArticleView from '@/src/views/myCommentArticleView';
import Header from '@/src/components/Header';
import BoardCategories from '@/src/components/BoardCategories';
import Footer from '@/src/components/Footer';
import CommonRightLayout from '@/src/views/common/commonRightLayout';

const FooterSection = styled.div`
  width: 100%;
  bottom: 0;
`;

const Container = styled.div`
  ${({ theme }) => theme.containers.mainContainer}
`;

const LayoutContainer = styled.div`
  width: 1125px;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
`;

function myCommentArticle() {
  return (
    <Container>
      <Header />
      <BoardCategories />
      <LayoutContainer>
        <MyCommentArticleView />
        <CommonRightLayout />
      </LayoutContainer>
      <FooterSection>
        <Footer />
      </FooterSection>
    </Container>
  );
}

export default myCommentArticle;
