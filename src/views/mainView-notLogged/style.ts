import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainLogoSection = styled.div`
  margin-bottom: 20px;

  & > img {
    display: block;
    margin: 0 auto;
  }
`;

export const MainButtonSection = styled.div`
  & > div {
    margin: 5px 0;

    :nth-child(1) {
      & > button {
        border: 1px solid ${({ theme }) => theme.colors.gray2};
      }
    }
  }
`;

export const MainOptionSection = styled.div`
  float: right;
  padding: 15px 0;
  font-size: 14px;
`;
