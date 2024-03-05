import styled, {css} from 'styled-components';
import { Content } from '../NavBar/styles';

export const Container = styled(Content)`
  background-color: #575757;
  width: 100%;
  height: 200px;
  display: flex;
  left: 0;
  position: fixed;
  padding-left: 10px;
`;

export const FormContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

