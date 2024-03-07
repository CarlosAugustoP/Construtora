import React from 'react';
import PropTypes from 'prop-types';
import { Container, Subtitle } from './styles';

export default function Post(props) {
  const { post } = props;

  return (
    <>
      <Container post={post}>
        <Subtitle>{post.tipo}</Subtitle>
        <p>Bairro: {post.Bairro}</p>
        <p>Localização: {post.localização}</p>
        <p>Valor: {post.valor}</p>
        <p>Iniciado em: {post.iniciado_em}</p>
        <p>Entregue em: {post.entregue_em}</p>
      </Container>
      <br />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tipo: PropTypes.string.isRequired,
    Bairro: PropTypes.string.isRequired,
    localização: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
    iniciado_em: PropTypes.string.isRequired,
    entregue_em: PropTypes.string.isRequired,
  }).isRequired,
};
