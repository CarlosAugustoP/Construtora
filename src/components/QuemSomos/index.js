import React from "react";
import { Container, ImageContainer, TextContainer, TitleContainer, Text } from "./styles";
import photo1 from '../../../public/img/QuemSomosPhoto1.jpg';
const lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ultricies mi. Sed erat lorem, porttitor eu mauris vitae, condimentum vulputate sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis pretium ipsum nec dui fringilla, quis interdum tellus tristique. Mauris porttitor sapien quam, s. Cras et purus purus "

const ContentSection = ({ imgSrc, titleText, bodyText, direction = "row", backgroundColor= "rgb(18,18,18,0.8)", color = "white"}) => {
  return (
      <Container direction = {direction}  style={{ backgroundColor: backgroundColor, color: color }}>
        <TextContainer>
          <h1>{titleText}</h1>
          <Text>{bodyText}</Text>
        </TextContainer>
        <ImageContainer>
          <img src={imgSrc} alt={titleText} />
        </ImageContainer>
      </Container>
    );
  };  
    export default function QuemSomos() {
    return (
        <>
      <div 
      id = "QuemSomos"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '100px'
      }}>
        <ContentSection imgSrc={photo1} titleText="Compromisso" bodyText={lorem} />
      </div>
       <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '50px'
      }}>
        <ContentSection imgSrc={photo1} direction = "row-reverse" titleText="Compromisso" bodyText={lorem} backgroundColor="rgb(238, 238, 238, 0.8)" color= "black"/>
      </div>
       <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '40px'
      }}>
        <ContentSection imgSrc={photo1} titleText="Compromisso" bodyText={lorem} />
      </div>
      </>
    );
  }
  