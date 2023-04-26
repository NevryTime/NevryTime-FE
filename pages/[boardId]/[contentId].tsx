import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Header from '@/src/components/Header';
import CommonLayout from '@/src/views/commonLayout';
import Footer from '@/src/components/Footer';

import ContentView from '@/src/views/contentView';

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

/** types */
type contentDataType = {
  id: number;
  boardName: string;
  memberName: string;
  title: string;
  content: string;
  likes: number;
  createAt: string;
  image: boolean;
  show: boolean;
};

function Content() {
  const router = useRouter();
  const { contentId } = router.query;

  const [contentData, setContentData] = useState<contentDataType[]>([
    {
      id: 17,
      boardName: '자유게시판',
      memberName: 'tester1',
      title: '게시글 생성 테스트1',
      content: '내용은 아무거나 게시판 종류는 자유게시판',
      likes: 0,
      createAt: '2023-04-26T15:06:00.710734',
      image: false,
      show: false,
    },
  ]);

  return (
    <Container>
      <Header />
      <LayoutContainer>
        <ContentView
          contentData={contentData}
          id={0}
          boardName={''}
          memberName={''}
          title={''}
          content={''}
          likes={0}
          createAt={''}
          image={false}
          show={false}
        />
        <CommonLayout />
      </LayoutContainer>
      <FooterSection>
        <Footer />
      </FooterSection>
    </Container>
  );
}

export default Content;
