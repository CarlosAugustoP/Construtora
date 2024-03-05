import React, {useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../../Context/ThemeContext';
import { Container, FormContainer, Title, InputField } from './styles'; 

export default function Contato(props){
  const {onToggleTheme} = useContext(ThemeContext);
  return (
       
    <Container>
      <Title>Contato</Title>
      <form>
      <FormContainer>
          <div style={{ display: 'flex' , flexDirection: 'column', fontSize: '15px'}}>
            <label for="nome">Nome:</label>
            <InputField type="text" id="nome" name="nome" required></InputField>
          </div>
          <div style={{ display: 'flex' ,flexDirection: 'column', fontSize: '15px'}}>
            <label for="email">Email:</label>
            <InputField type="email" id="email" name="email" required></InputField>
          </div>
          <div style={{ display: 'flex' ,flexDirection: 'column', fontSize: '15px'}}>
            <label for="telefone">Telefone:</label>
            <InputField type="tel" id="telefone" name="telefone" required></InputField>
          </div>
          <div style={{ display: 'flex' ,flexDirection: 'column',fontSize: '15px'}}>
            <label for="mensagem">Mensagem:</label>
            <InputField type="text" id="mensagem" name="mensagem" required></InputField>
          </div>     
      </FormContainer>
      <button style={{ marginTop: '10px'}} type="submit" value="Enviar">Enviar</button>
      </form>
    </Container>
  )
};
