import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import { LinkData } from ".";
import dark_mode_icon from "../../assets/dark_mode_icon.png";
import light_mode_icon from "../../assets/light_mode_icon.svg";
import Switch from "react-switch";
import {
  HeaderContainer,
  HeaderLinks,
  HeaderThemeSection,
  HeaderTitle,
  Link,
  Icon,
  ThemeStateText,
  DropdownLinksBox,
} from "./styles";
import useScreenBreakpoints from "../../hooks/useScreenBreakpoints";
import { Button } from "../../components/Button";

const Header = () => {
  const { theme, toggleTheme, isDarkTheme } = useContext(ThemeContext);
  const [isSwitchOn, setIsSwitchOn] = useState(isDarkTheme ? true : false);
  const breakpoint = useScreenBreakpoints();
  const [dropdownLinks, setDropdownLinks] = useState(false);

  const handleThemeSwitch = (switchState: boolean) => {
    setIsSwitchOn(switchState);
    toggleTheme();
  };

  const links: LinkData[] = [
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

  const renderLinks = () => {
    if (breakpoint.md) {
      return <Button onClick={() => setDropdownLinks(!dropdownLinks)} />;
    }
    return (
      <>
        {links.map((link) => (
          <Link tabIndex={1} key={link.id} color={theme.color}>
            {link.title}
          </Link>
        ))}
      </>
    );
  };

  return (
    <>
      <HeaderContainer bgColor={theme.bg}>
        <HeaderTitle color={theme.color}>Test</HeaderTitle>
        <HeaderLinks>{renderLinks()}</HeaderLinks>
        <HeaderThemeSection>
          <Icon
            src={isDarkTheme ? dark_mode_icon : light_mode_icon}
            alt={isDarkTheme ? "Dark mode icon" : "Light mode icon"}
          />
          {!breakpoint.sm ? (
            <ThemeStateText color={theme.color}>
              {isDarkTheme ? "Dark Mode" : "Light Mode"}
            </ThemeStateText>
          ) : null}

          <Switch
            checked={isSwitchOn}
            onChange={handleThemeSwitch}
            checkedIcon={false}
            offHandleColor="#83a9fe"
            onColor="#83a9fe"
            onHandleColor="#1168eb"
            handleDiameter={22}
            uncheckedIcon={false}
            height={15}
            width={35}
          />
        </HeaderThemeSection>
      </HeaderContainer>

      {dropdownLinks && breakpoint.md ? (
        <DropdownLinksBox bgColor={theme.bg}>
          {links.map((link) => (
            <Link key={link.id} color={theme.color}>
              {link.title}
            </Link>
          ))}
        </DropdownLinksBox>
      ) : null}
    </>
  );
};

export default Header;
