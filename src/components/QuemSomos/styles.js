import styled from 'styled-components';
import React from 'react';
export const Container = styled.div`
    width: 95%;
    display: flex;
    background-color: orange;
    gap:20px;
    height:400px;
    border-radius: 25px;
    border: 1px solid white;
    `;
 export const ImageContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    background-color: blue;
`;

export const TextContainer = styled.div`
    width: 60%;
    background-color : black ;
   

`;

export const TitleContainer = styled.div`
    background-color: red;
    width:100%;
    height:50px;
`;