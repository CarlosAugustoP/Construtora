import React, { useState, memo } from 'react';
import { PostContainer, LeftArrow, RightArrow, ScrollingContent } from './styles';
import Arrow from '../../../public/img/Arrow.svg';
import {posts, posts2, posts3} from './posts';
import { animated, useSpring } from 'react-spring';
import { useEffect } from 'react';

export const AnimatedText = ({ children }) => {  
  const [animationProps, setAnimationProps] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 700 },
  }));

  useEffect(() => {
    setAnimationProps({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 700},
    });
  }, [children, setAnimationProps]);
  
  return (
    <animated.p style={{ ...animationProps, 
      fontWeight: '300',
      fontSize: '15px',
      display:'flex',
      alignItems: 'center',
      flexDirection: 'column'

     }}>
      {children}
    </animated.p>
  );
};

const AnimatedImage = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);

  const title = post.Bairro;
  const location = post.localização;
  const value = post.valor;
  const started = post.iniciado_em;
  const finished = post.entregue_em;

  const src = post.imagem;

  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { duration: 1000 },
  });

  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%',
      }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <animated.img 
        style={{ ...animationProps, width: '100%', height: '100%' }} 
        src={src} 
        alt="Post"
      />
      {isHovered && (
        <animated.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '16px',
            background: 'rgba(0, 0, 0, 0.6)',
            border: isHovered ? '5px solid #fff' : 'none',
            cursor: 'pointer',
          }}
        >
          <div>
          <AnimatedText>{title}</AnimatedText>
            <AnimatedText>{location}</AnimatedText>
            <AnimatedText>{value}</AnimatedText>
            <AnimatedText>{started}</AnimatedText>
            <AnimatedText>{finished}</AnimatedText>
          </div>
        </animated.div>
      )}
    </div>
  );
};

export default function PostHeader(props){
  // PostGrid is a component that receives an array of posts as props and renders them in a grid
  const PostGrid = ({ posts }) => {
    return (
      <div style = {{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 270px)',
        gridAutoRows: '270px',
        gap: '40px',
        width: '80%',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {posts.map((post, index) => (
          <PostContainer key={index}>
            <AnimatedImage post={post} />
          </PostContainer>
        ))}
      </div>
    );
  };
  
  // current grid starts as 1, and can be defined to assume other values with setCurrentGrid
  const [currentGrid, setCurrentGrid] = useState(1);

  // If the user is in currentGrid 1, posts1 will be rendered and so on.
  const getPostsForGrid = () => {
    if (currentGrid === 1) {
      return posts;
    } else if (currentGrid === 2) {
      return posts2;
    } else {  
      return posts3; 
    }
  };

  // When the user clicks the left arrow, the current grid is set to the previous grid
  const handlePreviousGrid = () => {
    setCurrentGrid((prevGrid) => (prevGrid === 1 ? 3 : prevGrid - 1));
  };

  // When the user clicks the right arrow, the current grid is set to the next grid
  const handleNextGrid = () => {
    setCurrentGrid((prevGrid) => (prevGrid === 3 ? 1 : prevGrid + 1));
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '100px',
          gap: '20px',
        }}
      >
        <LeftArrow onClick={handlePreviousGrid} src={Arrow} />
        <ScrollingContent>
          <PostGrid posts={getPostsForGrid()}/>
        </ScrollingContent>
        <RightArrow onClick={handleNextGrid} src={Arrow} />
      </div>
    </>
  );
}

