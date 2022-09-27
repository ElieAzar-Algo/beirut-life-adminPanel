import styled from 'styled-components'

export const ProdCtr = styled.div`
  position: absolute;
  top: 10px;
  left: ${({ closed }) => (closed ? '110px' : '300px')};
  height: 97%;
  width: calc(99% - ${({ closed }) => (closed ? '110px' : '300px')});
  background-color: var(--body-color);
  transition: var(--tran-05);

  .text {
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: 500;
    color: var(--text-color);
  }
`;