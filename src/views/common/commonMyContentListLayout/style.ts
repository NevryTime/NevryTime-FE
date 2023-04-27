import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 780px;
`;

export const ContentInfo = styled.div`
  display: flex;
  margin-bottom: 10px;

  & > div {
    :nth-child(1) {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.colors.gray1};
      border-radius: 5px;
      margin-right: 5px;

      & > svg,
      img {
        color: ${({ theme }) => theme.colors.gray3};
        font-size: 12px;
      }
    }
    :nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;

      & > div {
        :nth-child(1) {
          font-size: 11px;
          font-weight: ${({ theme }) => theme.getFontWeight('SB')};
        }
        :nth-child(2) {
          padding-left: 10px;
          font-size: 11px;
          color: ${({ theme }) => theme.colors.gray3};
        }
      }
    }
  }
`;

export const ContentTitleSection = styled.div`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.getFontWeight('SB')};
  margin-top: 10px;
  margin-bottom: 10px;
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
    :nth-child(2) {
      font-weight: ${({ theme }) => theme.getFontWeight('SB')};
      font-size: 14px;
      padding-bottom: 10px;
    }
    :nth-child(3) {
      font-size: 14px;
      padding-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    :nth-child(4) {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.gray3};
      padding-right: 8px;
    }
  }
`;

export const ContentStatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin: 0 5px;
    :nth-last-child(3) {
      margin-left: 10px;
    }
    :nth-last-child(2) {
      color: ${({ theme }) => theme.colors.red};
    }
    :nth-last-child(1) {
      color:${({ theme }) => theme.colors.blue};
    }
  }
`;

export const PageSection = styled.div`
  margin-top: 20px;
`;
