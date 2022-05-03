import {
  HeaderContainer,
  HeaderLinks,
  HeaderThemeSection,
  HeaderTitle,
  HeaderLink,
  Icon,
} from "./styles";
import { Links } from ".";
import dark_mode_icon from "../../assets/dark_mode_icon.png";
import light_mode_icon from "../../assets/light_mode_icon.png";
import { Switch } from "../../Components/Switch";
import { ChangeEvent, useState } from "react";

const Header = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  console.log(isSwitchOn);

  const handleSwitchState = (e: ChangeEvent<HTMLInputElement>) =>
    setIsSwitchOn(e.target.checked);

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
  return (
    <HeaderContainer>
      <HeaderTitle>Test</HeaderTitle>
      <HeaderLinks>
        {links.map((link) => (
          <HeaderLink key={link.id}>{link.title}</HeaderLink>
        ))}
      </HeaderLinks>
      <HeaderThemeSection>
        <Icon src={light_mode_icon} />
        Light Mode
        <Switch switchState={isSwitchOn} onChange={handleSwitchState} />
      </HeaderThemeSection>
    </HeaderContainer>
  );
};

export default Header;
