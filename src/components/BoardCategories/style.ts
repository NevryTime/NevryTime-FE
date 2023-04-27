import styled from 'styled-components';

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
