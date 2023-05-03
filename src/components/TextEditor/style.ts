import styled from 'styled-components';

export const TextEditorContainer = styled.div`
  & > div {
    :nth-child(2) {
      & > textarea {
        width: 100%;
        height: 381px;
        padding: 10px;
        resize: none;
        border: 1px solid ${({ theme }) => theme.colors.gray1};
        border-top: none;
        outline: none;
      }
    }
  }
`;

export const OptionBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  top: -3px;

  & > div:nth-child(1) {
    color: ${({ theme }) => theme.colors.gray3};
    padding-left: 10px;
    cursor: pointer;
  }
`;

export const Options = styled.div`
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
