import { MdDeleteOutline } from 'react-icons/md';
import styled from 'styled-components';

export const CoverageCtr = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
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

export const CoverageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CoverageAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export const CoverageEditBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: var(--green-color);
  color: var(--white-color);
  cursor: pointer;
  margin-right: 10px;
`;

export const CoverageDeleteBtn = styled(MdDeleteOutline)`
  color: var(--pink-color);
  cursor: pointer;
`;

export const CoverageAddBtn = styled.button`
  display: flex;
  gap: 5px;
  width: 130px;
  border: 2px solid var(--green);
  padding: 5px;
  /* background-color: var(--primary-500); */
  border-radius: 5px;
  cursor: pointer;
  color: var(--grey-900);
  margin-bottom: 20px;
  align-items: center;
`;

export const CoverageAddBtnText = styled.span`
  font-weight: bold;
`;
