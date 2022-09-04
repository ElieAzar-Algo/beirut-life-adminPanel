import styled from 'styled-components';

export const ProductCtr = styled.div`
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

export const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export const ProductTop = styled.div`
  flex: 1;
`;

export const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
  background-color: var(--white-color);
  color: var(--text-color);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const ProductFormLeft = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

export const ProductFormRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .productUpload {
    display: flex;
    align-items: center;
  }

  .productUploadImg {
    width: 380px;
    height: 380px;
    border-radius: 10px;
    object-fit: cover;
    margin-left: 10px;
  }
`;
