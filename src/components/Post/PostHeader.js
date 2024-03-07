import React from 'react';
import PropTypes from 'prop-types'; 

export default function PostHeader(props){
    return (
        <>
        </>
    );
    
}

PostHeader.propTypes = {
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