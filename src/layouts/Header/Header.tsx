import {
  HeaderContainer,
  HeaderLinks,
  HeaderThemeSection,
  HeaderTitle,
  HeaderLink,
  Icon,
  ThemeStateText,
} from "./styles";
import { Links } from ".";
import dark_mode_icon from "../../assets/dark_mode_icon.png";
import light_mode_icon from "../../assets/light_mode_icon.svg";
import { Switch } from "../../components/Switch";
import { ChangeEvent, useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
const Header = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const { theme, toggleTheme, isDarkTheme } = useContext(ThemeContext);

  const handleThemeSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSwitchOn(e.target.checked);
    toggleTheme();
  };

  const links: Links[] = [
    {
      title: "Link 1",
      id: 0,
    },
    {
      title: "Link 2",
      id: 1,
    },
    {
      title: "Link 2",
      id: 2,
    },
    {
      title: "Link 3",
      id: 3,
    },
    {
      title: "Link 4",
      id: 4,
    },
  ];

  console.log(theme.color);

  return (
    <HeaderContainer bgColor={theme.bg}>
      <HeaderTitle color={theme.color}>Test</HeaderTitle>
      <HeaderLinks>
        {links.map((link) => (
          <HeaderLink
            key={link.id}
            isSelected={link.id === 1}
            color={theme.color}
          >
            {link.title}
          </HeaderLink>
        ))}
      </HeaderLinks>
      <HeaderThemeSection>
        <Icon
          src={isDarkTheme ? dark_mode_icon : light_mode_icon}
          color={theme.color}
        />
        <ThemeStateText color={theme.color}>
          {isDarkTheme ? "Dark Mode" : "Light Mode"}
        </ThemeStateText>
        <Switch switchState={isSwitchOn} onChange={handleThemeSwitch} />
      </HeaderThemeSection>
    </HeaderContainer>
  );
};

export default Header;
