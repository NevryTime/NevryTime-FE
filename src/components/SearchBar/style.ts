import styled from 'styled-components';

interface SearchBarType {
  width?: number;
  height?: number;
  borderRadius?: number;
}

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg,
  img {
    position: relative;
    padding-top: 8px;
    right: 210px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black3};
  }
`;

export const SearchBarInput = styled.input<SearchBarType>`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '48px')};
  padding-left: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}px` : 0};
  ::placeholder {
    color: ${({ theme }) => theme.colors.black3};
  }
  :focus {
    outline: none;
  }
`;

export const SearchBtn = styled.div`
  width: 18px;
  position: absolute;
  right: 0;
`;
