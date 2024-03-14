import React, { useState, useEffect } from 'react';
import { Container, PostDescription, BigImageContainer } from './styles';
import Arrow from '../../../public/img/Arrow.svg';
const speech = ' Na construtora Peixoto e Vasconcelos, acreditamos que cada obra é mais do que concreto e aço. É a realização de um sonho, onde transformamos ideias em lares.';
import {highlightedPosts} from  '../PostHeader/posts' ;
import { animated, useSpring } from 'react-spring';

//useEffect hook: Watches for changes in our component and triggers a function when a change is detected
const AnimatedImage = ({ src }) => {
  //useSpring hook: Animates the image when it is rendered. Start from, do this, and do it in this time
  const [animationProps, setAnimationProps] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateX(20%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { duration: 1000 },
  }));
  
  //when changes are detected, the animationProps are updated
  useEffect(() => {
    setAnimationProps({
      from: { opacity: 0, transform: 'translateX(20%)' },
      to: { opacity: 1, transform: 'translateX(0%)' },
      config: { duration: 1000 },
    });
  }, [src, setAnimationProps]);

  //returns the image with the animationProps
  return (
    <animated.img 
      style={{ ...animationProps, width: '90%', height: '100%' }} 
      src={src} 
      alt="Post"
    />
  );
};

 export const AnimatedText = ({ children }) => {  
  const [animationProps, setAnimationProps] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  }));

  useEffect(() => {
    setAnimationProps({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1000},
    });
  }, [children, setAnimationProps]);
  
  return (
    <animated.p style={{ ...animationProps, 
      direction: 'rtl',
      fontWeight: '200',
      fontSize: '15px',
      paddingLeft:'12%',
      height: '66%',

     }}>
      {children}
    </animated.p>
  );
};


export default function FeaturedPost() {
  const [currentPost, setCurrentPost] = useState(1);

  useEffect(() => {
    const timer = setInterval(handleNextPost, 6000);
    return () => clearInterval(timer);
  }, []);

  const getCurrentPost = () => {
    return highlightedPosts[currentPost - 1];
  };

  const handlePreviousPost = () => {
    setCurrentPost((prevPost) => (prevPost=== 1 ? 3 : prevPost- 1));
  };

  // When the user clicks the right arrow, the current grid is set to the next grid
  const handleNextPost = () => {
    setCurrentPost((prevPost) => (prevPost=== 3 ? 1 : prevPost+ 1));
  };

  const post = getCurrentPost();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
      <Container>
        <PostDescription>
          <p style={{
            paddingLeft:'10%',
            fontSize: "18px",
            height: '33%'
          }}>{speech}</p>
          <AnimatedText>
            <strong>{post.tipo}</strong> em <strong>{post.Bairro}</strong>
            <br />
            {post.localização}
            <br />
            <strong>Valor: {post.valor}</strong>
            <br />
            Obra Iniciada em {post.iniciado_em}
            <br />
            Obra Entregue em {post.entregue_em}
            <br />
            <br />
            <br />
            
            
            <p>{post.descricao}</p>
          </AnimatedText>
        </PostDescription>
        <BigImageContainer>
          
          <AnimatedImage style = {{width: '400px'}} src={post.imagem} alt="Post Image" />
          
        
        </BigImageContainer>
      </Container>
    </div>
  );
}

