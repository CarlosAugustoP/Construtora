import styled, {css} from 'styled-components';
import { Content } from '../NavBar/styles';

export const Title = styled.div`
  display  : flex;
  align-items: flex-start;
  font-size: 20px;
`
export const Container = styled.div`
  background-color: #575757;
  width: 100%;
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  align-items: center;
  justify-items: end;
  gap:30px;
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
