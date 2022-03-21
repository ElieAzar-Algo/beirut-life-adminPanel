import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ closed }) => (closed ? '60px' : '250px')};
  padding: 10px 14px;
  background-color: var(--sidebar-color);
  transition: var(--tran-05);
  z-index: 100;

  li {
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .icon-style {
    min-width: 60px;
    border-radius: 6px;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    opacity: ${({ closed }) => (closed ? 0 : 1)};
  }

  .icon-style,
  .text {
    color: var(--text-color);
    transition: var(--tran-03);
  }
`;

export const Header = styled.header`
  position: relative;

  .toggle {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%);
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${({ theme }) =>
      theme === 'light' ? 'var(--sidebar-color)' : 'var(--text-color)'};
    cursor: pointer;
    transition: var(--tran-05);
    transform: translateY(-50%)
      rotate(${({ closed }) => (closed ? '0deg' : '180deg')});
  }
`;

export const ImageText = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Image = styled.span`
  min-width: 30px;
  display: flex;
  align-items: center;

  > img {
    width: ${({ closed }) => (closed ? '60px' : '80px')};
    border-radius: 4px;
    transition: var(--tran-03);
  }
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  opacity: ${({ closed }) => (closed ? 0 : 1)};
  transition: var(--tran-03);

  .name {
    margin-top: 2px;
    font-size: 13px;
    font-weight: 600;
  }

  .profession {
    font-size: 13px;
    margin-top: -2px;
    display: block;
  }
`;

export const Menubar = styled.div`
  height: calc(100% - 75px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Menu = styled.div`
  margin-top: 10px;
`;

export const SearchBox = styled.li`
  border-radius: 6px;
  background-color: var(--primary-color-light);
  cursor: pointer;
  transition: var(--tran-05);

  > input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    background-color: var(--primary-color-light);
    color: var(--text-color);
    border-radius: 6px;
    font-size: 17px;
    font-weight: 500;
    transition: var(--tran-05);
  }
`;

export const NavLink = styled(Link)`
  list-style: none;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  text-decoration: none;
  transition: var(--tran-03);

  &:hover,
  &.active {
    background-color: var(--primary-color);

    .icon-style,
    .text {
      color: ${({ theme }) =>
        theme === 'light' ? 'var(--sidebar-color)' : 'var(--text-color)'};
    }
  }
`;

export const Mode = styled.li`
  border-radius: 6px;
  background-color: var(--primary-color-light);
  position: relative;
  transition: var(--tran-05);
`;

export const SunMoon = styled.div`
  height: 50px;
  width: 60px;
  display: flex;
  align-items: center;

  .i-style {
    position: absolute;
  }
  .sun {
    opacity: ${({ theme }) => (theme === 'light' ? 0 : 1)};
  }
  .moon {
    opacity: ${({ theme }) => (theme === 'light' ? 1 : 0)};
  }
`;

export const ToggleSwitch = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
`;

export const Switch = styled.span`
  position: relative;
  height: 22px;
  width: 40px;
  border-radius: 25px;
  background-color: var(--toggle-color);
  transition: var(--tran-05);

  &::before {
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: ${({ theme }) => (theme === 'light' ? '20px' : '5px')};
    transform: translateY(-50%);
    background-color: var(--sidebar-color);
    transition: var(--tran-04);
  }
`;
