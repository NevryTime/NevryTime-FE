import React from 'react';
import styled from 'styled-components';

/** components */
import MessageView from '@/src/views/messageView';
import Header from '@/src/components/Header';

const Container = styled.div`
  ${({ theme }) => theme.containers.mainContainer}
`;

function Message() {
  return (
    <Container>
      <Header />
      <MessageView />
    </Container>
  );
}

export default Message;
