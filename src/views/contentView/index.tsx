/** 게시글 상세 내용 뷰 */
import React, { useState, useEffect } from 'react';
import moment from 'moment';

/** hooks */
import { calcWritedTime } from '@/src/hooks/calcWritedTime';

/** styles */
import {
  ContentContainer,
  ContentTitleSection,
  ContentSection,
  ContentInfo,
  ContentTitle,
  Content,
  CountStateBox,
  StateButtonBox,
  CommentInputBox,
  CommentOptions,
  CommentList,
  Comment,
  Reply,
  GoToListButton,
} from './style';
import { InputBox } from '@/src/components/InputBox';

/** components */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/src/components/Button';

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

type contentType = {
  contentData: contentDataType[];
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

function contentView({ contentData }: contentType) {
  // 게시글 작성 시간 계산
  const [writedTime, setWritedTime] = useState('');
  useEffect(() => {
    setWritedTime(calcWritedTime(contentData[0]));
  }, [contentData]);

  return (
    <ContentContainer>
      <ContentTitleSection>게시판 이름</ContentTitleSection>
      <ContentSection>
        <ContentInfo>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>
            <div>
              {contentData[0].show ? contentData[0].memberName : '익명'}
            </div>
            <div>{writedTime}</div>
          </div>
        </ContentInfo>
        <ContentTitle>{contentData[0].title}</ContentTitle>
        <Content>{contentData[0].content}</Content>
        <CountStateBox>
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
            {contentData[0].likes}
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />3
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} />3
          </div>
        </CountStateBox>
        <StateButtonBox>
          <Button
            width={60}
            height={30}
            bgColor={'#f9f9f9'}
            color={'#737373'}
            borderRadius={8}
          >
            <FontAwesomeIcon icon={faThumbsUp} /> 공감
          </Button>
          <Button
            width={60}
            height={30}
            bgColor={'#f9f9f9'}
            color={'#737373'}
            borderRadius={8}
          >
            <FontAwesomeIcon icon={faStar} /> 스크랩
          </Button>
        </StateButtonBox>
        <CommentList>
          {/* 댓글 1 */}
          <Comment>
            <div>
              <div>
                <div>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div>익명1</div>
              </div>
              <div>
                <div>대댓글</div>
                <div>공감</div>
                <div>쪽지</div>
                <div>신고</div>
              </div>
            </div>
            <div>댓글 내용</div>
            <div>댓글 쓴 시간</div>
            <Reply>
              <div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div>익명3</div>
                </div>
                <div>
                  <div>공감</div>
                  <div>쪽지</div>
                  <div>신고</div>
                </div>
              </div>
              <div>대댓글 내용</div>
              <div>대댓글 쓴 시간</div>
            </Reply>
          </Comment>
          {/* 댓글 2 */}
          <Comment>
            <div>
              <div>
                <div>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div>익명2</div>
              </div>
              <div>
                <div>대댓글</div>
                <div>공감</div>
                <div>쪽지</div>
                <div>신고</div>
              </div>
            </div>
            <div>댓글 내용</div>
            <div>댓글 쓴 시간</div>
          </Comment>
        </CommentList>
        <CommentInputBox>
          <InputBox width={780} height={40} placeholder={'댓글을 입력하세요'} />
          <CommentOptions>
            <div>
              <input type="checkbox" checked={false} /> 익명
            </div>
            <div>
              <FontAwesomeIcon icon={faPencil} />
            </div>
          </CommentOptions>
        </CommentInputBox>
      </ContentSection>
      <GoToListButton>
        <Button
          width={76}
          height={37}
          bgColor={'#ffffff'}
          color={'#c62917'}
          borderRadius={8}
        >
          <FontAwesomeIcon icon={faList} />글 목록
        </Button>
      </GoToListButton>
    </ContentContainer>
  );
}

export default contentView;
