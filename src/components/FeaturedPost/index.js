import React from 'react';
import { Container, PostDescription, BigImageContainer } from './styles';
import Arrow from '../../../public/img/Arrow.svg';
const speech = ' Na construtora Peixoto e Vasconcelos, acreditamos que cada obra é mais do que concreto e aço. É a realização de um sonho, onde transformamos ideias em lares. Seja parte dessa jornada, onde cada construção conta uma história única de ideias tornando-se em realidade. Interessado em seu sonho? Obtenha financiamento aqui.';

export default function FeaturedPost({ post }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <PostDescription>
          <p style={{
            paddingLeft:'12%',
            fontSize: "16px",
          }}>{speech}</p>

          <br />

          <p style={{
            direction: 'rtl',
            fontWeight: '200',
            fontSize: '15px',

          }}>
            <strong>{post.tipo}</strong> em <strong>{post.Bairro}</strong>
            <br></br>
            {post.localização}
            <br></br>
            Obra Iniciada em {post.iniciado_em}
            <br></br>
            Obra Entregue em {post.entregue_em}
          </p>
        </PostDescription>
        <BigImageContainer>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <img src={post.imagem} alt="Post Image" />
          <svg style = {{
            transform: 'rotate(180deg)'
          }}viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        
        </BigImageContainer>
      </Container>
    </div>
  );
}

