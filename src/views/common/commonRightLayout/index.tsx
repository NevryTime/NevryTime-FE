import React, { useState, useEffect } from 'react';

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

/** axios */
import useCustomAxios from '@/src/hooks/useCustomAxios';

function CommonRightLayout() {
  const axios = useCustomAxios();

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

  return (
    <>
      <RightSection>
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
                    <FontAwesomeIcon icon={faComment} /> {content.commentCount}
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
    </>
  );
  // return <div>{children}공통 컴포넌트 RightSection</div>;
}

export default CommonRightLayout;
