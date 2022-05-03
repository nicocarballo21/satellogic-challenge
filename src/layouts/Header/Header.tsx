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

const Header = () => {
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
        <Switch />
      </HeaderThemeSection>
    </HeaderContainer>
  );
};

export default Header;
