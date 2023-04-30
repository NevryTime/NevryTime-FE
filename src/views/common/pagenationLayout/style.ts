import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 780px;

  display: flex;
  justify-content: space-between;

  & > button {
    font-size: 14px;
    font-weight: ${({ theme }) => theme.getFontWeight('SB')};
    border: 1px solid ${({ theme }) => theme.colors.red};
  }
`;
