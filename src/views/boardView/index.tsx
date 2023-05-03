/** 각 게시판의 메인페이지 뷰 */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

/** hooks */
import { calcWritedTime } from '@/src/hooks/calcWritedTime';

/** styles */
import {
  BoardContainer,
  BoardTitleSection,
  WriteSection,
  ContentListSection,
  Content,
  Status,
  PageSection,
} from './style';
import { InputBox } from '@/src/components/InputBox';

/** components */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import Pagenation from '../common/pagenationLayout';

/** store */
import { boardCategoryListAtom } from '../../../src/store/BoardCategoryStore';

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

type contentListType = {
  contentList: contentDataType[];
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

function boardView({ contentList }: contentListType) {
  const router = useRouter();
  const { boardId } = router.query;

  // 해당 게시판 정보 전역상태 가져오기
  const boardCategoryValue = useRecoilValue(boardCategoryListAtom);
  const [currentBoardCategory, setCurrentBoardCategory] = useState([]);

  // 현재 위치한 게시판이 무엇인지 판단
  useEffect(() => {
    if (boardId) {
      const boardCategory = boardCategoryValue.find(
        (board) => board.id === Number(boardId),
      );

      if (boardCategory) {
        setCurrentBoardCategory(boardCategory.name);
      }
    }
  }, [contentList]);

  // 게시글 작성 시간 계산
  const [writedTime, setWritedTime] = useState(
    Array(contentList.length).fill(''),
  );

  useEffect(() => {
    const times = [...writedTime];

    for (let i = 0; i < contentList.length; i++) {
      times[i] = calcWritedTime(contentList[i]);
    }

    setWritedTime(times);
  }, [contentList]);

  // 게시글 클릭 시 상세페이지로 이동
  const onClickContent = (contentId: number) => {
    router.push(`/${boardId}/${contentId}`);
  };

  return (
    <BoardContainer>
      <BoardTitleSection>{currentBoardCategory}</BoardTitleSection>
      {/* 클릭하면 글 작성하는 영역 열리게 */}
      <WriteSection>
        <InputBox
          width={780}
          height={50}
          placeholder={'새 글을 작성해주세요!'}
        />
      </WriteSection>
      <ContentListSection>
        {contentList && contentList.length > 0 ? (
          <>
            {contentList.map((content, i) => (
              <Content
                key={content.id}
                onClick={() => onClickContent(content.id)}
              >
                <div>{content.title}</div>
                <div>{content.content}</div>
                <div>
                  <div>{writedTime[i]}</div>
                  {/* <div>{content.show ? content.nickName : '익명'}</div> */}
                  <div>{content.nickName}</div>
                  <Status>
                    {content.image ? (
                      <div>
                        <FontAwesomeIcon icon={faImage} /> 1
                      </div>
                    ) : (
                      ''
                    )}
                    <div>
                      <FontAwesomeIcon icon={faThumbsUp} /> {content.scraps}
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faComment} />{' '}
                      {content.commentCount}
                    </div>
                  </Status>
                </div>
              </Content>
            ))}
          </>
        ) : (
          <Content>게시글이 없습니다.</Content>
        )}
      </ContentListSection>
      {/* <PageSection>
        <Pagenation />
      </PageSection> */}
    </BoardContainer>
  );
}

export default boardView;
