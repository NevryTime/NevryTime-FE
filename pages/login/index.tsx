/** 로그인 화면 */
import React from 'react';
import styled from 'styled-components';
import LoginView from '../../src/views/loginView';
import Footer from '@/src/components/Footer';

const Container = styled.div`
  ${({ theme }) => theme.containers.mainContainer}
`;

const FooterSection = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

function loginPage() {
  return (
    <Container>
      <LoginView />
      <FooterSection>
        <Footer />
      </FooterSection>
    </Container>
  );
}

export default loginPage;
