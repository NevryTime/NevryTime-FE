import styled from 'styled-components';

interface InputBoxType {
  width: number;
  height: number;
}

export const StyledInputBox = styled.input<InputBoxType>`
  width: ${(props) => (props.width ? `${props.width}px` : '300px')};
  height: ${(props) => (props.height ? `${props.height}px` : '48px')};
  padding: 0 10px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.black2};
  }
  :focus {
    outline: none;
  }
  border: 1px solid ${({ theme }) => theme.colors.gray1};
`;
