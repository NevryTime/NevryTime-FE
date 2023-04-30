import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Header from '@/src/components/Header';
import BoardCategories from '@/src/components/BoardCategories';
import CommonRightLayout from '@/src/views/common/commonRightLayout';
import Pagenation from '@/src/views/common/pagenationLayout';

import BoardView from '@/src/views/boardView';
import Footer from '@/src/components/Footer';

/** axios */
import { boardRequest } from '../../src/axios/BoardAxios';

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

const PageSection = styled.div`
  width: 1125px;
  margin: 20px auto;
`;

/** types */
type contentListDataType = {
  id: number;
  boardName: string;
  memberName: string;
  title: string;
  content: string;
  hearts: number;
  commentCount: number;
  likes: number;
  createAt: string;
  image: boolean;
  show: boolean;
};

function BoardPage() {
  const router = useRouter();
  const { boardId } = router.query;

  // 해당 게시판의 게시글 리스트
  const [contentList, setContentList] = useState<contentListDataType[]>([]);

  // 현재 위치한 페이지
  const [currentPage, setCurrentPage] = useState<number>(0);
  // 현재 게시판의 총 페이지 개수
  const [totalPageCount, setTotalPageCount] = useState<number>(0);

  // 현재 게시판 id와 현재 위치한 페이지를 이용해 게시글 목록을 요청함
  useEffect(() => {
    if (boardId) {
      boardRequest(Number(boardId), currentPage, 20)
        .then((res) => {
          console.log(res.data);
          setTotalPageCount(res.data.contentTotalPages);
          setContentList(res.data.contentPage);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [boardId, currentPage]);

  return (
    <Container>
      <Header />
      <BoardCategories />
      <LayoutContainer>
        <BoardView
          contentList={contentList}
          id={0}
          boardName={''}
          memberName={''}
          title={''}
          content={''}
          hearts={0}
          commentCount={0}
          likes={0}
          createAt={''}
          image={false}
          show={false}
        />
        <CommonRightLayout />
      </LayoutContainer>
      {contentList && contentList.length > 0 ? (
        <PageSection>
          <Pagenation
            totalPageCount={totalPageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </PageSection>
      ) : (
        ''
      )}

      <FooterSection>
        <Footer />
      </FooterSection>
    </Container>
  );
}

export default BoardPage;
