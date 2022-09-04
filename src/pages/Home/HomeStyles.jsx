import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 60px;
  width: calc(99% - ${({ closed }) => (closed ? '75px' : '310px')});
  left: ${({ closed }) => (closed ? '75px' : '320px')};
  display: flex;
  flex-direction: column;
  gap: 70px;
  min-height: 100vh;
  transition: 0.5s;
`;

export const Cards = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  height: 50px;
`;
