import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 780px;
`;

export const ContentTitleSection = styled.div`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.getFontWeight('SB')};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContentSection = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-bottom: none;
  padding-top: 15px;
`;

export const ContentInfo = styled.div`
  display: flex;
  padding: 0 15px;
  margin-bottom: 15px;

  & > div {
    :nth-child(1) {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.colors.gray1};
      border-radius: 13px;
      margin-right: 10px;

      & > svg,
      img {
        color: ${({ theme }) => theme.colors.black3};
        width: 20px;
      }
    }
    :nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      & > div {
        :nth-child(1) {
          font-size: 13px;
          font-weight: ${({ theme }) => theme.getFontWeight('SB')};
        }
        :nth-child(2) {
          padding-top: 10px;
          font-size: 11px;
          color: ${({ theme }) => theme.colors.gray3};
        }
      }
    }
  }
`;

export const ContentTitle = styled.div`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.getFontWeight('SB')};
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Content = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
  padding: 0 15px;
  line-height: 1.3;
`;

export const CountStateBox = styled.div`
  display: flex;
  margin-bottom: 15px;
  padding: 0 15px;

  & > div {
    margin: 0 5px;
    font-size: 11px;

    & > svg,
    img {
      margin-right: 3px;
    }

    :nth-child(1) {
      color: ${({ theme }) => theme.colors.red};
    }
    :nth-child(2) {
      color: ${({ theme }) => theme.colors.blue};
    }
    :nth-child(3) {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const StateButtonBox = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;

  & > button {
    font-size: 11px;
    font-weight: ${({ theme }) => theme.getFontWeight('SB')};
    margin-right: 5px;
  }
`;

export const CommentInputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & > input {
    width: 100%;
    border-left: none;
    border-right: none;
    background: ${({ theme }) => theme.colors.light_gray1};
  }
`;

export const CommentOptions = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;

  & > div {
    :nth-child(1) {
      display: flex;
      align-items: center;
      font-size: 11px;
      font-weight: ${({ theme }) => theme.getFontWeight('SB')};
      color: ${({ theme }) => theme.colors.gray3};
    }
    :nth-child(2) {
      width: 40px;
      height: 40px;
      background: ${({ theme }) => theme.colors.red};
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5px;
      cursor: pointer;

      & > svg,
      img {
        width: 16px;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const CommentList = styled.div``;

export const Comment = styled.div`
  padding: 15px 15px 7px 15px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray1};

  & > div {
    :nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > div {
        :nth-child(1) {
          display: flex;

          & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            :nth-child(1) {
              width: 20px;
              height: 20px;
              border: 1px solid ${({ theme }) => theme.colors.gray1};
              border-radius: 7px;
              margin-right: 5px;
              display: flex;
              justify-content: center;
              align-items: center;

              & > svg,
              img {
                color: ${({ theme }) => theme.colors.black3};
                width: 10px;
              }
            }
            :nth-child(2) {
              font-size: 12px;
              font-weight: ${({ theme }) => theme.getFontWeight('SB')};
            }
          }
        }
        :nth-child(2) {
          display: flex;
          & > div {
            font-size: 12px;
            color: ${({ theme }) => theme.colors.gray3};
            padding: 0 5px;
            cursor: pointer;
          }
        }
      }
    }
    :nth-child(2) {
      margin: 10px 0;
      font-size: 14px;
    }
    :nth-child(3) {
      margin-bottom: 8px;
      font-size: 11px;
      color: ${({ theme }) => theme.colors.gray3};
    }
  }
`;

export const Reply = styled.div`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  background: ${({ theme }) => theme.colors.light_gray1};

  & > div {
    :nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > div {
        :nth-child(1) {
          display: flex;

          & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            :nth-child(1) {
              width: 20px;
              height: 20px;
              border: 1px solid ${({ theme }) => theme.colors.gray1};
              border-radius: 7px;
              margin-right: 5px;
              display: flex;
              justify-content: center;
              align-items: center;

              & > svg,
              img {
                color: ${({ theme }) => theme.colors.black3};
                width: 10px;
              }
            }
            :nth-child(2) {
              font-size: 12px;
              font-weight: ${({ theme }) => theme.getFontWeight('SB')};
            }
          }
        }
        :nth-child(2) {
          display: flex;
          & > div {
            font-size: 12px;
            color: ${({ theme }) => theme.colors.gray3};
            padding: 0 5px;
            cursor: pointer;
          }
        }
      }
    }
    :nth-child(2) {
      margin: 10px 0;
      font-size: 14px;
    }
    :nth-child(3) {
      font-size: 11px;
      color: ${({ theme }) => theme.colors.gray3};
    }
  }
`;

export const GoToListButton = styled.div`
  margin-top: 10px;
  & > button {
    font-size: 13px;
    border: 1px solid ${({ theme }) => theme.colors.red};

    & > svg,
    img {
      margin-right: 5px;
    }
  }
`;
