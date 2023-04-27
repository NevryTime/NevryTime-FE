import React, { ReactNode } from 'react';
import styled from 'styled-components';

import {
  RightSection,
  RightContentBox,
  PopularContentBox,
  PopularContent,
  BestContent,
} from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

function CommonRightLayout() {
  return (
    <>
      <RightSection>
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
    </>
  );
  // return <div>{children}공통 컴포넌트 RightSection</div>;
}

export default CommonRightLayout;
