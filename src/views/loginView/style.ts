import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoginLogoSection = styled.div`
  margin: 15px 0;
`;

export const LoginInputSection = styled.div`
  & > div {
    margin: 5px 0;
  }
`;

export const LoginButtonSection = styled.div``;

export const LoginOptionSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  font-size: 14px;

  & > div {
    :nth-child(1) {
      color: ${({ theme }) => theme.colors.gray3};
    }
    :nth-child(2) {
      color: ${({ theme }) => theme.colors.black2};
    }
  }
`;

export const LoginRegisterButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  & > div {
    :nth-child(1) {
      color: ${({ theme }) => theme.colors.gray3};
      margin-right: 10px;
    }
    :nth-child(2) {
      & > a {
        color: ${({ theme }) => theme.colors.red};
        font-weight: ${({ theme }) => theme.getFontWeight('B')};
      }
    }
  }
`;
