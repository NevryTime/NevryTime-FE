import React, { useState } from 'react';

/** components */
import CommonMyContentListLayout from '../common/commonMyContentListLayout';

/** types */
type contentListDataType = {
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

function MyArticleView() {
  const [contentList, setContentList] = useState<contentListDataType[]>([
    {
      id: 17,
      boardName: '자유게시판',
      memberName: 'tester1',
      title: '게시글 생성 테스트1',
      content: '내용은 아무거나 게시판 종류는 자유게시판',
      likes: 0,
      createAt: '2023-04-27T13:15:56.710734',
      image: false,
      show: false,
    },
    {
      id: 16,
      boardName: '자유게시판',
      memberName: 'tester1',
      title: '게시글 생성 테스트1',
      content: '내용은 아무거나 게시판 종류는 자유게시판',
      likes: 0,
      createAt: '2023-04-27T12:18:56.293968',
      image: false,
      show: false,
    },
    {
      id: 15,
      boardName: '자유게시판',
      memberName: 'tester3',
      title: '게시글 생성 테스트1',
      content: '내용은 아무거나 게시판 종류는 자유게시판',
      likes: 0,
      createAt: '2023-04-22T08:19:53.678716',
      image: false,
      show: false,
    },
    {
      id: 14,
      boardName: '자유게시판',
      memberName: 'tester3',
      title: '게시글 생성 테스트1',
      content: '내용은 아무거나 게시판 종류는 자유게시판',
      likes: 0,
      createAt: '2023-04-27T13:00:53.253813',
      image: false,
      show: false,
    },
    {
      id: 13,
      boardName: '자유게시판',
      memberName: 'tester3',
      title: '게시글 생성 테스트1',
      content: '내용은 아무거나 게시판 종류는 자유게시판',
      likes: 0,
      createAt: '2023-04-25T08:19:52.798578',
      image: false,
      show: false,
    },
  ]);

  return (
    <CommonMyContentListLayout
      contentList={contentList}
      titleName={'내가 쓴 글'}
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
  );
}

export default MyArticleView;
