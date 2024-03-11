import React, { useState, memo } from 'react';
import { PostContainer, LeftArrow, RightArrow, ScrollingContent } from './styles';
import Arrow from '../../../public/img/Arrow.svg';
import {posts, posts2, posts3} from './posts';
import { animated, useSpring } from 'react-spring';

const AnimatedImage = ({ src }) => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { duration: 600 },
  });

  return (
    <animated.img 
      style={{ ...animationProps, width: '100%', height: '100%' }} 
      src={src} 
      alt="Post"
    />
  );
};

export default function PostHeader(props){
  // PostGrid is a component that receives an array of posts as props and renders them in a grid
  const PostGrid = ({ posts, onPostHover }) => {
    return (
      <div style = {{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 230px)',
        gridAutoRows: '230px',
        gap: '40px',
        width: '80%',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {posts.map((post, index) => (
          <PostContainer key={index} onMouseEnter={() => onPostHover(post)}>
            <AnimatedImage src={post.imagem} />
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
          <PostGrid posts={getPostsForGrid()} onPostHover={props.onPostHover}/>
        </ScrollingContent>
        <RightArrow onClick={handleNextGrid} src={Arrow} />
      </div>
    </>
  );
}

