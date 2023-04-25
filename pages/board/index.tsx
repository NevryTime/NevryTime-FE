import React from 'react';
import styled from 'styled-components';

import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const FooterSection = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

function boardPage() {
  return (
    <div>
      <Header />각 게시판 페이지
      <FooterSection>
        <Footer />
      </FooterSection>
    </div>
  );
}

export default boardPage;
