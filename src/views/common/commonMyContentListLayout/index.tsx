import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/** hooks */
import { calcWritedTime } from '@/src/hooks/calcWritedTime';

/** styles */
import {
  ContentContainer,
  ContentInfo,
  ContentTitleSection,
  ContentListSection,
  Content,
  ContentStatusBox,
  Status,
  PageSection,
} from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import Pagenation from '../pagenationLayout';

/** types */
type contentDataType = {
  id: number;
  boardName: string;
  nickName: string;
  title: string;
  content: string;
  likes: number;
  createAt: string;
  image: boolean;
  show: boolean;
};

type contentListType = {
  contentList: contentDataType[];
  titleName: string;
  id: number;
  boardName: string;
  nickName: string;
  title: string;
  content: string;
  likes: number;
  createAt: string;
  image: boolean;
  show: boolean;
};

function CommonMyContentListLayout({
  contentList,
  titleName,
}: contentListType) {
  // 게시글 작성 시간 계산
  const [writedTime, setWritedTime] = useState(
    Array(contentList.length).fill(''),
  );

  useEffect(() => {
    const times = [...writedTime];

    for (let i = 0; i < contentList.length; i++) {
      times[i] = calcWritedTime(contentList[i]);
    }

    setWritedTime(times);
  }, [contentList]);

  const router = useRouter();

  return (
    <>
      {router.pathname === '/my-scrap' ? (
        <ContentContainer>
          <ContentTitleSection>{titleName}</ContentTitleSection>
          <ContentListSection>
            {contentList && contentList.length > 0 ? (
              <>
                {contentList.map((content, i) => (
                  <Content key={content.id}>
                    <ContentInfo>
                      <div>
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <div>
                        <div>{content.show ? content.nickName : '익명'}</div>
                        <div>{writedTime[i]}</div>
                      </div>
                    </ContentInfo>
                    <div>{content.title}</div>
                    <div>{content.content}</div>
                    <ContentStatusBox>
                      <div>{content.boardName}</div>
                      <Status>
                        <div>스크랩 취소</div>
                        <div>
                          <FontAwesomeIcon icon={faImage} /> 1
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faThumbsUp} /> 3
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faComment} /> 3
                        </div>
                      </Status>
                    </ContentStatusBox>
                  </Content>
                ))}
              </>
            ) : (
              <Content>스크랩한 글이 없습니다.</Content>
            )}
          </ContentListSection>
          {/* <PageSection>
            <Pagenation />
          </PageSection> */}
        </ContentContainer>
      ) : (
        <ContentContainer>
          <ContentTitleSection>{titleName}</ContentTitleSection>
          <ContentListSection>
            {contentList && contentList.length > 0 ? (
              <>
                {contentList.map((content, i) => (
                  <Content key={content.id}>
                    <ContentInfo>
                      <div>
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <div>
                        <div>{content.show ? content.nickName : '익명'}</div>
                        <div>{writedTime[i]}</div>
                      </div>
                    </ContentInfo>
                    <div>{content.title}</div>
                    <div>{content.content}</div>
                    <ContentStatusBox>
                      <div>{content.boardName}</div>
                      <Status>
                        <div>
                          <FontAwesomeIcon icon={faImage} /> 1
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faThumbsUp} /> 3
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faComment} /> 3
                        </div>
                      </Status>
                    </ContentStatusBox>
                  </Content>
                ))}
              </>
            ) : (
              <Content>작성한 글이 없습니다.</Content>
            )}
          </ContentListSection>
          {/* <PageSection>
            <Pagenation />
          </PageSection> */}
        </ContentContainer>
      )}
    </>
  );
}

export default CommonMyContentListLayout;
