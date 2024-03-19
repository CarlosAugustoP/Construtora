import styled from 'styled-components';
import React from 'react';
export const Container = styled.div`
    width: 95%;
    display: flex;
    gap:20px;
    border-radius: 25px;
    border: 1px solid white;
    `;
 export const ImageContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;
    padding-right: 20px;

    img {
        height:90%;
        width:90%;
        border-radius: 25px;
    }
`;

export const TextContainer = styled.div`
    width: 60%;
    padding-left: 20px;

`;

export const TitleContainer = styled.div`
    width:100%;
    height:20%;
`;

export const Text = styled.p`
    font-weight: 200;
    font-size: 20px
    
    `;