import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: #fcfcfc;
  min-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 35px;
  border-radius: 5px;
  flex-direction: column;
  box-shadow: 2px 2px 31px -17px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 2px 31px -17px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 31px -17px rgba(0, 0, 0, 0.75);

  @media (max-width: 992px) {
    min-width: 600px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    min-width: 600px;
  }

  @media (max-width: 572px) {
    min-width: 350px;
  }
`;

export const TitleForm = styled.h1`
  font-size: 1.7rem;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputForm = styled.input`
  padding: 10px;
  display: flex;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #dcdcdc;

  &:focus {
    outline: none;
  }
`;

export const ButtonSubmit = styled.button`
  padding: 10px 26px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const ButtonDelete = styled.button`
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  background-color: #ff4d4d;
  color: #fff;
  cursor: pointer;
`;

export const ButtonDeleteAll = styled.button`
  width: 100%;
  padding: 10px 26px;
  background-color: #ff4d4d;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`;

export const HrForm = styled.hr`
  width: 100%;
  opacity: 0.3;
`;
