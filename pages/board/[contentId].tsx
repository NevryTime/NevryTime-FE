import React from 'react';
import { useRouter } from 'next/router';

import Header from '@/src/components/Header';
import CommonLayout from '@/src/views/commonLayout';

function Content() {
  const router = useRouter();
  const { contentId } = router.query;

  return (
    <CommonLayout>
      <Header />각 게시판에 있는 게시글의 상세 페이지 {contentId}
    </CommonLayout>
  );
}

export default Content;
