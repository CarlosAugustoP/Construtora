import React from 'react';
import { Container, PostDescription, BigImageContainer } from './styles';

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
            paddingLeft: "20%",
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
          <img src={post.imagem} alt="Post Image" />
        </BigImageContainer>
      </Container>
    </div>
  );
}

