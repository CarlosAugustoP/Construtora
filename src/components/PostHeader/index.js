import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../Context/ThemeContext';
import { Container, ImageContainer, PostDescription, PostContainer, LeftArrow, RightArrow, ScrollingContent, BigImageContainer } from './styles';
import TestImageHouse from '../../../public/img/TestImageHouse.png';
import TestImageHouse2 from '../../../public/img/TestImageHouse2.png';
import Post from '../Post';
import Arrow from '../../../public/img/Arrow.svg';
import {posts, posts2} from './posts';
const speech = ' Na construtora Peixoto e Vasconcelos, acreditamos que cada obra é mais do que concreto e aço. É a realização de um sonho, onde transformamos ideias em lares. Seja parte dessa jornada, onde cada construção conta uma história única de ideias tornando-se em realidade. Interessado em seu sonho? Obtenha financiamento aqui.';

export default function PostHeader(props){
  
  const PostGrid = ({ posts }) => {
    return (
      <div style = {{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 250px)',
        gridAutoRows: '250px',
        gap: '40px',
        width: '80%',
        justifyContent: 'center'
      
      }}>
        {posts.map((post, index) => (
          <PostContainer key={index}
          onMouseEnter={() => handleMouseEnter(index)}>
            <img src={post.imagem} alt="Post Image" />
          </PostContainer>
        ))}
      </div>
    );
  };
  
  const [nowPost, setNowPost] = useState(posts[0]); 
  const [isVisible, setIsVisible] = useState(true);

  const handleMouseEnter = (index) => {
    if (isVisible) {
      setNowPost(posts[index]);
    } else {
      setNowPost(posts2[index]);
    }
  };

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Container>
          <PostDescription>
            <p style ={{
              paddingLeft: "20%",
              fontSize: "16px",
            }}>{speech}</p>

            <br />

            <p style={{
              direction: 'rtl',
              fontWeight: '200',
              fontSize: '15px',

            }}>
              <strong>{nowPost.tipo}</strong> em <strong>{nowPost.Bairro}</strong>
              <br></br>
              {nowPost.localização}
              <br></br>
              Obra Iniciada em {nowPost.iniciado_em}
              <br></br>
              Obra Entregue em {nowPost.entregue_em}
            </p>
          </PostDescription>
          <BigImageContainer>
            <img src={nowPost.imagem} alt="Post Image" />
          </BigImageContainer>
        </Container>
        

      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '100px',
          gap: '20px'
        }}
      >
        <LeftArrow onClick = {handleButtonClick} src =  {Arrow} >
        </LeftArrow>
        <ScrollingContent>
          <PostGrid posts={isVisible ? posts : posts2} />
        </ScrollingContent>
          <RightArrow onClick={handleButtonClick} src = {Arrow}>
        </RightArrow>
      </div>
    </>
  );
}

