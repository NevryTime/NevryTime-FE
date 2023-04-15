import styled from 'styled-components';

interface ButtonType {
  width: number;
  height: number;
  bgColor: string;
  color: string;
}

export const StyledButton = styled.button<ButtonType>`
  width: ${(props) => (props.width ? `${props.width}px` : '300px')};
  height: ${(props) => (props.height ? `${props.height}px` : '480px')};
  background: ${(props) => (props.bgColor ? `${props.bgColor}` : '#E50914')};
  color: ${(props) => (props.color ? `${props.color}` : '#FFFFFF')};
  font-size: 17px;
  border: none;
`;
