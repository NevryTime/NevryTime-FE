import React, { useState, useEffect } from 'react';

/** components */
import CommonMyContentListLayout from '../common/commonMyContentListLayout';

/** axios */
import useCustomAxios from '@/src/hooks/useCustomAxios';

function MyCommentArticleView() {
  const axios = useCustomAxios();
  // 내가 댓글 단 게시글
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    const myCommentArticle = async () => {
      await axios
        .get(`/api/member/me/comment`)
        .then((res) => {
          console.log(res.data);
          setContentList(res.data.contentList);
        })
        .catch((error) => {
          if (error.response.data.message) {
            setContentList([]);
          }
          console.log(error.response.data.message);
        });
    };

    myCommentArticle();
  }, []);

  return (
    <CommonMyContentListLayout
      contentList={contentList}
      titleName={'댓글 단 글'}
      id={0}
      boardName={''}
      nickName={''}
      title={''}
      content={''}
      likes={0}
      createAt={''}
      image={false}
      show={false}
    />
  );
}

export default MyCommentArticleView;
