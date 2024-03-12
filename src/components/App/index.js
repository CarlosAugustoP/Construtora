import React, { useState } from 'react';
import Header from '../NavBar';
import Contato from '../Contato';
import PostHeader from '../PostHeader';
import FeaturedPost from '../FeaturedPost';
import {posts} from '../PostHeader/posts';

export default function App(){
  const [featuredPost, setFeaturedPost] = useState(posts[0]);

  return (
    <>
      <div style = {{ height: '130px' }}/>
      <Header/> 
      <FeaturedPost post={featuredPost} />
      <PostHeader/>
      <Contato/>
      </>
  );
}
