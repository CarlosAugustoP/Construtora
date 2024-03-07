import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import {Container, Subtitle, Rate} from './styles'
export default function Post(props){
    return (
        <>
                <PostHeader 
                    post = {{
                        id: props.post.id,
                        tipo: props.post.tipo,
                        Bairro: props.post.Bairro,
                        localização: props.post.localização,
                        valor: props.post.valor,
                        iniciado_em: props.post.iniciado_em,
                        entregue_em: props.post.entregue_em,
                    }}
                />
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
    }).isRequired
    

}