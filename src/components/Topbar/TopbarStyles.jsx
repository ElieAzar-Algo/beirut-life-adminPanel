import styled from 'styled-components';

export const TopbarWrap = styled.div`
  position: absolute;
  width: calc(100% - ${({ toggled }) => (toggled ? '65px' : '310px')});
  left: ${({ toggled }) => (toggled ? '65px' : '310px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 5px 10px;
  transition: 0.5s;

  .toggle-icon {
    position: relative;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid var(--black2);
    border-radius: 5px;
    color: var(--blue);
  }
`;

export const SearchboxLabel = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;

  > input {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 3px 10px;
    padding-left: 35px;
    outline: none;
    border: 1px solid var(--black2);
  }

  .search-icon {
    position: absolute;
    left: 10px;
  }
`;

export const SearchBox = styled.div`
  position: relative;
  width: 400px;
  margin: 0 10px;
`;

export const UserAvatar = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  margin-right: 20px;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
  }
`;
