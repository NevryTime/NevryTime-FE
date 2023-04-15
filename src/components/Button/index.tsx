import { StyledButton } from './style';

interface ButtonType {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  width: number;
  height: number;
  bgColor?: string;
  color?: string;
  onClick?: () => void;
}

export const Button = (props: ButtonType) => {
  const { children, type, width, height, bgColor, color, onClick } = props;

  return (
    <StyledButton
      type={type ? type : 'button'}
      width={width}
      height={height}
      bgColor={bgColor ? bgColor : '#c62a18'}
      color={color ? color : '#ffffff'}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
