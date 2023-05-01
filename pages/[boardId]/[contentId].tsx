import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

/** components */
import Header from '@/src/components/Header';
import BoardCategories from '@/src/components/BoardCategories';
import CommonRightLayout from '@/src/views/common/commonRightLayout';
import Footer from '@/src/components/Footer';
import ContentView from '@/src/views/contentView';

/** axios */
import { contentRequest } from '../../src/axios/BoardAxios';

/** store */
import { contentAtom } from '@/src/store/ContentStore';

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

/** types */
type contentDataType = {
  id: number;
  boardName: string;
  nickName: string;
  title: string;
  content: string;
  scraps: number;
  commentCount: number;
  likes: number;
  createAt: string;
  image: boolean;
  show: boolean;
};

function Content() {
  const router = useRouter();
  const { contentId } = router.query;

  const [contentData, setContentData] =
    useRecoilState<contentDataType>(contentAtom);

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    if (contentId) {
      contentRequest(Number(contentId))
        .then((res) => {
          //console.log('res:', res);
          setContentData(res.data.contentResponseDto);
          setCommentList(res.data.commentList);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [contentId]);

  return (
    <Container>
      <Header />
      <BoardCategories />
      <LayoutContainer>
        <ContentView
          contentData={contentData}
          commentList={commentList}
          id={0}
          boardName={''}
          nickName={''}
          title={''}
          content={''}
          scraps={0}
          commentCount={0}
          likes={0}
          createAt={''}
          image={false}
          show={false}
        />
        <CommonRightLayout />
      </LayoutContainer>
      <FooterSection>
        <Footer />
      </FooterSection>
    </Container>
  );
}

export default Content;
