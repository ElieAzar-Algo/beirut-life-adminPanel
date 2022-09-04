import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Navigation = styled.div`
  position: fixed;
  width: ${({ closed }) => (closed ? '55px' : '300px')};
  height: 100%;
  background: var(--blue);
  border-left: 10px solid var(--blue);
  transition: 0.5s;
  overflow: hidden;

  @media screen and (max-width: 736px) {
    width: 100%;
  }
`;

export const BarList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const BarListItem = styled.li`
  position: relative;
  width: 100%;
  list-style: none;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  background: ${({ selected }) => (selected ? 'var(--white)' : 'var(--blue)')};

  &:hover {
    background: var(--white);
  }

  &:nth-child(1) {
    margin-bottom: 40px;
    pointer-events: none;
  }
`;

export const BarListItemLink = styled(NavLink)`
  position: relative;
  width: 100%;
  display: flex;
  text-decoration: none;
  /* color: var(--white); */
  align-items: center;
  line-height: 60px;
  color: ${({ selected }) => (selected ? 'var(--blue)' : 'var(--white)')};

  &:hover {
    color: var(--blue);

    &::before {
      content: '';
      position: absolute;
      right: 0;
      top: -50px;
      width: 50px;
      height: 50px;
      background-color: transparent;
      border-radius: 50%;
      box-shadow: 35px 35px 0 10px var(--white);
      pointer-events: none;
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -50px;
      width: 50px;
      height: 50px;
      background-color: transparent;
      border-radius: 50%;
      box-shadow: 35px -35px 0 10px var(--white);
      pointer-events: none;
      z-index: 1;
    }
  }

  .icon-style {
    position: relative;
    padding-left: 10px;
    min-width: 25px;
  }
`;

export const Title = styled.span`
  position: relative;
  display: block;
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
`;
