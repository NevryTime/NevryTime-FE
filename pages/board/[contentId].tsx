import React from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';

import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const FooterSection = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

function contentPage() {
  const router = useRouter();
  const { contentId } = router.query;
  return (
    <div>
      <Header />각 게시판에 있는 게시글의 상세 페이지 {contentId}
      <FooterSection>
        <Footer />
      </FooterSection>
    </div>
  );
}

export default contentPage;
