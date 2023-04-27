import styled from 'styled-components';

export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const MyInfoBox = styled.div`
  width: 480px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 12px;
  padding: 24px;

  & > div {
    :nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      & > div {
        font-size: 22px;
        font-weight: ${({ theme }) => theme.getFontWeight('SB')};
      }

      & > button {
        font-size: 13px;
        font-weight: ${({ theme }) => theme.getFontWeight('SB')};
      }
    }
    :nth-child(2) {
      display: flex;
      align-items: center;

      & > div {
        :nth-child(1) {
          width: 56px;
          height: 56px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 13px;
          border: 1px solid ${({ theme }) => theme.colors.gray1};
          margin-right: 10px;

          & > svg,
          img {
            font-size: 30px;
            color: ${({ theme }) => theme.colors.gray3};
          }
        }
        :nth-child(2) {
          & > div {
            padding: 1.5px 0;

            :nth-child(1) {
              font-size: 14px;
              font-weight: ${({ theme }) => theme.getFontWeight('SB')};
            }
            :nth-child(2),
            :nth-child(3) {
              font-size: 12px;
              color: ${({ theme }) => theme.colors.gray3};
            }
          }
        }
      }
    }
  }
`;

export const MyAccountBox = styled.div`
  width: 480px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 12px;
  padding: 24px;
  margin: 10px 0 20px 0;

  & > div {
    :nth-child(1) {
      font-size: 22px;
      font-weight: ${({ theme }) => theme.getFontWeight('SB')};
      margin-bottom: 20px;
    }
    :nth-child(3) {
      margin: 20px 0;
    }
  }
`;
