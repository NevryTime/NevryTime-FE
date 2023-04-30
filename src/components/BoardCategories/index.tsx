import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';

/** store */
import { boardCategoryListAtom } from '../../../src/store/BoardCategoryStore';

import { CategoryBox, Divider } from './style';

/** axios */
import { boardListRequest } from '@/src/axios/BoardAxios';

/** types */
interface BoardType {
  id: number;
  name: string;
  boardType: string;
}

function BoardCategories() {
  // 서버에서 가져온 모든 게시판 목록
  const [boards, setBoards] = useState<BoardType[]>([]);
  const setBoardsCategory = useSetRecoilState(boardCategoryListAtom);

  // 현재 게시판 목록(기본)
  const [basicBoards, setBasicBoards] = useState<BoardType[]>([]);

  // 현재 게시판 목록(졸업생)
  const [graduateBoards, setGraduateBoards] = useState<BoardType[]>([]);

  // 현재 게시판 목록(기타)
  const [etcBoards, setEtcBoards] = useState<BoardType[]>([]);

  useEffect(() => {
    boardListRequest().then((res) => {
      setBoards(res.data.boardList);
      setBoardsCategory(res.data.boardList);
    });
  }, []);

  useEffect(() => {
    const basicBoards: BoardType[] = [];
    const graduateBoards: BoardType[] = [];
    const etcBoards: BoardType[] = [];

    boards.forEach((board) => {
      if (board.boardType === 'BASIC') {
        basicBoards.push(board);
      } else if (board.boardType === 'GRADUATE') {
        graduateBoards.push(board);
      } else if (board.boardType === 'ETC') {
        etcBoards.push(board);
      }
    });

    setBasicBoards(basicBoards);
    setGraduateBoards(graduateBoards);
    setEtcBoards(etcBoards);
  }, [boards]);

  // 현재 위치한 게시판
  const [currentBoard, setCurrentBoard] = useState('');
  const changeBoard = (e: React.MouseEvent, name: string) => {
    setCurrentBoard(name);
  };

  return (
    <CategoryBox>
      <div>
        <Divider></Divider>
        <ul>
          {basicBoards.map((board) => (
            <Link
              href={`/${board.id}`}
              key={board.id}
              className={board.name === currentBoard ? 'active' : ''}
              onClick={(e) => changeBoard(e, board.name)}
            >
              {board.name}
            </Link>
          ))}
        </ul>
        <Divider></Divider>
        <ul>
          {graduateBoards.map((board) => (
            <Link
              href={`/${board.id}`}
              key={board.id}
              className={board.name === currentBoard ? 'active' : ''}
              onClick={(e) => changeBoard(e, board.name)}
            >
              {board.name}
            </Link>
          ))}
        </ul>
        <Divider></Divider>
        <ul>
          {etcBoards.map((board) => (
            <Link
              href={`/${board.id}`}
              key={board.id}
              className={board.name === currentBoard ? 'active' : ''}
              onClick={(e) => changeBoard(e, board.name)}
            >
              {board.name}
            </Link>
          ))}
        </ul>
        <Divider></Divider>
      </div>
    </CategoryBox>
  );
}

export default BoardCategories;
