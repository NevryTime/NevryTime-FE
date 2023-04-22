import { StyledInputBox } from './style';

interface InputBoxType {
  name?: string;
  id?: string;
  type?: 'text' | 'email' | 'password';
  width: number;
  height: number;
  borderRadius?: number;
  placeholder: string;
  onChange?: React.ChangeEventHandler;
}

export const InputBox = (props: InputBoxType) => {
  const { name, id, type, width, height, placeholder, onChange, borderRadius } =
    props;

  return (
    <StyledInputBox
      name={name}
      id={id}
      type={type ? type : 'text'}
      width={width}
      height={height}
      placeholder={placeholder}
      onChange={onChange}
      borderRadius={borderRadius ? borderRadius : 0}
    ></StyledInputBox>
  );
};
