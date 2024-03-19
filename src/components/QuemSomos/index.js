import React from "react";
import { Container, ImageContainer, TextContainer, TitleContainer } from "./styles";


export default function QuemSomos(){
    return (
    <div style ={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',    }}>
    <Container><TextContainer><TitleContainer/></TextContainer><ImageContainer/></Container>
    </div>
    );
}