import { StyledButton } from './styles';
import { ButtonProps } from '.';
import hamburger_icon_dark from '../../assets/hamburguer_icon_dark.png';
import hamburger_icon_light from '../../assets/hamburguer_icon_light.png';
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';

const Button = ({ onClick }: ButtonProps) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <StyledButton onClick={onClick}>
      <img
        src={isDarkTheme ? hamburger_icon_light : hamburger_icon_dark}
        alt=""
        width="24px"
        height="24px"
      />
    </StyledButton>
  );
};

export default Button;
