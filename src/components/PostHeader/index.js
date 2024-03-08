import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../Context/ThemeContext';
import { Container, ImageContainer, PostDescription, PostGrid, PostContainer, LeftArrow, RightArrow } from './styles';
import TestImageHouse from '../../../public/img/TestImageHouse.png';
import Post from '../Post';

const speech = ' Na construtora Peixoto e Vasconcelos, acreditamos que cada obra é mais do que concreto e aço. É a realização de um sonho, onde transformamos ideias em lares. Seja parte dessa jornada, onde cada construção conta uma história única de ideias tornando-se em realidade. Interessado em seu sonho? Obtenha financiamento aqui.';

export default function PostHeader(props){

  const [posts, setPosts] = useState([
    {
      id: 1,
      tipo: "Mansão",
      Bairro: "Condomínio Fazenda Gramado",
      localização: "Gravatá - PE",
      valor: "Não está a venda",
      iniciado_em: "01/01/2021",
      entregue_em: "01/01/2022",
      imagem: TestImageHouse
    },
    {
      id: 2,
      tipo: "Apartamento",
      Bairro: "Boa Viagem",
      localização: "Recife - PE",
      valor: "R$ 1.000.000,00",
      iniciado_em: "01/01/2021",
      entregue_em: "01/01/2022",
      imagem: TestImageHouse
    },
    {
      id: 3,
      tipo: "Casa",
      Bairro: "Condomínio Alphaville",
      localização: "Recife - PE",
      valor: "R$ 1.000.000,00",
      iniciado_em: "01/01/2021",
      entregue_em: "01/01/2022",
      imagem: TestImageHouse
  
    },
    {
      id: 3,
      tipo: "Casa",
      Bairro: "Condomínio Alphaville",
      localização: "Recife - PE",
      valor: "R$ 1.000.000,00",
      iniciado_em: "01/01/2021",
      entregue_em: "01/01/2022",
      imagem: TestImageHouse
  
    },
    {
      id: 3,
      tipo: "Casa",
      Bairro: "Condomínio Alphaville",
      localização: "Recife - PE",
      valor: "R$ 1.000.000,00",
      iniciado_em: "01/01/2021",
      entregue_em: "01/01/2022",
      imagem: TestImageHouse
    },
      {
        id: 3,
        tipo: "Casa",
        Bairro: "Condomínio Alphaville",
        localização: "Recife - PE",
        valor: "R$ 1.000.000,00",
        iniciado_em: "01/01/2021",
        entregue_em: "01/01/2022",
        imagem: TestImageHouse
    

    },
    

]);

  const [nowPost, setNowPost] = useState(posts[0]); 

  const handleMouseEnter = (index) => {
    setNowPost(posts[index]);
  }

  return (
      <>
        <div
        style = {{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'

      }}>
          <Container>
            <PostDescription>
              <p>{speech}</p>
              <p style = {{
                 direction: 'rtl',
                 fontWeight: '200',
                 marginTop: '60px', 
              }}>
                <strong>{nowPost.tipo}</strong> em <strong>{nowPost.Bairro}</strong>
                <br></br>
                {nowPost.localização}
                <br></br>
                Obra Iniciada em {nowPost.iniciado_em}
                <br></br>
                Obra Entregue em {nowPost.entregue_em}
                </p>
              
            </PostDescription>
            <ImageContainer><img src = {TestImageHouse}></img></ImageContainer>
          </Container>
        </div>
        <div
          style = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>   
        {/* mapping the posts to the Post component, saving the posts in the state and rendering the Post image       */}
          
          <LeftArrow>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </LeftArrow>
          
          <PostGrid>
            {posts.map((post, index) => (
              <PostContainer 
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <img src={post.imagem} alt="Post Image" />
              </PostContainer>
            ))}
          </PostGrid>

          <RightArrow>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </RightArrow>

        </div>
      </>
      
  );
}
