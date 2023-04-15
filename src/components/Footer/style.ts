import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.light_gray3};
  color: ${({ theme }) => theme.colors.black3};
  font-size: 14px;

  & > div {
    margin: 0 10px;
  }
`;
