import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};

  & > ul {
    width: 550px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > li {
      height: 100%;
      font-weight: ${({ theme }) => theme.getFontWeight('SB')};
      color: ${({ theme }) => theme.colors.black2};
      cursor: pointer;
      line-height: 76px;

      &.active {
        color: ${({ theme }) => theme.colors.red};
        border-bottom: 4px solid ${({ theme }) => theme.colors.red};
      }
    }
  }

  & > div {
    :nth-child(3) {
      display: flex;

      & > div {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ theme }) => theme.colors.gray1};
        border-radius: 10px;
        margin: 0 3px;
        cursor: pointer;
      }
    }
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;

  & > div {
    & > div {
      :nth-child(1) {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.red};
        font-weight: ${({ theme }) => theme.getFontWeight('B')};
        padding-bottom: 1.5px;
      }
      :nth-child(2) {
        font-size: 22px;
      }
    }
  }
`;

export const CategoryBox = styled.div`
  width: 100%;
  height: 215px;
  background: ${({ theme }) => theme.colors.light_gray1};
  color: ${({ theme }) => theme.colors.black2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  padding: 15px;

  & > div {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    & > ul {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      padding: 0 10px;
      :nth-child(2) {
        width: 30%;
      }
      :nth-child(4) {
        width: 15%;
      }
      :nth-child(6) {
        width: 45%;
      }

      & > li {
        width: 130px;
        font-size: 13px;
        padding: 5px 0;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;

        :hover {
          color: ${({ theme }) => theme.colors.red};
        }

        &.active {
          color: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }
`;

export const Divider = styled.div`
  border: 0.5px solid ${({ theme }) => theme.colors.gray1};
`;
