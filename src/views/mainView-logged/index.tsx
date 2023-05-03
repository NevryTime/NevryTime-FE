/** 네브리타임 접속시 보이는 첫 화면 뷰(로그인 한 경우) */
import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

import {
  Main,
  MainViewContainer,
  LeftSection,
  MidSection,
  RightSection,
  MyInfoBox,
  MyContentBox,
  MidContentBox,
  RightContentBox,
  PopularContentBox,
  PopularContent,
  BestContent,
} from './style';

/** components */
import SearchBar from '@/src/components/SearchBar';
import { Button } from '@/src/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/router';

/** axios */
import useCustomAxios from '../../hooks/useCustomAxios';

/** store */
import { useRecoilState } from 'recoil';
import { userInfoAtom } from '@/src/store/UserInfoStore';

/** types */
type boardContentType = {
  boardId: number;
  contentId: number;
  title: string;
};

function mainView() {
  const router = useRouter();
  const axios = useCustomAxios();
  // 로그인 한 유저의 세션 데이터
  const { data: session } = useSession();

  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  useEffect(() => {
    const userInfoRequest = async () => {
      await axios
        .get(`/api/member/me`)
        .then((res) => {
          console.log(res.data);
          setUserInfo({ name: res.data.name, nickName: res.data.nickName });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    userInfoRequest();
  }, []);

  const [allBoardContents, setAllBoardContents] = useState([]);
  const [board1, setBoard1] = useState([]); // 자유
  const [board2, setBoard2] = useState([]); // 비밀
  const [board3, setBoard3] = useState([]); // 졸업
  const [board4, setBoard4] = useState([]); // 새내기
  const [board5, setBoard5] = useState([]); // 시사
  const [board6, setBoard6] = useState([]); // 장터
  const [board7, setBoard7] = useState([]); // 정보
  const [board8, setBoard8] = useState([]); // 홍보
  const [board9, setBoard9] = useState([]); // 동아리
  const [board10, setBoard10] = useState([]); // 취업
  const [board11, setBoard11] = useState([]); // 대학원

  // 게시판 11개의 상위 게시글 4개씩 가져오기
  useEffect(() => {
    const boardMainContent = async () => {
      await axios
        .get(`/api/content/main`)
        .then((res) => {
          console.log(res.data);
          setAllBoardContents(res.data.contents);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    boardMainContent();
  }, []);

  useEffect(() => {
    const newBoard1: boardContentType[] = [];
    const newBoard2: boardContentType[] = [];
    const newBoard3: boardContentType[] = [];
    const newBoard4: boardContentType[] = [];
    const newBoard5: boardContentType[] = [];
    const newBoard6: boardContentType[] = [];
    const newBoard7: boardContentType[] = [];
    const newBoard8: boardContentType[] = [];
    const newBoard9: boardContentType[] = [];
    const newBoard10: boardContentType[] = [];
    const newBoard11: boardContentType[] = [];

    if (allBoardContents) {
      allBoardContents.forEach((content) => {
        if (content.boardId === 1) {
          newBoard1.push(content);
        } else if (content.boardId === 2) {
          newBoard2.push(content);
        } else if (content.boardId === 3) {
          newBoard3.push(content);
        } else if (content.boardId === 4) {
          newBoard4.push(content);
        } else if (content.boardId === 5) {
          newBoard5.push(content);
        } else if (content.boardId === 6) {
          newBoard6.push(content);
        } else if (content.boardId === 7) {
          newBoard7.push(content);
        } else if (content.boardId === 8) {
          newBoard8.push(content);
        } else if (content.boardId === 9) {
          newBoard9.push(content);
        } else if (content.boardId === 10) {
          newBoard10.push(content);
        } else if (content.boardId === 11) {
          newBoard11.push(content);
        }

        setBoard1(newBoard1);
        setBoard2(newBoard2);
        setBoard3(newBoard3);
        setBoard4(newBoard4);
        setBoard5(newBoard5);
        setBoard6(newBoard6);
        setBoard7(newBoard7);
        setBoard8(newBoard8);
        setBoard9(newBoard9);
        setBoard10(newBoard10);
        setBoard11(newBoard11);
      });
    }
  }, [allBoardContents]);

  // 실시간 인기글
  const [popularContents, setPopularContents] = useState([]);

  useEffect(() => {
    const popularContents = async () => {
      await axios
        .get(`/api/content/popular`)
        .then((res) => {
          console.log(res.data);
          setPopularContents(res.data.contentList);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    popularContents();
  }, []);

  // HOT 게시물
  const [hotContents, setHotContents] = useState([]);

  useEffect(() => {
    const hotContents = async () => {
      await axios
        .get(`/api/content/popular`)
        .then((res) => {
          console.log(res.data);
          setHotContents(res.data.contentList);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    hotContents();
  }, []);

  // 로그아웃 요청
  const onClickLogout = async () => {
    await axios
      .post('/auth/logout/')
      .then((res) => {
        alert('로그아웃 되었습니다.');
        signOut({ callbackUrl: '/login' });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 마이페이지로 이동
  const onClickMyInfo = () => {
    router.push('/my-page');
  };

  return (
    <Main>
      <MainViewContainer>
        <LeftSection>
          <MyInfoBox>
            <FontAwesomeIcon icon={faUser} />
            <div>{userInfo && userInfo.name}</div>
            <div>{userInfo && userInfo.nickName}</div>
            <div>
              <Button
                width={67}
                height={27}
                bgColor={'#f2f2f2'}
                color={'#737373'}
                borderRadius={3}
                onClick={() => {
                  onClickMyInfo();
                }}
              >
                내정보
              </Button>
              <Button
                width={67}
                height={27}
                bgColor={'#f2f2f2'}
                color={'#737373'}
                borderRadius={3}
                onClick={() => onClickLogout()}
              >
                로그아웃
              </Button>
            </div>
          </MyInfoBox>
          <MyContentBox>
            <Link href="/my-article">
              <FontAwesomeIcon icon={faList} />
              내가 쓴 글
            </Link>
            <Link href="/my-comment-article">
              <FontAwesomeIcon icon={faComment} />
              댓글 단 글
            </Link>
            <Link href="/my-scrap">
              <FontAwesomeIcon icon={faStar} />내 스크랩
            </Link>
          </MyContentBox>
        </LeftSection>

        <MidSection>
          <MidContentBox>
            <Link href={`/1`}>자유게시판</Link>
            {board1 &&
              board1.map((content: boardContentType) => (
                <Link
                  href={`/${content.boardId}/${content.contentId}/`}
                  key={content.contentId}
                >
                  {content.title}
                </Link>
              ))}
          </MidContentBox>
          <MidContentBox>
            <Link href={`/2`}>비밀게시판</Link>
            {board2 &&
              board2.map((content: boardContentType) => (
                <Link
                  href={`/${content.boardId}/${content.contentId}/`}
                  key={content.contentId}
                >
                  {content.title}
                </Link>
              ))}
          </MidContentBox>
          <MidContentBox>
            <Link href={`/3`}>졸업생게시판</Link>
            {board3 &&
              board3.map((content: boardContentType) => (
                <Link
                  href={`/${content.boardId}/${content.contentId}/`}
                  key={content.contentId}
                >
                  {content.title}
                </Link>
              ))}
          </MidContentBox>
          <MidContentBox>
            <Link href={`/4`}>새내기게시판</Link>
            {board4 &&
              board4.map((content: boardContentType) => (
                <Link
                  href={`/${content.boardId}/${content.contentId}/`}
                  key={content.contentId}
                >
                  {content.title}
                </Link>
              ))}
          </MidContentBox>
          <MidContentBox>
            <Link href={`/5`}>시사 이슈</Link>
            {board5 &&
              board5.map((content: boardContentType) => (
                <Link
                  href={`/${content.boardId}/${content.contentId}/`}
                  key={content.contentId}
                >
                  {content.title}
                </Link>
              ))}
          </MidContentBox>
          <MidContentBox>
            <Link href={`/6`}>장터게시판</Link>
            {board6 &&
              board6.map((content: boardContentType) => (
                <Link
                  href={`/${content.boardId}/${content.contentId}/`}
                  key={content.contentId}
                >
                  {content.title}
                </Link>
              ))}
          </MidContentBox>
          <MidContentBox>
            <Link href={`/7`}>정보게시판</Link>
            {board7 &&
              board7.map((content: boardContentType) => (
                <Link
                  href={`/${content.boardId}/${content.contentId}/`}
                  key={content.contentId}
                >
                  {content.title}
                </Link>
              ))}
          </MidContentBox>
          <MidContentBox>
            <Link href={`/10`}>취업 진로</Link>
            {board10 &&
              board10.map((content: boardContentType) => (
                <Link
                  href={`/${content.boardId}/${content.contentId}/`}
                  key={content.contentId}
                >
                  {content.title}
                </Link>
              ))}
          </MidContentBox>
          <MidContentBox>
            <Link href={`/11`}>대학원&대학원생 게시판</Link>
            {board11 &&
              board11.map((content: boardContentType) => (
                <Link
                  href={`/${content.boardId}/${content.contentId}/`}
                  key={content.contentId}
                >
                  {content.title}
                </Link>
              ))}
          </MidContentBox>
          <MidContentBox>
            <Link href={`/8`}>홍보게시판</Link>
            {board8 &&
              board8.map((content: boardContentType) => (
                <Link
                  href={`/${content.boardId}/${content.contentId}/`}
                  key={content.contentId}
                >
                  {content.title}
                </Link>
              ))}
          </MidContentBox>
          <MidContentBox>
            <Link href={`/9`}>동아리 학회</Link>
            {board9 &&
              board9.map((content: boardContentType) => (
                <Link
                  href={`/${content.boardId}/${content.contentId}/`}
                  key={content.contentId}
                >
                  {content.title}
                </Link>
              ))}
          </MidContentBox>
        </MidSection>

        <RightSection>
          <SearchBar
            width={315}
            height={40}
            placeholder={'전체 게시판의 글을 검색하세요!'}
          />
          <PopularContentBox>
            <div>실시간 인기 글</div>
            {popularContents &&
              popularContents.map((content) => (
                <PopularContent key={content.id}>
                  <div>{content.title}</div>
                  <div>{content.content}</div>
                  <div>
                    <div>{content.boardName}</div>
                    <div>
                      <FontAwesomeIcon icon={faThumbsUp} /> {content.likes}
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faComment} />{' '}
                      {content.commentCount}
                    </div>
                  </div>
                </PopularContent>
              ))}
          </PopularContentBox>
          <RightContentBox>
            <div>
              <p>HOT 게시물</p>
              <p>더 보기</p>
            </div>
            {hotContents &&
              hotContents.map((content) => (
                <div key={content.id}>{content.title}</div>
              ))}
          </RightContentBox>
          <BestContent>
            <div>
              <p>BEST 게시물</p>
              <p>더 보기</p>
            </div>
          </BestContent>
        </RightSection>
      </MainViewContainer>
    </Main>
  );
}

export default mainView;
