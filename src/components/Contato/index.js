import React, {useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../../Context/ThemeContext';
import { Container, FormContainer, Title } from './styles'; 

export default function Contato(props){
  const {onToggleTheme} = useContext(ThemeContext);
  return (
    <Container>
      <Title>Contato</Title>
      <FormContainer>
        <form>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required></input>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
          <br></br>
          <label for="telefone">Telefone:</label>
          <input type="telefone" id="telefone" name="telefone" required></input>
          <label for="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" required></textarea>
          <input type="submit" value="Enviar"></input>
        </form>
      </FormContainer>
    
    </Container>
  )
};
