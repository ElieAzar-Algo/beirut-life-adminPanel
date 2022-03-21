import React from 'react';
import {
  SearchBox,
  SearchboxLabel,
  TopbarWrap,
  UserAvatar,
} from './TopbarStyles';
import avatar from '../../images/avatar.jpg';
import { IoMenuOutline, IoSearchOutline } from 'react-icons/io5';

const Topbar = ({ toggled, toggle }) => {
  return (
    <TopbarWrap toggled={toggled}>
      <IoMenuOutline size={30} className="toggle-icon" onClick={toggle} />
      <SearchBox>
        <SearchboxLabel>
          <input type="text" placeholder="Search here..." />
          <IoSearchOutline size={20} className="search-icon" />
        </SearchboxLabel>
      </SearchBox>
      <UserAvatar>
        <img src={avatar} alt="Avatar" />
      </UserAvatar>
    </TopbarWrap>
  );
};

export default Topbar;
