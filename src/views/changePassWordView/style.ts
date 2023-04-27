import styled from 'styled-components';

export const MyPasswordContainer = styled.div`
  margin: 20px auto;
  width: 480px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 12px;
  padding: 24px;

  & > div {
    margin: 10px 0;

    :nth-child(1) {
      margin-bottom: 20px;
      font-size: 22px;
      font-weight: ${({ theme }) => theme.getFontWeight('SB')};
    }

    & > input {
      background: ${({ theme }) => theme.colors.light_gray1};
      :focus {
        background: ${({ theme }) => theme.colors.white};
      }
    }

    & > button {
      margin-top: 20px;
      font-weight: ${({ theme }) => theme.getFontWeight('B')};
    }
  }
`;
