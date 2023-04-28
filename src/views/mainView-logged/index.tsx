/** 네브리타임 접속시 보이는 첫 화면 뷰(로그인 한 경우) */
import React from 'react';
import { signOut } from 'next-auth/react';

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

function mainView() {
  const router = useRouter();
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
              >
                내정보
              </Button>
              <Button
                width={67}
                height={27}
                bgColor={'#f2f2f2'}
                color={'#737373'}
                borderRadius={3}
                onClick={() => signOut()}
              >
                로그아웃
              </Button>
            </div>
          </MyInfoBox>
          <MyContentBox>
            <div>
              <FontAwesomeIcon icon={faList} />
              내가 쓴 글
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              댓글 단 글
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} />내 스크랩
            </div>
          </MyContentBox>
        </LeftSection>

        <MidSection>
          <MidContentBox>
            <div>자유게시판</div>
            <div>게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
          </MidContentBox>
          <MidContentBox>
            <div>비밀게시판</div>
            <div>게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
          </MidContentBox>
          <MidContentBox>
            <div>졸업생게시판</div>
            <div>게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
          </MidContentBox>
          <MidContentBox>
            <div>새내기게시판</div>
            <div>게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
          </MidContentBox>
          <MidContentBox>
            <div>시사 이슈</div>
            <div>게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
          </MidContentBox>
          <MidContentBox>
            <div>장터게시판</div>
            <div>게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
          </MidContentBox>
          <MidContentBox>
            <div>정보게시판</div>
            <div>게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
          </MidContentBox>
          <MidContentBox>
            <div>취업 진로</div>
            <div>게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
          </MidContentBox>
          <MidContentBox>
            <div>대학원&대학원생 게시판</div>
            <div>게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
          </MidContentBox>
          <MidContentBox>
            <div>홍보게시판</div>
            <div>게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
          </MidContentBox>
          <MidContentBox>
            <div>동아리 학회</div>
            <div>게시글1</div>
            <div>게시글2</div>
            <div>게시글3</div>
            <div>게시글4</div>
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
