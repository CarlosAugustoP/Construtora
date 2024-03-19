import React from "react";
import { Container, ImageContainer, TextContainer, TitleContainer, Text } from "./styles";
import photo1 from '../../../public/img/QuemSomosPhoto1.jpeg';
const lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ultricies mi. Sed erat lorem, porttitor eu mauris vitae, condimentum vulputate sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis pretium ipsum nec dui fringilla, quis interdum tellus tristique. Mauris porttitor sapien quam, s. Cras et purus purus "

const ContentSection = ({ imgSrc, titleText, bodyText, direction = "row" }) => {
    return (
      <Container style = {{flexDirection : direction}}>
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
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '40px'
      }}>
        <ContentSection imgSrc={photo1} titleText="Compromisso" bodyText={lorem} />
      </div>
       <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '40px'
      }}>
        <ContentSection imgSrc={photo1} titleText="Compromisso" bodyText={lorem} direction = "row-reverse" />
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
  