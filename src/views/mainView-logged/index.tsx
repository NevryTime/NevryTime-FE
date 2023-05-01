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
import { boardRequest } from '../../axios/BoardAxios';

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

function mainView() {
  const router = useRouter();
  const axios = useCustomAxios();
  // 로그인 한 유저의 세션 데이터
  const { data: session } = useSession();

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
    boardRequest(1, 1, 4)
      .then((res) => {
        setBoard1(res.data.contentPage);
      })
      .catch((error) => {
        console.log(error);
      });

    boardRequest(2, 1, 4)
      .then((res) => {
        setBoard2(res.data.contentPage);
      })
      .catch((error) => {
        console.log(error);
      });

    boardRequest(3, 1, 4)
      .then((res) => {
        setBoard3(res.data.contentPage);
      })
      .catch((error) => {
        console.log(error);
      });

    boardRequest(4, 1, 4)
      .then((res) => {
        setBoard4(res.data.contentPage);
      })
      .catch((error) => {
        console.log(error);
      });

    boardRequest(5, 1, 4)
      .then((res) => {
        setBoard5(res.data.contentPage);
      })
      .catch((error) => {
        console.log(error);
      });

    boardRequest(6, 1, 4)
      .then((res) => {
        setBoard6(res.data.contentPage);
      })
      .catch((error) => {
        console.log(error);
      });

    boardRequest(7, 1, 4)
      .then((res) => {
        setBoard7(res.data.contentPage);
      })
      .catch((error) => {
        console.log(error);
      });

    boardRequest(8, 1, 4)
      .then((res) => {
        setBoard8(res.data.contentPage);
      })
      .catch((error) => {
        console.log(error);
      });

    boardRequest(9, 1, 4)
      .then((res) => {
        setBoard9(res.data.contentPage);
      })
      .catch((error) => {
        console.log(error);
      });

    boardRequest(10, 1, 4)
      .then((res) => {
        setBoard10(res.data.contentPage);
      })
      .catch((error) => {
        console.log(error);
      });

    boardRequest(11, 1, 4)
      .then((res) => {
        setBoard11(res.data.contentPage);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <div>닉네임</div>
            <div>아이디</div>
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
            <div>자유게시판</div>
            {board1 &&
              board1.map((content: contentDataType) => (
                <div key={content.id}>{content.title}</div>
              ))}
          </MidContentBox>
          <MidContentBox>
            <div>비밀게시판</div>
            {board2 &&
              board2.map((content: contentDataType) => (
                <div key={content.id}>{content.title}</div>
              ))}
          </MidContentBox>
          <MidContentBox>
            <div>졸업생게시판</div>
            {board3 &&
              board3.map((content: contentDataType) => (
                <div key={content.id}>{content.title}</div>
              ))}
          </MidContentBox>
          <MidContentBox>
            <div>새내기게시판</div>
            {board4 &&
              board4.map((content: contentDataType) => (
                <div key={content.id}>{content.title}</div>
              ))}
          </MidContentBox>
          <MidContentBox>
            <div>시사 이슈</div>
            {board5 &&
              board5.map((content: contentDataType) => (
                <div key={content.id}>{content.title}</div>
              ))}
          </MidContentBox>
          <MidContentBox>
            <div>장터게시판</div>
            {board6 &&
              board6.map((content: contentDataType) => (
                <div key={content.id}>{content.title}</div>
              ))}
          </MidContentBox>
          <MidContentBox>
            <div>정보게시판</div>
            {board7 &&
              board7.map((content: contentDataType) => (
                <div key={content.id}>{content.title}</div>
              ))}
          </MidContentBox>
          <MidContentBox>
            <div>취업 진로</div>
            {board10 &&
              board10.map((content: contentDataType) => (
                <div key={content.id}>{content.title}</div>
              ))}
          </MidContentBox>
          <MidContentBox>
            <div>대학원&대학원생 게시판</div>
            {board11 &&
              board11.map((content: contentDataType) => (
                <div key={content.id}>{content.title}</div>
              ))}
          </MidContentBox>
          <MidContentBox>
            <div>홍보게시판</div>
            {board8 &&
              board8.map((content: contentDataType) => (
                <div key={content.id}>{content.title}</div>
              ))}
          </MidContentBox>
          <MidContentBox>
            <div>동아리 학회</div>
            {board9 &&
              board9.map((content: contentDataType) => (
                <div key={content.id}>{content.title}</div>
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
            <PopularContent>
              <div>제목</div>
              <div>내용</div>
              <div>
                <div>게시판</div>
                <div>
                  <FontAwesomeIcon icon={faThumbsUp} />3
                </div>
                <div>
                  <FontAwesomeIcon icon={faComment} />3
                </div>
              </div>
            </PopularContent>
            <PopularContent>
              <div>제목</div>
              <div>내용</div>
              <div>
                <div>게시판</div>
                <div>
                  <FontAwesomeIcon icon={faThumbsUp} />3
                </div>
                <div>
                  <FontAwesomeIcon icon={faComment} />3
                </div>
              </div>
            </PopularContent>
          </PopularContentBox>
          <RightContentBox>
            <div>
              <p>HOT 게시물</p>
              <p>더 보기</p>
            </div>
            <div>게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
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
