import styled from 'styled-components';

export const RightSection = styled.div`
  width: 325px;

  input {
    margin-top: 5px;
  }
`;

export const RightContentBox = styled.div`
  height: 190px;
  margin: 10px 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  background: ${({ theme }) => theme.colors.light_gray1};
  display: flex;
  flex-direction: column;

  & > div {
    height: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
    padding: 10px;
    font-size: 13px;
    cursor: pointer;

    :nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > p {
        :nth-child(1) {
          font-size: 15px;
          color: #3744a5;
          font-weight: ${({ theme }) => theme.getFontWeight('SB')};
        }
        :nth-child(2) {
          font-size: 12px;
          color: ${({ theme }) => theme.colors.black3};
        }
      }
    }

    :nth-last-child(1) {
      border-bottom: none;
    }
  }
`;

export const PopularContentBox = styled.div`
  margin: 10px 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  background: ${({ theme }) => theme.colors.light_gray1};

  & > div {
    padding: 10px;

    :nth-child(1) {
      color: #3744a5;
      font-weight: ${({ theme }) => theme.getFontWeight('SB')};
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
    }
  }
`;

export const PopularContent = styled.div`
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  background: ${({ theme }) => theme.colors.light_gray1};

  :nth-last-child(1) {
    border-bottom: none;
  }

  & > div {
    :nth-child(1) {
      font-size: 15px;
      font-weight: ${({ theme }) => theme.getFontWeight('SB')};
    }
    :nth-child(2) {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.black3};
      padding: 10px 0;
    }
    :nth-child(3) {
      display: flex;
      & > div {
        :nth-child(1) {
          font-size: 12px;
          color: ${({ theme }) => theme.colors.black3};
          font-weight: ${({ theme }) => theme.getFontWeight('SB')};
        }
        :nth-child(2) {
          font-size: 12px;
          color: ${({ theme }) => theme.colors.red};
          padding: 0 10px;

          & > svg,
          img {
            width: 10px;
            color: ${({ theme }) => theme.colors.red};
            margin-right: 3px;
          }
        }
        :nth-child(3) {
          font-size: 12px;
          color:${({ theme }) => theme.colors.blue};

          & > svg,
          img {
            width: 10px;
            color:${({ theme }) => theme.colors.blue};
            margin-right: 3px;
          }
        }
      }
    }
  }
`;

export const BestContent = styled.div`
  margin: 10px 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  padding: 10px;
  background: ${({ theme }) => theme.colors.light_gray1};

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > p {
      :nth-child(1) {
        font-size: 15px;
        color: #3744a5;
        font-weight: ${({ theme }) => theme.getFontWeight('SB')};
        cursor: pointer;
      }
      :nth-child(2) {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.black3};
        cursor: pointer;
      }
    }
  }
`;
