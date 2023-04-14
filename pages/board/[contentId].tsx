import React from 'react';
import { useRouter } from 'next/router';

function contentPage() {
  const router = useRouter();
  const { contentId } = router.query;
  return <div>각 게시판에 있는 게시글의 상세 페이지 {contentId}</div>;
}

export default contentPage;
