import styled from 'styled-components';

export const RegisterContainer = styled.div`
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 12px;
`;

export const RegisterTitleSection = styled.div`
  font-size: 22px;
  font-weight: ${({ theme }) => theme.getFontWeight('B')};
  padding-bottom: 20px;
`;

export const RegisterInputSection = styled.div`
  & > div {
    margin: 5px 0;

    & > input {
      background: ${({ theme }) => theme.colors.light_gray1};
    }
  }
`;

export const RegisterButtonSection = styled.div``;
