import styled, {css} from 'styled-components';
import { Content } from '../NavBar/styles';

export const Title = styled.h1`
  font-weight: 200;
  font-size: 30px;

`
export const Container = styled.div`
  background-color: #575757;
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  align-items: center;
  justify-items: end;
  gap:40px;
  position: relative;
`;

export const InputField = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
  background-color: #f0f0f0;
`;

export const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px ;
    border: none;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #fff;
        color: #575757;
    }
    `;
