import styled from 'styled-components';
import { MdDeleteOutline } from 'react-icons/md';

export const ProductsCtr = styled.div`
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

export const ProductCtr = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProductEditBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: var(--green-color);
  color: var(--white-color);
  cursor: pointer;
  margin-right: 10px;
`;

export const ProductDeleteBtn = styled(MdDeleteOutline)`
  color: var(--pink-color);
  cursor: pointer;
`;

export const ProductAddBtn = styled.button`
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

export const ProductAddBtnText = styled.span`
  font-weight: bold;
`;
