import { useContext } from 'react';
import {
  Sidebar,
  Image,
  ImageText,
  Header,
  Menu,
  NavLink,
  SearchBox,
  Menubar,
  LogoText,
  Mode,
  SunMoon,
  ToggleSwitch,
  Switch,
} from './LDSidebarStyles';
import {
  BiChevronRight,
  BiLogOut,
  BiMoon,
  BiSearch,
  BiSun,
} from 'react-icons/bi';
import { sidebarItems } from '../../constants';
import { ThemeCtx } from '../../context/ThemeStore';

const LDSidebar = () => {
  const { closed, toggleClosed, theme, toggleTheme } = useContext(ThemeCtx);

  return (
    <Sidebar closed={closed}>
      <Header theme={theme} closed={closed}>
        <ImageText>
          <Image closed={closed}>
            <img src="logo.png" alt="logo" />
          </Image>

          <LogoText closed={closed}>
            <span className="name">Beirut Life Admin</span>
            <span className="profession">Insurance Company</span>
          </LogoText>
        </ImageText>

        <BiChevronRight
          className="toggle"
          size={25}
          onClick={() => toggleClosed(!closed)}
        />
      </Header>

      <Menubar>
        <Menu>
          <SearchBox>
            <BiSearch className="icon-style" onClick={toggleClosed} />
            <input type="text" placeholder="Search..." />
          </SearchBox>
          <ul>
            {sidebarItems.map((sbi) => (
              <li key={sbi.id}>
                <NavLink to={sbi.path} theme={theme}>
                  {sbi.icon}
                  <span className="text">{sbi.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </Menu>
        <div>
          <li>
            <NavLink to="/signout" theme={theme}>
              <BiLogOut className="icon-style" />
              <span className="text">Logout</span>
            </NavLink>
          </li>
          <Mode>
            <SunMoon theme={theme}>
              <BiMoon size={15} className="icon-style moon i-style" />
              <BiSun size={15} className="icon-style sun i-style" />
            </SunMoon>
            <span className="mode-text text">
              {theme === 'light' ? 'Dark mode' : 'Light mode'}
            </span>

            <ToggleSwitch>
              <Switch theme={theme} onClick={() => toggleTheme(theme)} />
            </ToggleSwitch>
          </Mode>
        </div>
      </Menubar>
    </Sidebar>
  );
};

export default LDSidebar;
