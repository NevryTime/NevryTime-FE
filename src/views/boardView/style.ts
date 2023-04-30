import styled from 'styled-components';

export const BoardContainer = styled.div`
  width: 780px;
`;

export const BoardTitleSection = styled.div`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.getFontWeight('SB')};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const WriteSection = styled.div`
  margin-bottom: 10px;

  & > input {
    background: ${({ theme }) => theme.colors.light_gray1};
    border: 2px solid ${({ theme }) => theme.colors.gray1};
    ::placeholder {
      color: ${({ theme }) => theme.colors.gray3};
    }
  }
`;

export const ContentListSection = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray1};
`;

export const Content = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  padding: 15px;
  cursor: pointer;

  :nth-last-child(1) {
    border-bottom: none;
  }

  & > div {
    :nth-child(1) {
      font-size: 14px;
      padding-bottom: 10px;
    }
    :nth-child(2) {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.gray3};
      padding-bottom: 10px;
      overflow: hidden;
    }
    :nth-child(3) {
      display: flex;

      & > div {
        :nth-child(1) {
          font-size: 12px;
          color: ${({ theme }) => theme.colors.gray3};
          padding-right: 8px;
        }
        :nth-child(2) {
          font-size: 12px;
          font-weight: ${({ theme }) => theme.getFontWeight('SB')};
          color: ${({ theme }) => theme.colors.black3};
        }
      }
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  font-size: 12px;

  & > div {
    margin: 0 5px;
    :nth-last-child(3) {
      color: ${({ theme }) => theme.colors.gray3};
      margin-left: 10px;
    }
    :nth-last-child(2) {
      color: ${({ theme }) => theme.colors.red};
    }
    :nth-last-child(1) {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const PageSection = styled.div`
  margin-top: 20px;
`;
