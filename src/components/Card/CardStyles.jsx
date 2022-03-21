import styled from 'styled-components';

export const CardNumber = styled.div`
  position: relative;
  font-size: 2em;
  font-weight: 500;
  color: var(--blue);
`;

export const CardTitle = styled.div`
  font-size: 1em;
  color: var(--black2);
  margin-top: 5px;
`;

export const CardBox = styled.div`
  position: relative;
  background: var(--white);
  padding: 30px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  .icon-style {
    color: var(--black2);
  }

  &:hover {
    background: var(--blue);

    & ${CardNumber}, ${CardTitle}, .icon-style {
      color: var(--white);
    }
  }
`;

export const CardContent = styled.div``;
