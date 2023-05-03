import React, { useState, useEffect } from 'react';

/** components */
import CommonMyContentListLayout from '../common/commonMyContentListLayout';

/** axios */
import useCustomAxios from '@/src/hooks/useCustomAxios';

function MyScrapView() {
  const axios = useCustomAxios();
  // 내가 스크랩한 글
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    const myScarp = async () => {
      await axios
        .get(`/api/member/me/scrap`)
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

    myScarp();
  }, []);

  return (
    <CommonMyContentListLayout
      contentList={contentList}
      titleName={'내 스크랩'}
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

export default MyScrapView;
