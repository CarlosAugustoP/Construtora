import React, { useState } from 'react';
import Header from '../NavBar';
import Contato from '../Contato';
import PostHeader from '../PostHeader';
import FeaturedPost from '../FeaturedPost';
import {posts} from '../PostHeader/posts';

export default function App(){

  return (
    <>
      <div style = {{ height: '150px' }}/>
      <Header/> 
      <FeaturedPost />
      <PostHeader />
      <Contato/>
      </>
  );
}
