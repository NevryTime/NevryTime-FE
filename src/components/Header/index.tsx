import React, { useState, useEffect } from 'react';
import Image from 'next/image';

/** styles */
import {
  HeaderContainer,
  HeaderBox,
  LogoBox,
  CategoryBox,
  Divider,
} from './style';

/** assets */
import NevryTimeLogo2 from '../../assets/icons/nevrytime-logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

/** axios */
import { getBoardList } from '@/src/axios/BoardListAxios';

/** types */
interface BoardType {
  id: number;
  boardName: string;
  url: string;
}

const HeaderNavMenu = [
  {
    id: 1,
    name: '게시판',
    url: '',
  },
  {
    id: 2,
    name: '시간표',
    url: '',
  },
  {
    id: 3,
    name: '강의실',
    url: '',
  },
  {
    id: 4,
    name: '학점계산기',
    url: '',
  },
  {
    id: 5,
    name: '친구',
    url: '',
  },
  {
    id: 6,
    name: '책방',
    url: '',
  },
  {
    id: 7,
    name: '캠퍼스픽',
    url: '',
  },
];

function Header() {
  // 현재 위치한 탭
  const [currentTap, setCurrentTap] = useState('게시판');
  const changeTap = (e: React.MouseEvent, tapName: string) => {
    setCurrentTap(tapName);
  };

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
    <HeaderContainer>
      <HeaderBox>
        <LogoBox>
          <Image src={NevryTimeLogo2} alt="" width={60} height={60} />
          <div>
            <div>에브리타임</div>
            <div>순천향대</div>
          </div>
        </LogoBox>
        <ul>
          {HeaderNavMenu.map((menu) => (
            <li
              key={menu.id}
              className={menu.name === currentTap ? 'active' : ''}
              onClick={(e) => changeTap(e, menu.name)}
            >
              {menu.name}
            </li>
          ))}
        </ul>
        <div>
          <div>
            <FontAwesomeIcon icon={faMessage} />
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </HeaderBox>
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
    </HeaderContainer>
  );
}

export default Header;
