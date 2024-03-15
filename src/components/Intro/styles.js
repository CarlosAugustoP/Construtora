import styled from 'styled-components';

export const Container = styled.div`
    color: black;
    position: absolute; 
    top: 20px; 
    left: 20px; 
    text-align: left; 
    font-size: 30px;
    text-shadow: 2px 2px 4px #000000;
`;
export const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px ;
    border: none;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #fff;
        color: #575757;
    }
    `;

export const Colored = styled.span`
    color: #B0A494;
`;

