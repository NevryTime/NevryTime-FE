/** 게시글 상세 내용 뷰 */
import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
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

/** store */
/** store */
import { contentAtom } from '@/src/store/ContentStore';

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

// 댓글 타입
type commentListType = {
  commentContent: string;
  contentId: number;
  createAt: string;
  deleted: boolean;
  depth: number;
  id: number;
  memberId: number;
  parentId: number;
  nickName: string;
};

type contentType = {
  contentData: contentDataType;
  commentList: commentListType[];
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

function contentView({ contentData, commentList }: contentType) {
  // 해당 게시판 정보 전역상태 가져오기
  const contentValue = useRecoilValue(contentAtom);

  // 대댓글 출력을 위한 부모 댓글 리스트
  const [parentCommentList, setParentCommentList] = useState([]);
  // 자식 댓글 리스트
  const [allChildCommentList, setAllChildCommentList] = useState([]);
  const [childCommentList, setChildCommentList] = useState(
    Array(parentCommentList.length).fill([]),
  );

  useEffect(() => {
    const parentComment: commentListType[] = [];
    const childComment: commentListType[] = [];
    commentList.forEach((comment) => {
      if (comment.depth === 0) {
        parentComment.push(comment);
      } else if (comment.depth === 1) {
        childComment.push(comment);
      }
    });

    setParentCommentList(parentComment);
    setAllChildCommentList(childComment);
  }, [contentData, commentList]);

  useEffect(() => {
    const childComment = Array.from(new Array(parentCommentList.length), () =>
      new Array(0).fill([]),
    );
    allChildCommentList.forEach((comment) => {
      childComment[comment.parentId].push(comment);
    });

    setChildCommentList(childComment);
  }, [allChildCommentList]);

  // 게시글 작성 시간 계산
  const [writedTime, setWritedTime] = useState('');
  useEffect(() => {
    if (contentData) {
      setWritedTime(calcWritedTime(contentData));
    }
  }, [contentData]);

  return (
    <ContentContainer>
      <ContentTitleSection>
        {contentData && contentData.boardName}
      </ContentTitleSection>
      <ContentSection>
        <ContentInfo>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>
            {/* <div>{contentData.show ? contentData.nickName : '익명'}</div> */}
            <div>{contentData && contentData.nickName}</div>
            <div>{writedTime}</div>
          </div>
        </ContentInfo>
        <ContentTitle>{contentData && contentData.title}</ContentTitle>
        <Content>
          {contentData &&
            contentData.content.split('\n').map((line, i) => {
              return (
                <span key={i}>
                  {line}
                  <br />
                </span>
              );
            })}
        </Content>
        <CountStateBox>
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
            {contentData && contentData.likes}
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />{' '}
            {contentData && contentData.commentCount}
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} />{' '}
            {contentData && contentData.scraps}
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
        {parentCommentList && parentCommentList.length > 0 ? (
          <CommentList>
            {parentCommentList.map((comment, parentID) => (
              <Comment key={comment.id}>
                <div>
                  <div>
                    <div>
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div>{comment.nickName}</div>
                  </div>
                  <div>
                    <div>대댓글</div>
                    <div>공감</div>
                    <div>쪽지</div>
                    <div>신고</div>
                  </div>
                </div>
                <div>{comment.commentContent}</div>
                <div>{comment.createAt?.slice(0, 10)}</div>
                {childCommentList[parentID + 1] &&
                childCommentList[parentID + 1].length > 0 ? (
                  <>
                    {childCommentList[parentID + 1].map(
                      (comment: commentListType) => (
                        <Reply key={comment.id}>
                          <div>
                            <div>
                              <div>
                                <FontAwesomeIcon icon={faUser} />
                              </div>
                              <div>{comment.nickName}</div>
                            </div>
                            <div>
                              <div>공감</div>
                              <div>쪽지</div>
                              <div>신고</div>
                            </div>
                          </div>
                          <div>{comment.commentContent}</div>
                          <div>{comment.createAt?.slice(0, 10)}</div>
                        </Reply>
                      ),
                    )}
                  </>
                ) : (
                  ''
                )}
              </Comment>
            ))}
          </CommentList>
        ) : (
          ''
        )}
        <CommentInputBox>
          <InputBox width={780} height={40} placeholder={'댓글을 입력하세요'} />
          <CommentOptions>
            <div>
              <input type="checkbox" defaultChecked={false} /> 익명
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
