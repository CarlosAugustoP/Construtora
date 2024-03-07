import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../Context/ThemeContext';
import { Container, ImageContainer, PostDescription, PostGrid, PostContainer } from './styles';
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
                <strong>Tipo de obra</strong> em <strong>Nome do Bairro</strong>
                <br></br>
                Cidade - UF 
                <br></br>
                Obra Iniciada em xxyy
                <br></br>
                Obra Entregue em xxyy
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
          <PostGrid>
            {posts.map((post, index) => (
              <PostContainer key={index}>
                <img src={post.imagem} alt="Post Image" />
              </PostContainer>
            ))}
          </PostGrid>
        </div>
        
        
      </>
      
  );
}