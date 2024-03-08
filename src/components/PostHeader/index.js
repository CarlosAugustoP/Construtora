import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../Context/ThemeContext';
import { Container, ImageContainer, PostDescription, PostContainer, LeftArrow, RightArrow, ScrollingContent, BigImageContainer } from './styles';
import TestImageHouse from '../../../public/img/TestImageHouse.png';
import TestImageHouse2 from '../../../public/img/TestImageHouse2.png';
import Post from '../Post';
import Arrow from '../../../public/img/Arrow.svg';
import {posts, posts2, posts3} from './posts';
const speech = ' Na construtora Peixoto e Vasconcelos, acreditamos que cada obra é mais do que concreto e aço. É a realização de um sonho, onde transformamos ideias em lares. Seja parte dessa jornada, onde cada construção conta uma história única de ideias tornando-se em realidade. Interessado em seu sonho? Obtenha financiamento aqui.';

export default function PostHeader(props){
  // current grid starts as 1, and can be defined to assume other values with setCurrentGrid
  const [currentGrid, setCurrentGrid] = useState(1);

  // PostGrid is a component that receives an array of posts as props and renders them in a grid
  const PostGrid = ({ posts }) => {
    return (
      <div style = {{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 230px)',
        gridAutoRows: '230px',
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
  
  // nowPost is a state that holds the post that is currently being hovered over, which is initialized as index 0
  const [nowPost, setNowPost] = useState(posts[0]); 

  // When the new grid page is chose, using the function "getpostsForGrid" we then allow the user to hover to a different post from another grid
  const handleMouseEnter = (index) => {
    const selectedPosts = getPostsForGrid();
    setNowPost(selectedPosts[index]);
  };

  // When the user clicks the left arrow, the current grid is set to the previous grid
  const handlePreviousGrid = () => {
    setCurrentGrid((prevGrid) => (prevGrid === 1 ? 3 : prevGrid - 1));
  };

  // When the user clicks the right arrow, the current grid is set to the next grid
  const handleNextGrid = () => {
    setCurrentGrid((prevGrid) => (prevGrid === 3 ? 1 : prevGrid + 1));
  };

  // If the user is in currentGrid 1, posts1 will be rendered and so on.
  const getPostsForGrid = () => {
    if (currentGrid === 1) {
      return posts;
    } else if (currentGrid === 2) {
      return posts2;
    } else {  
      return posts3; 
    }
  }


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
        <LeftArrow onClick={handlePreviousGrid} src={Arrow} />
        <ScrollingContent>
          <PostGrid posts={getPostsForGrid()} />
        </ScrollingContent>
        <RightArrow onClick={handleNextGrid} src={Arrow} />
      </div>
    </>
  );
}

