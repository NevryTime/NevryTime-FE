import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.white};
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

      & > a {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ theme }) => theme.colors.gray1};
        border-radius: 10px;
        margin: 0 3px;
        cursor: pointer;

        & > svg,
        img {
          width: 20px;
        }
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
