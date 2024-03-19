import styled from 'styled-components';
import React from 'react';
export const Container = styled.div`
    width: 95%;
    display: flex;
    border-radius: 25px;
    border: 1px solid white;
    flex-direction: ${props => props.direction || 'row-reverse'};

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        padding:10px;

    }
`;
 export const ImageContainer = styled.div`
 width: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 height: 400px;

 img {
     object-fit: cover;
     height: 90%;
     width: 90%;
 }

 @media (max-width: 768px) {
     width: 100%; /* Take full width on small screens */
     height: auto; /* Adjust height automatically */
     
     img {
         width: 80%; /* Adjust image width on small screens */
         height: auto; /* Adjust image height automatically */
     }
 }
`;

export const TextContainer = styled.div`
    width: 50%;
    padding: 20px;

    @media (max-width: 768px) {
         /* Remove padding on small screens */
            padding: 0;
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
    }

`;

export const H1 = styled.h1`
    width:100%;
    height:20%;

    @media (max-width: 768px) {
        padding:10px;

    }
`;

export const Text = styled.p`
    font-weight: 200;
    font-size: 20px
    
    `;