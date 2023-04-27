import React, { useState, useEffect } from 'react';

import { CategoryBox, Divider } from './style';

/** axios */
import { getBoardList } from '@/src/axios/BoardListAxios';

/** types */
interface BoardType {
  id: number;
  boardName: string;
  url: string;
}

function BoardCategories() {
  // 현재 게시판 목록(기본)
  const [basicBoards, setBoards] = useState<BoardType[]>([
    {
      id: 1,
      boardName: '자유게시판',
      url: '',
    },
    {
      id: 2,
      boardName: '비밀게시판',
      url: '',
    },
    {
      id: 3,
      boardName: '졸업생게시판',
      url: '',
    },
    {
      id: 4,
      boardName: '새내기게시판',
      url: '',
    },
    {
      id: 5,
      boardName: '시사 이슈',
      url: '',
    },
    {
      id: 6,
      boardName: '장터게시판',
      url: '',
    },
    {
      id: 7,
      boardName: '정보게시판',
      url: '',
    },
    {
      id: 8,
      boardName: '홍보게시판',
      url: '',
    },
    {
      id: 9,
      boardName: '동아리 학회',
      url: '',
    },
  ]);

  // useEffect(() => {
  //   getBoardList().then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  // 현재 게시판 목록(졸업생)
  const [graduateBoards, setGraduateBoards] = useState<BoardType[]>([
    {
      id: 1,
      boardName: '취업 진로',
      url: '',
    },
    {
      id: 2,
      boardName: '대학원&대학원생 게시판',
      url: '',
    },
  ]);

  // 현재 게시판 목록(기타)
  const [etcBoards, setEtcBoards] = useState<BoardType[]>([
    {
      id: 1,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 2,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 3,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 4,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 5,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 6,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 7,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 8,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 9,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 10,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 11,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 12,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 13,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 14,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 15,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 16,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 17,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 18,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 19,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 20,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 21,
      boardName: '끝말잇기',
      url: '',
    },
    {
      id: 22,
      boardName: '끝말잇기',
      url: '',
    },
  ]);

  // 현재 위치한 게시판
  const [currentBoard, setCurrentBoard] = useState('');
  const changeBoard = (e: React.MouseEvent, boardName: string) => {
    setCurrentBoard(boardName);
  };

  return (
    <CategoryBox>
      <div>
        <Divider></Divider>
        <ul>
          {basicBoards.map((board) => (
            <li
              key={board.id}
              className={board.boardName === currentBoard ? 'active' : ''}
              onClick={(e) => changeBoard(e, board.boardName)}
            >
              {board.boardName}
            </li>
          ))}
        </ul>
        <Divider></Divider>
        <ul>
          {graduateBoards.map((board) => (
            <li
              key={board.id}
              className={board.boardName === currentBoard ? 'active' : ''}
              onClick={(e) => changeBoard(e, board.boardName)}
            >
              {board.boardName}
            </li>
          ))}
        </ul>
        <Divider></Divider>
        <ul>
          {etcBoards.map((board) => (
            <li
              key={board.id}
              className={board.boardName === currentBoard ? 'active' : ''}
              onClick={(e) => changeBoard(e, board.boardName)}
            >
              {board.boardName}
            </li>
          ))}
        </ul>
        <Divider></Divider>
      </div>
    </CategoryBox>
  );
}

export default BoardCategories;
