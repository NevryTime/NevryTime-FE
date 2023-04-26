/** 각 게시판의 메인페이지 뷰 */
import React, { useState } from 'react';

/** styles */
import {
  BoardContainer,
  BoardTitleSection,
  WriteSection,
  ContentListSection,
  Content,
  PageSection,
} from './style';
import { InputBox } from '@/src/components/InputBox';

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

type contentListType = {
  contentList: contentDataType[];
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

function boardView({ contentList }: contentListType) {
  return (
    <BoardContainer>
      <BoardTitleSection>게시판 이름</BoardTitleSection>
      {/* 클릭하면 글 작성하는 영역 열리게 */}
      <WriteSection>
        <InputBox
          width={780}
          height={50}
          placeholder={'새 글을 작성해주세요!'}
        />
      </WriteSection>
      <ContentListSection>
        {contentList.map((content) => (
          <Content key={content.id}>
            <div>{content.title}</div>
            <div>{content.content}</div>
            <div>
              <div>시간</div>
              <div>{content.show ? content.memberName : '익명'}</div>
            </div>
          </Content>
        ))}
      </ContentListSection>
      <PageSection>페이지네이션 구간</PageSection>
    </BoardContainer>
  );
}

export default boardView;
