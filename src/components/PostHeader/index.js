import React, {useContext} from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../Context/ThemeContext';
import { Container, ImageContainer, PostDescription, PostGrid, PostContainer } from './styles';

const speech = ' Na construtora Peixoto e Vasconcelos, acreditamos que cada obra é mais do que concreto e aço. É a realização de um sonho, onde transformamos ideias em lares. Seja parte dessa jornada, onde cada construção conta uma história única de ideias tornando-se em realidade. Interessado em seu sonho? Obtenha financiamento aqui.';
export default function PostHeader(props){
  const {onToggleTheme} = useContext(ThemeContext);
  return (
      <>
        <h1>Catálogo</h1>
        <h1>Catálogo</h1>
        <div
        style = {{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'

      }}>
          <Container>
            <PostDescription>
              <p>{speech}</p>
              <em>Obra iniciada em</em>
              <em>Obra terminada em</em>
              <em>etx etc</em>
            </PostDescription>
            <ImageContainer></ImageContainer>
          </Container>
        </div>
        <div
          style = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}>
          <PostGrid>
            <PostContainer></PostContainer>
            <PostContainer></PostContainer>
            <PostContainer></PostContainer>
            <PostContainer></PostContainer>
            <PostContainer></PostContainer>
            <PostContainer></PostContainer>
          </PostGrid>
        </div>
      </>
      
  );
}